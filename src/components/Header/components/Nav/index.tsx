import { Box } from "@mui/material";

import { NAV_LINKS } from "@/constants";
import { LinkHeader } from "@/components/Header/styles";

const Nav = () => {
  return (
    <Box sx={{ display: "flex", gap: 8 }}>
      {NAV_LINKS.map((linkName) => (
        <LinkHeader
          key={linkName}
          href={`#${linkName.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {linkName}
        </LinkHeader>
      ))}
    </Box>
  );
};

export default Nav;
