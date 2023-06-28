import "server-only";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clij3imw706zl01uk9hgh5uw6/master"
);

export async function getData(lang) {
  client.setHeader(
    `authorization`,
    `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODc1NDM5OTQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpajNpbXc3MDZ6bDAxdWs5aGdoNXV3Ni9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjBhMjI2NjMtMjg3Ny00YWI2LWJiZDgtYWRhNTM0NDUxNWNjIiwianRpIjoiY2xqOHc0ZndsMW01eDAxdWVhdmk2ZncyeCJ9.G1vdjpgwqrqUdj-jTnbcSzNQ7YtHnSesxUUyfHwHlrzVtEYHHmKxtUg0dhpGtLdbwpsHGDSCi3QdEDURNC11iZP88tGQyo8eO3Y9mzRq7hfeKb54zMXjOUxbZoX91V9hikDQ_E1Brwr3prRwrNermtcS2a0H56Ex6EITbttLNm1qjJrJZ7uIn31FjyzG8t76bt2D_9DlwKwLiSkbDibsUXx7Q_bBszWbb3xTgNbdY3ROmLkh0LruAC9OEzPoHGzIngP4CxHb4m7SCrEH7l4X5PdsSn4XY_7N-0-AjlT8jAsT5K9Ei56NXKPIeqr6z7zvB1OpqiGJSG1BkzULFwlc5EYXg-9XDzrnO8WXbkyJ56TbmLC0ptKuzftanu4UJ6wKae3T9GgPDWG8zUwJg5TbqWBE2qX8JjkxcXceTIGlO46eOR2k2yZX2BtGhw8p41lUJBcQhizi0SLMCH0ZB-c4N8tDQemyd5VM6_dU5ffzqsXIKHxs9whGzm7D0rM4ODk0juwUx0-myjJ2m_Fh3Q2fNKjkTyG6AW0Yx9A9IfNBF-XKcKKbkXZatI1rHUPwhY-sD9JRcpvOIXHISkEDyvpvUOubMNa56VR4niUNRZav-ah9QxXVh_ELbHFiYfKZ8nTbqu4LVdHpnE_cVPmIZwUGzC1T5SaTNGh1D9dX4c0to28`
  );
  const data = await client.request(query(lang));
  return data;
}
const query = (lang) => {
  return gql`
      query {
        plants(locales: ${lang}) {
          id
          plantName
          latinName
          origin
          maintenance
          waterInterval
          waterFrequency
          waterFrequencyCheckbox
          additionalWaterInfo
          fertilizer
          fertilizerDisclosure
          poisonous
          poisonousFor
          image
          reserved
          registered
        }
        userForms(locales: ${lang}) {
          formSection {
            ... on FormSection {
              title
              fields {
                title
                name
                type
                quantityType
                additionalInfo
                required
                description
                placeholder
                errorMessage
                optionList {
                    listOrientation
                    optionsHint {
                        ... on ListHint {
                            hintLow
                            hintHigh
                        }
                    }
                    optionName {
                      ... on Option {
                        name
                        key
                      }
                    }
                  }
  
                disclosure {
                    title
                    name
                    type
                    quantityType
                    additionalInfo
                    required
                    description
                    placeholder
                    errorMessage
                }
              }
            }
          }
        }
        plantforms(locales: ${lang}) {
          formSection {
            ... on FormSection {
              title
              fields {
                title
                name
                type
                quantityType
                additionalInfo
                required
                description
                placeholder
                errorMessage
                optionList {
                    listOrientation
                    optionsHint {
                        ... on ListHint {
                            hintLow
                            hintHigh
                        }
                    }
                    optionName {
                      ... on Option {
                        name
                        key
                      }
                    }
                  }
  
                disclosure {
                    title
                    name
                    type
                    quantityType
                    additionalInfo
                    required
                    description
                    placeholder
                    errorMessage
                }
              }
            }
          }
        }
      }
    `;
};
