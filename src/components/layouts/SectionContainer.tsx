import { Container, SxProps } from "@mui/material";

interface SectionContainerProps {
  children: React.ReactNode;
  padding?: number;
  sx?: SxProps;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const SectionContainer = ({
  children,
  padding = 2,
  maxWidth = "md",
  sx,
}: SectionContainerProps) => {
  return (
    <Container maxWidth={maxWidth} sx={{ py: padding, ...sx }}>
      {children}
    </Container>
  );
};

export default SectionContainer;
