import { FC } from "react";
import { ParseContent } from "@httpfoundation/shortcodes";
import { Typography, TypographyProps } from "@mui/material";
import { stripHtmlTags } from "@/lib/utils";

interface FormattedContentProps extends TypographyProps {
  children: string;
}

const FormattedContent: FC<FormattedContentProps> = ({
  children,
  align = "justify",
  variant = "body2",
  fontWeight = "400",
  color = "text.secondary",
  sx,
}) => {
  if (stripHtmlTags(children).trim().length < 1) {
    return null;
  }

  return (
    <Typography
      align={align}
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      sx={{
        "&, & p": {
          textAlign: align,
          m: 0,
        },
        "& p:not(:last-child), & table:not(:last-child)": {
          mb: 1,
        },
        "& > *:first-child": {
          mt: 0,
        },
        "& strong, & b": { color: "text.primary" },
        "& a": {
          textDecoration: "underline",
          color: "primary.main",
          fontWeight: "500",
          "&:hover": { textDecoration: "none", color: "primary.dark" },
        },
        "& hr": {
          border: 0,
          width: "100%",
          height: "1px",
          bgcolor: "grey.400",
          flexShrink: 0,
          my: 2,
        },
        "& img": {
          maxWidth: "100%",
          userSelect: "none",
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "text.primary",
          fontWeight: "500",
          mb: 0,
          mt: 2,
        },
        h1: { fontSize: 36 },
        h2: { fontSize: 32 },
        h3: { fontSize: 26 },
        h4: { fontSize: 22 },
        h5: { fontSize: 18 },
        h6: { fontSize: 16 },
        table: { borderCollapse: "collapse", tableLayout: "fixed" },
        "td, th": { px: 1.5, py: 0.75 },
        "td:has(> img)": { px: 0 },
        "td:first-child, th:first-child": { pl: 0 },
        // "& .bg-article": {
        //   bgcolor: "primary.main",
        //   color: "white",
        //   right: "-40%",
        //   bottom: "-40%",
        //   backgroundPosition: "-50% 550%",
        //   backgroundSize: "445px",
        //   "& .MuiTypography-root": {
        //     color: "white",
        //     fontWeight: "400 !important",
        //     fontSize: 28,
        //     p: -2,
        //   },
        // },
        ...sx,
      }}
    >
      <ParseContent content={children} />
    </Typography>
  );
};

export default FormattedContent;

