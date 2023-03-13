import { HomePageProps } from "@p/index";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HideMobile from "@c/Hide/Mobile";

export default function HomeHeadingSlides({
  headingSlides,
}: Pick<HomePageProps, "headingSlides">) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex(
        (currentSlide) => (currentSlide + 1) % headingSlides.length
      );
    }, 8000);
    return () => clearInterval(intervalId);
  }, [headingSlides.length]);

  return (
    <HideMobile>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 650,
          zIndex: -1,
          img: {
            filter: "brightness(70%)",
            objectFit: "cover",
            width: "100vw",
          },
        }}
      >
        <Image
          src={headingSlides[currentSlideIndex].url}
          title={headingSlides[currentSlideIndex].title}
          alt={headingSlides[currentSlideIndex].title}
          layout="fill"
        />
      </Box>
    </HideMobile>
  );
}
