import { HomePageProps } from "@p/index";
import styles from "@c/Home/HeadingSlides/HeadingSlides.module.scss";
import Image from "next/image";
import HideMobile from "@c/Hide/Mobile";
import { useEffect, useState } from "react";

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
      <div className={styles.container}>
        <Image
          src={headingSlides[currentSlideIndex].url}
          title={headingSlides[currentSlideIndex].title}
          alt={headingSlides[currentSlideIndex].title}
          layout="fill"
        />
      </div>
    </HideMobile>
  );
}
