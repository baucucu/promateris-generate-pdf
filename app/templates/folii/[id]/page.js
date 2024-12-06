import TechnicalSheet from "./Template";
import { getArticol } from "@/lib/directus";

async function Page({ params }) {
  const { id } = await params;
  //   console.log({ id });
  const articol = await getArticol(id);
  //   console.log({ articol });
  const articole_bom_promises = articol.bill_of_materials.map(async (item) => {
    return await getArticol(item.related_articole_id);
  });
  const articole_bom = await Promise.all(articole_bom_promises);
  const data = {
    ...articol,
    articole_bom,
  };
  return <TechnicalSheet data={data} />;
}

export default Page;
