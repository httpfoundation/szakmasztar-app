import { Container } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  padding?: number;
}

const PageContainer = ({ children, padding = 2 }: PageContainerProps) => {
  return <Container sx={{ py: padding }}>{children}</Container>;
};

export default PageContainer;
