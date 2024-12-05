import { createDirectus, staticToken, rest, readItem } from "@directus/sdk";

const client = createDirectus("http://articole.promateris.com")
  .with(staticToken(process.env.DIRECTUS_TOKEN))
  .with(
    rest({
      onRequest: (options) => ({ ...options, cache: "no-store" }),
    })
  );

// console.log(client);

export async function getArticol(id) {
  return client.request(
    readItem("articole", id, {
      fields: ["*.*"],
    })
  );
}

export default client;
