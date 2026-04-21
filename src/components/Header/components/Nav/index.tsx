import { NAV_LINKS, ANCHOR_LINKS } from "@/constants";
import { LinkHeader, NavWrapper } from "@/components/Header/styles";
import { useNav } from "@/common/hooks/useNav";

const Nav = () => {
  const { handleClick, isActive } = useNav();

  return (
    <NavWrapper>
      {ANCHOR_LINKS.map((link) => (
        <LinkHeader
          key={link.label}
          href={link.to}
          className={isActive(link.to) ? "active" : ""}
          onClick={(e) => handleClick(e, link.to)}
        >
          {link.label}
        </LinkHeader>
      ))}

      {NAV_LINKS.map((link) => (
        <LinkHeader
          key={link.label}
          href={link.to}
          className={isActive(link.to) ? "active" : ""}
          onClick={(e) => handleClick(e, link.to)}
        >
          {link.label}
        </LinkHeader>
      ))}
    </NavWrapper>
  );
};

export default Nav;
