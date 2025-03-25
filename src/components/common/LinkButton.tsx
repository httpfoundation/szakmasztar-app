import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
      startIcon={direction === "backward" ? <ChevronLeft /> : null}
      endIcon={direction === "forward" ? <ChevronRight /> : null}
      {...props}
    >
      {children}
    </Button>
  );
}

