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
  const densitate =
    data.articole_bom.filter((item) => {
      return item.familie === "folii";
    })[0].densitate || 0;
  const greutate =
    (2 * data.latime * data.lungime * data.grosime * densitate) / 1000;
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

      <div className="grid grid-cols-2 gap-4">
        {/* this card needs to display the actual dimensions as well as tolerances +-5% before and after the actual dimensions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Dimensiuni</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-medium"></TableHead>
                  <TableHead className="text-xs font-medium text-right">
                    Min
                  </TableHead>
                  <TableHead className="text-xs font-medium text-right">
                    Mediu
                  </TableHead>
                  <TableHead className="text-xs font-medium text-right">
                    Maxim
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs">
                {[
                  { label: "Lățime (mm)", value: data.latime, unit: "mm" },
                  { label: "Lungime (mm)", value: data.lungime, unit: "mm" },
                  { label: "Grosime (μm)", value: data.grosime, unit: "μm" },
                  {
                    label: "Pliu Lateral (mm)",
                    value: data.pliu_lateral,
                    unit: "mm",
                  },
                  { label: "Greutate (g)", value: greutate, unit: "g" },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.label}</TableCell>
                    <TableCell className="text-right">
                      {(item.value * 0.95).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">{item.value}</TableCell>
                    <TableCell className="text-right">
                      {(item.value * 1.05).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sudură / Tăiere</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <h2 className="text-xl font-semibold mb-2">Sudură și Tăiere</h2> */}
            <Table>
              <TableBody className="text-xs">
                {[
                  ...(data.tiv_de_fund
                    ? [
                        {
                          label: "Tiv de Fund",
                          value: data.tiv_de_fund ? "Da" : "Nu",
                        },
                      ]
                    : []),
                  ...(data.rolati
                    ? [
                        {
                          label: "Rolați",
                          value: data.rolati ? "Da" : "Nu",
                        },
                      ]
                    : []),
                  ...(data.drept
                    ? [
                        {
                          label: "Drept",
                          value: data.drept ? "Da" : "Nu",
                        },
                      ]
                    : []),
                  ...(data.perforatii
                    ? [
                        {
                          label: "Perforații",
                          value: data.agatatoare ? "Da" : "Nu",
                        },
                      ]
                    : []),
                  ...(data.agatatoare
                    ? [{ label: "Agățătoare", value: "Da" }]
                    : []),
                  ...(data.stanta
                    ? [
                        {
                          label: "Stanță",
                          value: data.stanta,
                        },
                      ]
                    : []),
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.label}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-full">
        <CardHeader className="pb-2">
          <CardTitle>Ambalare</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <h2 className="text-xl font-semibold mb-2">Ambalare</h2> */}
          <div className="grid grid-cols-5 gap-4">
            {[
              { label: "Cod Cutie", value: data.cod_cutie },
              { label: "Dimensiuni Cutie", value: data.dimensiuni_cutie },
              { label: "Bucăți per UM", value: data.bucati_per_um },
              { label: "UM per Cutie", value: data.um_per_cutie },
              { label: "Cutii per Rând", value: data.cutii_per_rand },
              { label: "Rânduri per Palet", value: data.randuri_per_palet },
              { label: "Bucati per Cutie", value: data.bucati_per_cutie },
              { label: "Cutii per Palet", value: data.cutii_per_palet },
              { label: "Greutate cutie", value: data.greutate_cutie },
              { label: "Greutate Palet", value: data.greutate_palet },
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
      <div className="grid grid-cols-2 gap-4">
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
                {data.articole_bom.length > 0 ? (
                  data.articole_bom.map((item, index) => (
                    <TableRow className="list-disc pl-5" key={index}>
                      <TableCell> {item.cod_articol}</TableCell>
                      <TableCell> {item.familie}</TableCell>
                      <TableCell> {item.denumire}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <p>No bill of materials available.</p>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
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
