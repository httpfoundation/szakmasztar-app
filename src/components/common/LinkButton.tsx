import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, ButtonProps } from "@mui/material";

interface LinkButtonProps extends ButtonProps {
  href: string;
  direction?: "forward" | "backward";
}

export default function LinkButton({ href, children, direction, ...props }: LinkButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      sx={{ py: 1 }}
      startIcon={direction === "backward" ? <ArrowBackIcon /> : null}
      endIcon={direction === "forward" ? <ArrowForwardIcon /> : null}
      {...props}
    >
      {children}
    </Button>
  );
}
