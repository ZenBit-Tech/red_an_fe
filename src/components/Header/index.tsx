import { Logo } from "@/common/Logo";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <Sign />
    </HeaderContainer>
  );
};

export default Header;
