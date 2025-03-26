import { Container, SxProps } from "@mui/material";

interface SectionContainerProps {
  children: React.ReactNode;
  padding?: number;
  sx?: SxProps;
}

const SectionContainer = ({ children, padding = 2, sx }: SectionContainerProps) => {
  return <Container sx={{ py: padding, ...sx }}>{children}</Container>;
};

export default SectionContainer;

