import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function getStarsIcons(stars: number) {
  const starsIcons = [];

  while (stars > 0.5) {
    --stars;
    starsIcons.push(StarIcon);
  }
  if (stars !== 0) starsIcons.push(StarHalfIcon);
  if (starsIcons.length < 5) {
    while (starsIcons.length < 5) {
      starsIcons.push(StarBorderIcon);
    }
  }

  return starsIcons;
}
