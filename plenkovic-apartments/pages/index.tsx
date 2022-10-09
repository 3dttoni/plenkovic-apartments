import HomePageComponent from "@c/Home";
import { IAsset } from "@m/shared";
import { ILandingPage } from "@m/landingPage";
import { getLandingPage } from "@u/contentful";
import { RichTextContent } from "contentful";

export interface HomePageProps {
  headingSlides: IAsset[];
  headingText: RichTextContent;
  introText: RichTextContent;
  apartments: {
    summary: RichTextContent;
    banner: IAsset;
  }[];
}
export default function HomePage(props: HomePageProps) {
  return <HomePageComponent {...props} />;
}

export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  const data: ILandingPage = await getLandingPage();

  return {
    props: {
      headingSlides: data.landingPage.headingSlidesCollection.items,
      headingText: data.landingPage.headingText.json,
      introText: data.landingPage.introText.json,
      apartments: data.landingPage.topApartmentsCollection.items.map(
        ({ summary, banner }) => ({ summary: summary.json, banner })
      ),
    },
  };
}
