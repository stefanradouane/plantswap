import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const runtime = "nodejs";

// get image from post request without formidable next js
export async function POST(req, res) {
  const reqFormData = await req.formData();
  const file = reqFormData.get("image");
  const lang = reqFormData.get("lang");
  const API_URL = `https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=${lang}&api-key=${API_KEY}`;

  const stream = file.stream();

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const buffer = Buffer.concat(chunks);

  const form = new FormData();
  form.append("images", buffer, file.name);

  const response = await axios.post(API_URL, form, {
    headers: form.getHeaders(),
  });

  const data = response.data;
  return NextResponse.json({ data });
}
