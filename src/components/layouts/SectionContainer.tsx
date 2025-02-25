import { Container } from "@mui/material";

interface SectionContainerProps {
  children: React.ReactNode;
  padding?: number;
}

const SectionContainer = ({ children, padding = 2 }: SectionContainerProps) => {
  return <Container sx={{ py: padding }}>{children}</Container>;
};

export default SectionContainer;
