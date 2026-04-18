import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNav = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView();
    }
  }, [state]);

  const handleClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    if (to.startsWith("#")) {
      const id = to.slice(1);
      if (pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        document.getElementById(id)?.scrollIntoView();
      }
    } else {
      navigate(to);
    }
  };

  const isActive = (to: string) => {
    if (to.startsWith("#")) return pathname === "/";
    return pathname === to;
  };

  return { handleClick, isActive };
};
