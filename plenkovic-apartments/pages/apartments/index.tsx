import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
//   host: "preview.contentful.com",
});

interface ApartmentsProps {
  title: string;
}
export default function Apartments({ title }: ApartmentsProps) {
  return <h1>Apartment title: {title}</h1>;
}

export async function getStaticProps() {
  const apartment = await client.getEntry("6IyeOn3nL84nOkMU2FyUGZ")

  return {
    props: {
      title: apartment.fields.title,
    },
  };
}
