import useIsMobile from "@h/useIsMobile";

export default function useAnimationEffect(): string {
  const animationEffect = useIsMobile() ? "flip" : "fade";

  return animationEffect;
}
