// pages/api/generate-pdf.js
import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const { templateName, id } = req.body;

  // 1. Get HTML content from Next.js page
  const url = `${process.env.APP_URL}/templates${templateName}/${id}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // const html = await page.content();

  // 2. Convert to PDF
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  // 3. Upload to Directus
  const formData = new FormData();
  formData.append("file", pdfBuffer, "document.pdf");
  const response = await fetch(`https://directus.appy.agency/files`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: formData,
  });
  const fileData = await response.json();

  // 4. Return File ID and URL
  res.json({
    fileId: fileData.data.id,
    fileUrl: fileData.data.url,
  });
}
