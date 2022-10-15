import ApartmentsPageComponent from "@c/Apartments";
import { ApartmentDetailProps } from "@c/Apartments/Detail";
import { IApartmentCollection } from "@m/apartment";
import { getApartments } from "@u/contentful";

export interface ApartmentsPageProps {
  apartments: ApartmentDetailProps[];
}
export default function ApartmentsPage(props: ApartmentsPageProps) {
  return <ApartmentsPageComponent {...props} />;
}

export async function getStaticProps(): Promise<{
  props: ApartmentsPageProps;
}> {
  const data: IApartmentCollection = await getApartments();

  return {
    props: {
      apartments: data.apartmentCollection.items.map(
        ({
          title,
          description,
          stars,
          headerImage,
          pricesSection,
          reviewsCollection,
          pros,
          cons,
          galleryCollection,
        }) => ({
          title,
          stars,
          headerImage,
          description: description.json,
          pricesSection: pricesSection.json,
          reviewsCollection: reviewsCollection.items,
          pros: pros.json,
          cons: cons.json,
          gallery: galleryCollection.items,
        })
      ),
    },
  };
}
