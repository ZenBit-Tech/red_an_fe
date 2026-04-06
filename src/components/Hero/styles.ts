import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";

export const HeroSection = styled("section")`
  padding: 80px 0 64px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const HeroContent = styled("div")`
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BadgeWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const BadgeTextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled(Typography)`
  && {
    font-weight: 600;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const Description = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 40px;
    font-size: 20px;
  }
`;

export const GetStartedButton = styled(Button)`
  && {
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 12px;
    margin-bottom: 64px;
    display: flex;
    gap: 8px;
  }
`;

export const BoxArrowUpRight = styled(Box)`
  && {
    font-size: 24px;
    color: ${({ theme }) => theme.palette.secondary.main};
    transition: transform 0.2s;
    flex-shrink: 0;
    display: flex;
    align-items: center;

    &:hover {
      transform: rotate(45deg);
    }
  }
`;

export const StatsList = styled(Box)`
  display: flex;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const StatItem = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
