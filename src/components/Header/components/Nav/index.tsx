import { NAV_LINKS } from "@/constants";
import { LinkHeader, NavWrapper } from "@/components/Header/styles";

const Nav = () => (
  <NavWrapper>
    {NAV_LINKS.map((linkName) => (
      <LinkHeader key={linkName.label} to={linkName.to}>
        {linkName.label}
      </LinkHeader>
    ))}
  </NavWrapper>
);

export default Nav;
