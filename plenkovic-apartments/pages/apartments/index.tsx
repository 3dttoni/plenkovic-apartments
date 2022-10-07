import { IApartmentsCollection } from "@m/apartment";
import { Typography } from "@mui/material";
import { getApartments } from "@u/contentful";

interface ApartmentsProps {
  title: string;
}
export default function Apartments({ title }: ApartmentsProps) {
  return <Typography variant="h1">Apartment title: {title}</Typography>;
}

export async function getStaticProps() {
  const data: IApartmentsCollection = await getApartments();

  return {
    props: {
      title: data.apartmentCollection.items[0].title,
    },
  };
}
