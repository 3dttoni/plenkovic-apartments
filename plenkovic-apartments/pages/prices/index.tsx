import PricesPageComponent from "@c/Prices";
import { PricesApartmentProps } from "@c/Prices/Apartment";
import { IPrices } from "@m/prices";
import { getPrices } from "@u/contentful";

export interface PricesPageProps {
  apartments: PricesApartmentProps[];
}

export default function PricesPage(props: PricesPageProps) {
  return <PricesPageComponent {...props} />;
}

export async function getStaticProps(): Promise<{
  props: PricesPageProps;
}> {
  const data: IPrices = await getPrices();

  return {
    props: {
      apartments: data.apartmentCollection.items.map((item) => ({
        priceSection: item.pricesSection.json,
        stars: item.stars,
        image: item.banner,
        title: item.title,
      })),
    },
  };
}
