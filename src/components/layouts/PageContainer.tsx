import { Container, SxProps } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  padding?: number;
  sx?: SxProps;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const PageContainer = ({ children, padding = 2, maxWidth = "md", sx }: PageContainerProps) => {
  return (
    <Container maxWidth={maxWidth} sx={{ py: padding, ...sx }}>
      {children}
    </Container>
  );
};

export default PageContainer;
