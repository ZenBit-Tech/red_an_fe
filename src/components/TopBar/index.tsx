import { AccountCircleOutlined } from "@mui/icons-material";
import type { TopBarProps } from "./constants";
import * as S from "@/components/TopBar/styles";

export const TopBar = ({ userEmail }: TopBarProps) => {
  return (
    <S.TopBarContainer>
      <S.TopBarActions>
        <S.AvatarEmail>{userEmail}</S.AvatarEmail>
        <S.AvatarButton>
          <AccountCircleOutlined />
        </S.AvatarButton>
      </S.TopBarActions>
    </S.TopBarContainer>
  );
};

export default TopBar;
