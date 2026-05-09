import { useNavigate } from "react-router-dom";

import { APP_ROUTES } from "@/constants/index";
import { SignButton } from "@/components/Header/styles";

const Sign = () => {
  const navigate = useNavigate();

  const handleSignIn = (): void => {
    navigate(APP_ROUTES.SIGN_IN);
  };

  return (
    <SignButton
      onClick={handleSignIn}
      endIcon={
        <svg width="14" height="14" fill="currentColor">
          <use href="/hero/icons.svg#vector" />
        </svg>
      }
    >
      Get Started
    </SignButton>
  );
};

export default Sign;
