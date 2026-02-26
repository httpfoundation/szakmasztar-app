"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import EventCards from "@/components/programok/EventCards";

interface BoothDetailPanelProps {
  boothTitle: string;
  boothCode: number | null;
  articles: ArticleFragment[];
  requestClose?: boolean;
  onClose: () => void;
  onCloseStart?: () => void;
}

// How much of the container the panel is shifted down initially
const INITIAL_OFFSET_RATIO = 0.6; // 60% hidden → 40% visible

const BoothDetailPanel = ({
  boothTitle,
  boothCode,
  articles,
  requestClose,
  onClose,
  onCloseStart,
}: BoothDetailPanelProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isClosing, setIsClosing] = useState(false);

  // Sort articles by category priority (same order as map symbol icons)
  const sortedArticles = useMemo(() => {
    const getCategoryPriority = (slug: string): number => {
      if (slug.startsWith("interaktiv-szakmabemutato") || slug.startsWith("egyeb-szakmabemutato"))
        return 0;
      if (slug.startsWith("nak")) return 1;
      if (slug.startsWith("osztvszktv")) return 2;
      if (slug.startsWith("wshu")) return 3;
      return 4;
    };
    return [...articles].sort((a, b) => getCategoryPriority(a.slug) - getCategoryPriority(b.slug));
  }, [articles]);

  const paperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastTouchY = useRef(0);
  const isDragging = useRef(false);
  const containerHeight = useRef(0);

  // Two separate offsets:
  // panelOffset: how far the panel is pushed down (>=0). 0 = panel fills container.
  // contentOffset: how far content is scrolled up (>=0). 0 = content at top.
  const panelOffset = useRef(0);
  const contentOffset = useRef(0);

  const applyTransforms = useCallback(() => {
    if (paperRef.current) {
      paperRef.current.style.transform = `translateY(${panelOffset.current}px)`;
    }
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(${-contentOffset.current}px)`;
    }
  }, []);

  useEffect(() => {
    if (requestClose && !isClosing) {
      setIsClosing(true);
      onCloseStart?.();
    }
  }, [requestClose, onCloseStart, isClosing]);

  // Open animation: start off-screen, transition to collapsed position
  useEffect(() => {
    if (!paperRef.current || !isMobile) return;
    const parentEl = paperRef.current.parentElement;
    containerHeight.current = parentEl
      ? parentEl.getBoundingClientRect().height
      : window.innerHeight;

    const initialOffset = containerHeight.current * INITIAL_OFFSET_RATIO;

    // Start off-screen (no transition)
    panelOffset.current = containerHeight.current;
    contentOffset.current = 0;
    paperRef.current.style.transition = "none";
    applyTransforms();

    // Animate to collapsed position on next frame
    requestAnimationFrame(() => {
      if (!paperRef.current) return;
      panelOffset.current = initialOffset;
      paperRef.current.style.transition = "transform 0.35s ease-out";
      applyTransforms();
    });
  }, [boothTitle, isMobile, applyTransforms]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onCloseStart?.();
  }, [onCloseStart]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile || !paperRef.current) return;

      isDragging.current = true;
      lastTouchY.current = e.touches[0].clientY;
      const parentEl = paperRef.current.parentElement;
      containerHeight.current = parentEl
        ? parentEl.getBoundingClientRect().height
        : window.innerHeight;

      // Remove transitions during drag
      paperRef.current.style.transition = "none";
      if (contentRef.current) contentRef.current.style.transition = "none";
    },
    [isMobile]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging.current || !paperRef.current) return;
      // e.preventDefault();

      const currentY = e.touches[0].clientY;
      const frameDelta = lastTouchY.current - currentY; // positive = finger up
      lastTouchY.current = currentY;

      const contentEl = contentRef.current;
      // Actual content height = content + header + handle (approx 80px)
      const headerHandleHeight = 100;
      const actualContentHeight = (contentEl?.scrollHeight ?? 0) + headerHandleHeight;
      // Don't let the panel go higher than needed to show all content
      const minPanelOffset = Math.max(0, containerHeight.current - actualContentHeight);
      const maxContentOffset = contentEl
        ? Math.max(0, contentEl.scrollHeight - (containerHeight.current - 80)) // 80px for header+handle
        : 0;

      if (frameDelta > 0) {
        // Finger moving UP → reveal more
        if (panelOffset.current > minPanelOffset) {
          // Phase 1: expand panel (reduce panelOffset)
          panelOffset.current = Math.max(minPanelOffset, panelOffset.current - frameDelta);
        } else if (maxContentOffset > 0) {
          // Phase 2: scroll content (increase contentOffset)
          contentOffset.current = Math.min(maxContentOffset, contentOffset.current + frameDelta);
        }
      } else {
        // Finger moving DOWN → hide content / collapse panel
        if (contentOffset.current > 0) {
          // Phase 2 reverse: unscroll content
          contentOffset.current = Math.max(0, contentOffset.current + frameDelta);
        } else {
          // Phase 1 reverse: collapse panel (increase panelOffset)
          panelOffset.current = panelOffset.current - frameDelta;
        }
      }

      applyTransforms();
    },
    [applyTransforms]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current || !paperRef.current) return;
    isDragging.current = false;

    const initialOffset = containerHeight.current * INITIAL_OFFSET_RATIO;
    const headerHandleHeight = 100;
    const actualContentHeight = (contentRef.current?.scrollHeight ?? 0) + headerHandleHeight;
    const minPanelOffset = Math.max(0, containerHeight.current - actualContentHeight);

    paperRef.current.style.transition = "transform 0.3s ease";
    if (contentRef.current) contentRef.current.style.transition = "transform 0.3s ease";

    if (panelOffset.current > initialOffset * 1.3) {
      // Dragged far enough down → dismiss
      setIsClosing(true);
      onCloseStart?.();
    } else if (panelOffset.current > initialOffset * 0.85 && contentOffset.current === 0) {
      // Snap to collapsed
      panelOffset.current = initialOffset;
      applyTransforms();
    } else if (panelOffset.current > minPanelOffset) {
      // Snap to content-based limit (shows all content, no gap at bottom)
      panelOffset.current = minPanelOffset;
      applyTransforms();
    }
    // If contentOffset > 0, keep current position (user was scrolling content)
  }, [applyTransforms, onCloseStart]);

  return (
    <Paper
      ref={paperRef}
      elevation={8}
      onAnimationEnd={() => {
        if (isClosing) onClose();
      }}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: { xs: 0, md: "auto" },
        width: { xs: "100%", md: 420 },
        height: { xs: "100%", md: "auto" },
        maxHeight: { xs: "100%", md: "100%" },
        m: { xs: 0, md: 2 },
        borderRadius: { xs: "16px 16px 0 0", md: 2 },
        display: "flex",
        flexDirection: "column",
        zIndex: 10,
        overflow: "hidden",
        bgcolor: "primary.main",
        // Mobile: positioned via JS transforms. Desktop: no transform.
        transform: { xs: "translateY(100%)", md: "none" },
        // Close animation
        ...(isClosing && {
          animation: "slideDown 0.25s ease-in forwards",
          "@keyframes slideDown": {
            to: { transform: "translateY(100%)" },
          },
        }),
        // Desktop open animation
        ...(!isClosing &&
          !isMobile && {
            animation: "slideUp 0.3s ease-out",
            "@keyframes slideUp": {
              from: { transform: "translateY(100%)" },
              to: { transform: "translateY(0)" },
            },
          }),
        touchAction: "none",
      }}
    >
      {/* Drag handle (mobile only) */}
      <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          py: 1,
          cursor: "grab",
          bgcolor: "primary.dark",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 4,
            borderRadius: 2,
            bgcolor: "rgba(255,255,255,0.4)",
          }}
        />
      </Box>

      {/* Header */}
      <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          bgcolor: "primary.dark",
          color: "primary.contrastText",
          flexShrink: 0,
          boxShadow: "0 4px 8px rgba(0,0,0,0.25)",
          clipPath: "inset(0 0 -10px 0)",
          mt: { xs: -1, md: 0 },
          zIndex: 1,
        }}
      >
        <Typography variant="h6" noWrap sx={{ fontWeight: 700, flex: 1 }}>
          {boothCode && (
            <Box component="span" sx={{ fontWeight: 900, mr: 1 }}>
              {boothCode.toString().padStart(2, "0")}
            </Box>
          )}
          {boothTitle}
        </Typography>
        <IconButton onClick={handleClose} size="small" sx={{ color: "inherit", ml: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Body — content slides via translateY, no native scroll */}
      <Box
        sx={{
          flex: 1,
          overflow: { xs: "hidden", md: "auto" },
          position: "relative",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Box
          ref={contentRef}
          sx={{
            px: 2,
            py: 2,
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          {articles.length > 0 ? (
            <EventCards
              events={sortedArticles}
              permutatingColors
              singleColumn
              showCategoryIcon
              showMapLink={false}
              wholeCardLink
              sort={false}
            />
          ) : (
            <Typography variant="body2" color="text.primary" align="center" sx={{ py: 4 }}>
              Ehhez a standhoz nem tartozik szakmai program.
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default BoothDetailPanel;
