import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNav = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  useEffect(() => {
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView();
    }
  }, [state]);

  const handleClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    if (to.startsWith("#")) {
      const id = to.slice(1);
      setActiveAnchor(to);
      if (pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        document.getElementById(id)?.scrollIntoView();
      }
    } else {
      setActiveAnchor(null);
      navigate(to);
    }
  };

  const isActive = (to: string) => {
    if (to.startsWith("#")) return activeAnchor === to;
    return pathname === to;
  };

  return { handleClick, isActive };
};
