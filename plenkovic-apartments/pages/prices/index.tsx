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
      apartments: data.apartmentCollection.items.map(
        ({ stars, banner, title, pricesSection }) => ({
          priceSection: pricesSection.json,
          stars,
          image: banner,
          title,
        })
      ),
    },
  };
}
