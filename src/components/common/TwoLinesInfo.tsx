import { SxProps, Theme, Typography } from "@mui/material";

interface TwoLinesInfoProps {
  primaryText: string;
  secondaryText: string;
  secondaryColor?: string;
  secondaryFontWeight?: number;
  sx?: SxProps<Theme>;
}

const TwoLinesInfo = ({
  primaryText,
  secondaryText,
  secondaryColor = "success.main",
  secondaryFontWeight = 700,
  sx = {},
}: TwoLinesInfoProps) => {
  return (
    <Typography
      variant="body1"
      sx={{
        mb: 1,
        color: "primary.contrastText",
        fontWeight: "500",
        textAlign: "center",
        bgcolor: "#71376A40",
        px: 2,
        py: 2,
        borderRadius: 1,
        // borderLeft: "6px solid #ffffff10",
        // borderRight: "6px solid transparent",
        ...sx,
      }}
    >
      {primaryText}
      <Typography
        component="span"
        sx={{
          fontWeight: secondaryFontWeight,
          color: secondaryColor,
          display: "block",
        }}
      >
        {secondaryText}
      </Typography>
    </Typography>
  );
};

export default TwoLinesInfo;
