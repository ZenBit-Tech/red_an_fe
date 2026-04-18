import { Logo } from "@/common/Logo";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import { HeaderContainer, HeaderWrapper } from "./styles";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo />
          <Nav />
          <Sign />
        </HeaderContainer>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
