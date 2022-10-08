import { HomePageProps } from "@p/index";
import styles from "@c/pages/Home/HeadingSlides/HeadingSlides.module.scss";
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
  }, []);

  return (
    <div className={styles.container}>
      <HideMobile>
        <Image
          src={headingSlides[currentSlideIndex].url}
          title={headingSlides[currentSlideIndex].title}
          layout="fill"
        />
      </HideMobile>
    </div>
  );
}
