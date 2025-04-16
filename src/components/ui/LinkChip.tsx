import { ReactNode } from "react";
import { Button, ButtonProps, Stack } from "@mui/material";

interface LinkChipProps extends ButtonProps {
  icon: ReactNode;
}

const LinkChip = ({ sx, icon, children, ...rest }: LinkChipProps) => {
  return (
    <Button size="small" variant="contained" sx={{ p: 0, pr: 2, fontWeight: 600, ...sx }} {...rest}>
      <Stack
        sx={{
          bgcolor: "success.main",
          color: "primary.main",
          borderRadius: "999px",
          p: 0.5,
          mr: 1,
        }}
      >
        {icon}
      </Stack>
      {children}
    </Button>
  );
};

export default LinkChip;
