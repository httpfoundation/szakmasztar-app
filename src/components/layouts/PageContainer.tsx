import { Container, SxProps } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
  padding?: number;
  sx?: SxProps;
}

const PageContainer = ({ children, padding = 2, sx }: PageContainerProps) => {
  return <Container sx={{ py: padding, ...sx }}>{children}</Container>;
};

export default PageContainer;
