import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { sampleData } from "./sample";
const TechnicalSheet = ({ data = sampleData }) => {
  console.log({ data });
  return (
    <div className="grid gap-4 m-4 text-xs">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {/* <Badge variant="outline">{data.cod_articol}</Badge> */}
            <Badge variant="outline">{data.denumire}</Badge>
            <Badge variant="outline">{data.denumire_engleza}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {[
              // { label: "Denumire", value: data.denumire },
              // { label: "Denumire Engleză", value: data.denumire_engleza },
              { label: "Cod Articol", value: data.cod_articol },
              { label: "Partener", value: data.partener },
              { label: "Tip Articol", value: data.tip_articol },
              { label: "Familie", value: data.familie },
              // { label: "Grup Resursă", value: data.grup_resursa },
              { label: "Material", value: data.material },
              { label: "Unitate de Măsură", value: data.um },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  {item.label}
                </span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Specificatii</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Table>
            <TableBody className="text-xs">
              {[
                {
                  label: "Densitate (g/mm3)",
                  value: data.densitate,
                  unit: "g/mm3",
                },
                {
                  label: "Latime folie tubulara (mm)",
                  value: data.latime_folie_tubulara,
                  unit: "mm",
                },
                { label: "Culoare", value: data.culoare },
                {
                  label: "Tratare",
                  value: data.tratare ? "Da" : "Nu",
                },
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableBody className="text-xs">
              {[
                {
                  label: "Utilaj",
                  value: data.utilaj,
                },
                {
                  label: "Reteta",
                  value: data.reteta,
                },
                {
                  label: "Componenete reteta",
                  value: data.componenete_reteta,
                },
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Imprimare</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Table>
            <TableBody className="text-xs">
              {[
                {
                  label: "Tip imprimare",
                  value: data.tip_imprimare,
                },
                {
                  label: "Valt",
                  value: data.valt,
                },
                {
                  label: "Utilaj",
                  value: data.utilaj,
                },
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="grid grid-cols-1 gap-2">
            {data.fete.map((fata, index) => (
              <Card key={index} className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {/* <Badge variant="outline">{data.cod_articol}</Badge> */}
                    Macheta:
                    <Badge variant="outline">{fata.macheta}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Culori:
                  {fata.culori.map((culoare, index) => (
                    <Badge key={index} variant="outline">
                      {culoare.culoare}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        {data.articole_bom.length > 0 && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Bill of Materials</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <h2 className="text-xl font-semibold mb-2">Bill of Materials</h2> */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Cod articol</TableHead>
                    <TableHead>Familie</TableHead>
                    <TableHead>Denumire</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs">
                  {data.articole_bom.map((item, index) => (
                    <TableRow className="list-disc pl-5" key={index}>
                      <TableCell> {item.cod_articol}</TableCell>
                      <TableCell> {item.familie}</TableCell>
                      <TableCell> {item.denumire}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Observații</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <h2 className="text-xl font-semibold mb-2">Observații</h2> */}
            <p>{data.observatii}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSheet;
