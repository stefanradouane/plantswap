/**
 * This file is a work in progress. It is not used in the current version of the app.
 * This file contains a serverless function. This function is used to post a plant to the Hygraph API.
 * Currently this post is not initiated by the app, but by a user in the Hygraph dashboard.
 *
 * @todo Make this function work in the app. @nice-to-have
 * @todo Change the api key to a secret. @must-have
 */

import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clij3imw706zl01uk9hgh5uw6/master"
);

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const runtime = "nodejs";

// get image from post request without formidable next js
export async function POST(req, res) {
  client.setHeader(
    `authorization`,
    `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODc1NDM5OTQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xpajNpbXc3MDZ6bDAxdWs5aGdoNXV3Ni9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjBhMjI2NjMtMjg3Ny00YWI2LWJiZDgtYWRhNTM0NDUxNWNjIiwianRpIjoiY2xqOHc0ZndsMW01eDAxdWVhdmk2ZncyeCJ9.G1vdjpgwqrqUdj-jTnbcSzNQ7YtHnSesxUUyfHwHlrzVtEYHHmKxtUg0dhpGtLdbwpsHGDSCi3QdEDURNC11iZP88tGQyo8eO3Y9mzRq7hfeKb54zMXjOUxbZoX91V9hikDQ_E1Brwr3prRwrNermtcS2a0H56Ex6EITbttLNm1qjJrJZ7uIn31FjyzG8t76bt2D_9DlwKwLiSkbDibsUXx7Q_bBszWbb3xTgNbdY3ROmLkh0LruAC9OEzPoHGzIngP4CxHb4m7SCrEH7l4X5PdsSn4XY_7N-0-AjlT8jAsT5K9Ei56NXKPIeqr6z7zvB1OpqiGJSG1BkzULFwlc5EYXg-9XDzrnO8WXbkyJ56TbmLC0ptKuzftanu4UJ6wKae3T9GgPDWG8zUwJg5TbqWBE2qX8JjkxcXceTIGlO46eOR2k2yZX2BtGhw8p41lUJBcQhizi0SLMCH0ZB-c4N8tDQemyd5VM6_dU5ffzqsXIKHxs9whGzm7D0rM4ODk0juwUx0-myjJ2m_Fh3Q2fNKjkTyG6AW0Yx9A9IfNBF-XKcKKbkXZatI1rHUPwhY-sD9JRcpvOIXHISkEDyvpvUOubMNa56VR4niUNRZav-ah9QxXVh_ELbHFiYfKZ8nTbqu4LVdHpnE_cVPmIZwUGzC1T5SaTNGh1D9dX4c0to28`
  );
  const reqFormData = await req.formData();
  const id = reqFormData.get("swapId");
  const newplant = JSON.parse(reqFormData.get("data"));
  const locale = JSON.parse(reqFormData.get("locale"));
  //   const data = client.request(query(id));
  console.log(newplant);
  //   const data2 = await client.request(
  //     query2({ ...newplant, reserved: false, registered: false }, locale)
  //   );
  return NextResponse.json({ done: true });
}

const query = (id) => gql`
mutation {
    updatePlant(
      where: {id: "${id}"}
      data: {reserved: true}
    )
    {
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
    }
  }
  
`;

const query2 = (data, locale) => {
  let s = "";
  Object.keys(data).forEach((key) => {
    // console.log(key);
    console.log(data[key]);
    if (key === "image") return;
    s += `${key}: "${data[key]}", `;
  });
  console.log(s);
  //   console.log(string);
  return gql`
    mutation {
      createPlant(
        data: {
         latinName: "${data.latinName}",
          localizations: {
            create: {
             locale: nl,
                    data: { 
                        plantName: "${data.plantName}",
                        origin: ${data.origin},
                        maintenance: "${data.maintenance}",
                        waterInterval: ${data.waterInterval},
                        waterFrequency: ${data.waterFrequency},
                        waterFrequencyCheckbox: ${data.waterFrequencyCheckbox},
                        additionalWaterInfo: "${data.additionalWaterInfo}",
                        fertilizer: ${data.fertilizer},
                        fertilizerDisclosure: "${data.fertilizerDisclosure}",
                        poisonous: ${data.poisonous},
                        poisonousFor: "${data.poisonousFor}",
                        reserved: ${data.reserved},
                        registered: ${data.registered},
                        image: "${data.image}"
                    }
                }
            }
        }
        ) {
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
      }
    }
  `;
};
