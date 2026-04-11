import { NAV_LINKS } from "@/constants";
import { LinkHeader, NavWrapper } from "@/components/Header/styles";

const Nav = () => (
  <NavWrapper>
    {NAV_LINKS.map((linkName) => (
      <LinkHeader
        key={linkName}
        href={`#${linkName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {linkName}
      </LinkHeader>
    ))}
  </NavWrapper>
);

export default Nav;
