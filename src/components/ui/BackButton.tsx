"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, ButtonProps } from "@mui/material";

interface BackButtonProps extends Omit<ButtonProps, "startIcon" | "children" | "onClick"> {
  label?: string;
}

const BackButton: FC<BackButtonProps> = ({
  variant = "outlined",
  size = "medium",
  sx,
  label = "Vissza",
  ...rest
}) => {
  const router = useRouter();
  return (
    <Button
      size={size}
      variant={variant}
      startIcon={<ChevronLeftIcon sx={{ mr: -0.5 }} />}
      onClick={() => router.back()}
      sx={{
        width: "fit-content",
        fontSize: 15,
        px: 2,
        ...sx,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default BackButton;

