import { Logo } from "@/common/Logo";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import { HeaderContainer, HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Nav />
        <Sign />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
