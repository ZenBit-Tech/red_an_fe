import { Box, Button } from "@mui/material";
import { LinkHeader } from "@/components/Header/styles";
const Sign = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <LinkHeader href="#signin">Sign In</LinkHeader>
      <Button
        variant="contained"
        disableElevation
        sx={{
          borderRadius: "50px",
          px: 6,
          py: 2,
          fontSize: 14,
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Sign;
