import { IApartmentsCollection } from "@m/apartment";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
  },
});

export async function getApartments(): Promise<IApartmentsCollection> {
  const query = gql`
    {
      apartmentCollection {
        items {
          title
        }
      }
    }
  `;

  return graphQLClient.request(query);
}
