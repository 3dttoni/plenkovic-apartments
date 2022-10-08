import { IApartmentsCollection } from "@m/apartment";
import { Typography } from "@mui/material";
import { getApartments } from "@u/contentful";

interface ApartmentsPageProps {
  title: string;
}
export default function ApartmentsPage({ title }: ApartmentsPageProps) {
  return <Typography variant="h1">Apartment title: {title}</Typography>;
}

export async function getStaticProps(): Promise<{
  props: ApartmentsPageProps;
}> {
  const data: IApartmentsCollection = await getApartments();

  return {
    props: {
      title: data.apartmentCollection.items[0].title,
    },
  };
}
