import { SxProps, TextField, TextFieldProps } from "@mui/material";

interface CustomTextFieldProps extends Omit<TextFieldProps, "sx"> {
  sx?: SxProps;
}

const CustomTextField = ({ sx, InputProps, ...rest }: CustomTextFieldProps) => {
  return (
    <TextField
      color="info"
      sx={{
        color: "white",
        width: "100%",
        "& fieldset": { border: "0 !important", outline: 0 },
        ...sx,
      }}
      InputProps={{
        autoComplete: "off",
        ...InputProps,
        sx: {
          color: "primary.main",
          opacity: 1,
          background: "#D9D9D9",
          "&::placeholder": { opacity: 1 },
          borderTopLeftRadius: 999,
          borderBottomLeftRadius: 999,
          fontSize: 14,
          px: 0.9,
          fontWeight: 500,
          ...InputProps?.sx,
        },
      }}
      size="small"
      {...rest}
    />
  );
};

export default CustomTextField;
