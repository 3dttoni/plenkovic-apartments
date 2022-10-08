import HomePageComponent from "@c/pages/Home";
import { IAsset } from "@m/common";
import { ILandingPage } from "@m/landingPage";
import { getLandingPage } from "@u/contentful";

export interface HomePageProps {
  headingSlides: IAsset[];
}
export default function HomePage(props: HomePageProps) {
  return <HomePageComponent {...props} />;
}

export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  const data: ILandingPage = await getLandingPage();

  return {
    props: {
      headingSlides: data.landingPage.headingSlidesCollection.items,
    },
  };
}
