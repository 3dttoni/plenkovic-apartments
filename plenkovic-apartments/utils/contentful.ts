import { IApartmentCollection } from "@m/apartment";
import { IAppSettings } from "@m/appSettings";
import { ILandingPage } from "@m/landingPage";
import { IPrices } from "@m/prices";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
  },
});

export async function getApartments(): Promise<IApartmentCollection> {
  return graphQLClient.request(gql`
    {
      apartmentCollection(limit: 20) {
        items {
          title
          description {
            json
          }
          stars
          pros {
            json
          }
          cons {
            json
          }
          location {
            lat
            lon
          }
          headerImage {
            url
            title
          }
          galleryCollection {
            items {
              url
              title
            }
          }
          reviewsCollection {
            items {
              rate
              reviewDate
              review
              personName
              personPhoto {
                url
                title
              }
            }
          }
          headerImage {
            url
            title
          }
          pricesSection {
            json
          }
          stars
        }
      }
    }
  `);
}

export async function getPrices(): Promise<IPrices> {
  return graphQLClient.request(gql`
    {
      apartmentCollection {
        items {
          banner {
            url
            title
          }
          pricesSection {
            json
          }
          stars
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
        }
        introText {
          json
        }
        headingText {
          json
        }
        topApartmentsCollection {
          items {
            summary {
              json
            }
            banner {
              title
              url
            }
          }
        }
      }
    }
  `);
}

export async function getAppSettings(): Promise<IAppSettings> {
  return graphQLClient.request(gql`
    {
      appSettingsCollection {
        items {
          contactPhone
          email
          propertyLocation {
            lat
            lon
          }
        }
      }
    }
  `);
}
