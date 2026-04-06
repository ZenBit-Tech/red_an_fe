import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import { Logo } from "@/common/Logo";

const Header = () => {
  return (
    <Container sx={{ px: { xs: 0, lg: 2 } }}>
      <AppBar>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Logo />
          </Box>
          <Nav />
          <Sign />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
