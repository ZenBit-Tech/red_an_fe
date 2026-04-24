import React from "react";

interface TeamMemberImageProps {
  name: string;
  prefix: string;
}

export const TeamMemberImage: React.FC<TeamMemberImageProps> = ({
  name,
  prefix,
}) => {
  const CLOUDINARY_BASE = "https://res.cloudinary.com/dpiwxfm5y/image/upload";

  const getImageUrl = (width: number, dpr: number = 1) => {
    const size = Math.round(width * dpr);

    return `${CLOUDINARY_BASE}/f_auto,q_auto,w_${size}/${prefix}.jpg`;
  };

  return (
    <picture>
      {/* Desktop */}
      <source
        media="(min-width: 1440px)"
        srcSet={`${getImageUrl(380)} 1x, ${getImageUrl(760)} 2x`}
      />

      {/* Tablet */}
      <source
        media="(min-width: 768px)"
        srcSet={`${getImageUrl(360)} 1x, ${getImageUrl(720)} 2x`}
      />

      {/* Mobile */}
      <source srcSet={`${getImageUrl(340)} 1x, ${getImageUrl(680)} 2x`} />

      <img
        src={getImageUrl(380)}
        alt={name}
        loading="lazy"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </picture>
  );
};
