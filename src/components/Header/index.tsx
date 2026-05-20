import { useState } from "react";
import { Logo } from "@/common/Logo";
import { useNav } from "@/common/hooks/useNav";
import { NAV_LINKS, ANCHOR_LINKS } from "@/constants";
import Nav from "./components/Nav";
import Sign from "./components/Sign";
import * as S from "./styles";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { handleClick, isActive } = useNav();

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string,
  ) => {
    handleClick(e, to);
    setIsBurgerOpen(false);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Logo />
        <Nav />

        <S.DesktopSignWrapper>
          <Sign />
        </S.DesktopSignWrapper>
        <S.BurgerButton onClick={() => setIsBurgerOpen(true)}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <use href={"/hero/icons.svg#burger"} />
          </svg>
        </S.BurgerButton>
      </S.HeaderContainer>

      <S.BurgerMenu
        anchor="right"
        open={isBurgerOpen}
        onClose={() => setIsBurgerOpen(false)}
      >
        <S.BurgerMenuClose>
          <S.BurgerButton onClick={() => setIsBurgerOpen(false)}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <use href={"/hero/icons.svg#close"} />
            </svg>
          </S.BurgerButton>
        </S.BurgerMenuClose>

        <S.BurgerMenuLinksWrapper>
          {ANCHOR_LINKS.map((link) => (
            <S.MobileLinkHeader
              key={link.label}
              href={link.to}
              className={isActive(link.to) ? "active" : ""}
              onClick={(e) => handleMobileLinkClick(e, link.to)}
            >
              {link.label}
            </S.MobileLinkHeader>
          ))}
          {NAV_LINKS.map((link) => (
            <S.MobileLinkHeader
              key={link.label}
              href={link.to}
              className={isActive(link.to) ? "active" : ""}
              onClick={(e) => handleMobileLinkClick(e, link.to)}
            >
              {link.label}
            </S.MobileLinkHeader>
          ))}
        </S.BurgerMenuLinksWrapper>

        <S.BurgerMenuSignButton onClick={() => setIsBurgerOpen(false)}>
          <Sign />
        </S.BurgerMenuSignButton>
      </S.BurgerMenu>
    </S.HeaderWrapper>
  );
};

export default Header;
