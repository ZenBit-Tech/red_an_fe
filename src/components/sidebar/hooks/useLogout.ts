import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS, APP_ROUTES } from "@/constants/index";
export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    navigate(APP_ROUTES.SIGN_IN);
  };

  return { handleLogout };
};
