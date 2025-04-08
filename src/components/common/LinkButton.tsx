import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { Button, ButtonProps } from "@mui/material";

interface LinkButtonProps extends ButtonProps {
  href: string;
  direction?: "forward" | "backward";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function LinkButton({
  href,
  children,
  direction,
  size = "medium",
  startIcon = <InfoIcon />,
  endIcon,
  ...props
}: LinkButtonProps) {
  return (
    <Button
      component={Link}
      // startIcon={<InfoIcon />}
      variant="contained"
      size={size}
      href={href}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        transition: "all 0.3s ease",
        // fontSize: "0.7rem !important",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.3)",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
        py: 0.75,
        px: 1.5,
        fontSize: size === "small" ? "0.7rem" : "1rem",
      }}
      startIcon={direction === "backward" ? <ChevronLeft /> : startIcon}
      endIcon={direction === "forward" ? <ChevronRight /> : endIcon}
      {...props}
    >
      {children}
    </Button>
  );
}

