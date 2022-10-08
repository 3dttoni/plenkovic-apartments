import HomeHeadingSlides from "@c/pages/Home/HeadingSlides";
import { HomePageProps } from "@p/index";

export default function HomePageComponent({
  headingSlides,
}: HomePageProps) {
    return <main><HomeHeadingSlides headingSlides={headingSlides}/></main>;
}
