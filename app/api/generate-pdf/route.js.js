// pages/api/generate-pdf.js
import puppeteer from "puppeteer";

import { NextResponse } from "next/server";

export default async function POST(request) {
  const data = await request.json();
  const { collection, keys } = data;
  console.log("request received: ", { collection, keys });

  // 1. Get HTML content from Next.js page
  const url = `${process.env.APP_URL}/templates${collection}/${keys[0]}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // const html = await page.content();

  // 2. Convert to PDF
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  console.log("PDF generated: ", pdfBuffer);

  // 3. Upload to Directus
  const formData = new FormData();
  formData.append("file", pdfBuffer, "document.pdf");
  const response = await fetch(`${process.env.DIRECTUS_URL}/files`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: formData,
  });
  const fileData = await response.json();

  console.log("File uploaded: ", fileData);

  // 4. Return File ID and URL

  return NextResponse.json({
    message: "Data processed successfully",
    fileId,
    fileUrl,
  });
}
