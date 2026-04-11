import { Logo } from "@/common/Logo";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import { HeaderContainer, LogoWrapper } from "./styles";

const Header = () => {
  return (
    // <HeaderWrapper>
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Nav />
      <Sign />
    </HeaderContainer>
    // </HeaderWrapper>
  );
};

export default Header;
