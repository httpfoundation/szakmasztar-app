import {
  ChevronLeftRounded as ChevronLeft,
  ChevronRightRounded as ChevronRight,
} from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { Button, ButtonProps } from "@mui/material";
import Link from "@/components/common/Link";

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
        "&:focus,&:active,&:hover": {
          bgcolor: "primary.light",
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
