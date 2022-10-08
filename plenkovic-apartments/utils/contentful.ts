import { IApartmentsCollection } from "@m/apartment";
import { ILandingPage } from "@m/landingPage";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
  },
});

export async function getApartments(): Promise<IApartmentsCollection> {
  return graphQLClient.request(gql`
    {
      apartmentCollection {
        items {
          title
        }
      }
    }
  `);
}

export async function getLandingPage(): Promise<ILandingPage> {
  return graphQLClient.request(gql`
    {
      landingPage(id: "47DJlqxpkFwlc7QNSuqbe6") {
        headingSlidesCollection {
          items {
            title
            url
          }
          total
        }
        introText {
          json
        }
      }
    }
  `);
}
