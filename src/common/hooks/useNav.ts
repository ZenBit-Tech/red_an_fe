import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNav = () => {
  const { pathname, state, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.scrollTo) {
      document
        .getElementById(state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  const handleClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    if (to.startsWith("#")) {
      const id = to.slice(1);
      if (pathname !== "/") {
        navigate("/" + to, { state: { scrollTo: id } });
      } else {
        navigate(to);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  const isActive = (to: string) => {
    if (to.startsWith("#")) return hash === to;
    return pathname === to && !hash;
  };

  return { handleClick, isActive };
};
