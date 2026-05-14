import React from "react";
import * as S from "./styles";

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
        srcSet={`${getImageUrl(608)} 1x, ${getImageUrl(446)} 2x`}
      />

      {/* Mobile */}
      <source srcSet={`${getImageUrl(340)} 1x, ${getImageUrl(680)} 2x`} />

      <S.TeamImage src={getImageUrl(380)} alt={name} loading="lazy" />
    </picture>
  );
};
