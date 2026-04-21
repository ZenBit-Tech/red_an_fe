import React from "react";

interface TeamMemberImageProps {
  name: string;
  prefix: string;
}

export const TeamMemberImage: React.FC<TeamMemberImageProps> = ({
  name,
  prefix,
}) => {
  const path = `/aboutUsPage/team_picture/${prefix}`;

  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={`${path}_desk.webp 1x, ${path}_desk@2x.webp 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${path}_tab.webp 1x, ${path}_tab@2x.webp 2x`}
        type="image/webp"
      />

      <source
        srcSet={`${path}_mob.webp 1x, ${path}_mob@2x.webp 2x`}
        type="image/webp"
      />

      <img
        src={`${path}_desk.webp`}
        alt={name}
        loading="lazy"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </picture>
  );
};
