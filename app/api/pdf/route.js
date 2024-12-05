// pages/api/generate-pdf.js
import puppeteer from "puppeteer";

export async function POST(request) {
  const data = await request.json();
  const { collection, keys } = data;
  console.log("request received: ", { collection, keys });

  // 1. Get HTML content from Next.js page
  const url = `${process.env.APP_URL}/templates/${collection}/${keys[0]}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  console.log("Page loaded: ", url);

  // 2. Convert to PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    timeout: 0,
  });
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

  return new Response(JSON.stringify({ fileData }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
