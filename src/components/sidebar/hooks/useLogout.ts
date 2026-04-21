import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS, APP_ROUTES } from "@/constants/index";
export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    navigate(APP_ROUTES.SIGN_IN);
  };
  const handleActionKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    action: () => void,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return { handleLogout, handleActionKeyDown };
};
