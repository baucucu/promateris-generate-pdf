import React from 'react';
import ReactDOMServer from 'react-dom/server';

async function renderTemplate(templateName, data) {
  // Dynamically import the correct template based on templateName
  const TemplateComponent = (await import(`../templates/${templateName}`)).default;

  // Render the component to an HTML string
  const html = ReactDOMServer.renderToString(<TemplateComponent data={data} />);

  // Wrap with a basic HTML structure
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${templateName}</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
}

export default renderTemplate;
