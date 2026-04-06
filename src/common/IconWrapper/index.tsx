import { Box, type BoxProps } from "@mui/material";
import { alpha } from "@mui/material/styles";

interface IconWrapperProps extends BoxProps {
  iconColor?: string;
}

export const IconWrapper = ({
  iconColor,
  children,
  sx,
  ...props
}: IconWrapperProps) => {
  const getBackgroundColor = () => {
    if (iconColor) return alpha(iconColor, 0.1);
    return "secondary.main";
  };

  return (
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: iconColor || "primary.main",
        backgroundColor: getBackgroundColor(),
        "& svg": {
          width: "20px",
          height: "20px",
          fill: "none",
          stroke: "currentColor",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
