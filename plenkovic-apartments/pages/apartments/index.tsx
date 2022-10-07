import { IApartmentsCollection } from "@m/apartment";
import { getApartments } from "@u/contentful";

interface ApartmentsProps {
  title: string;
}
export default function Apartments({ title }: ApartmentsProps) {
  return <h1>Apartment title: {title}</h1>;
}

export async function getStaticProps() {
  const data: IApartmentsCollection = await getApartments();

  return {
    props: {
      title: data.apartmentCollection.items[0].title,
    },
  };
}
