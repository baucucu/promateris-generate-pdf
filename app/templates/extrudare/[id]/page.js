import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="max-w-[210mm] mx-auto p-4 text-xs">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-bold">
          Fișă de lansare în fabricație și control
        </h1>
        <div>
          Întocmit de: Rodica Militaru
          <Badge variant="secondary" className="ml-2">
            Ediția 2
          </Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 mb-1">
        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Produs</CardTitle>
          </CardHeader>
          <CardContent className="py-1 grid grid-cols-2 gap-2">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Categorie</TableCell>
                  <TableCell className="py-1 text-xs">PUNGI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Produs</TableCell>
                  <TableCell className="py-1 text-xs">
                    Pungi rolate Carrefour stea
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Articol</TableCell>
                  <TableCell className="py-1 text-xs">23805</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Client</TableCell>
                  <TableCell className="py-1 text-xs">CARREFOUR STEA</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* <div className="grid grid-cols-2 gap-2 mb-1 items-center">
              <Label>Articol</Label>
              <Badge variant="secondary">PUNGI</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-1 items-center">
              <Label>Produs</Label>
              <Badge variant="secondary">Pungi rolate Carrefour stea</Badge>
            </div> */}
            {/* <div className="grid grid-cols-2 gap-2 mb-1 items-center">
              <Label>Articol</Label>
              <Badge variant="secondary">23805</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-1 items-center">
              <Label>Client</Label>
              <Badge variant="secondary">CARREFOUR STEA</Badge>
            </div> */}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Comandă</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Lot</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Data</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Comandă</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Cantitate</TableCell>
                  <TableCell className="py-1 text-xs">400 cutii</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Material</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="bio" defaultChecked />
                <label htmlFor="bio">Bio</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="amestec" />
                <label htmlFor="amestec">Amestec de sorturi</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="coex" />
                <label htmlFor="coex">COEX</label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Procesare</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="tiv" />
                <label htmlFor="tiv">Tiv de fund</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="drepti" />
                <label htmlFor="drepti">Drepți</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="rolati" defaultChecked />
                <label htmlFor="rolati">Rolați</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="perforati" />
                <label htmlFor="perforati">Perforați</label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-2">
        <Card>
          {/* <CardHeader className="py-1">
            <CardTitle className="text-sm">Dimensiuni</CardTitle>
          </CardHeader> */}
          <CardContent className="py-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="py-1 text-xs">Dimensiune</TableHead>
                  <TableHead className="py-1 text-xs">Minim</TableHead>
                  <TableHead className="py-1 text-xs">Nominal</TableHead>
                  <TableHead className="py-1 text-xs">Maxim</TableHead>
                  <TableHead className="py-1 text-xs">Toleranță</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    Lățime totală (mm)
                  </TableCell>
                  <TableCell className="py-1 text-xs">314</TableCell>
                  <TableCell className="py-1 text-xs">330</TableCell>
                  <TableCell className="py-1 text-xs">347</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    Lățime pliu (mm)
                  </TableCell>
                  <TableCell className="py-1 text-xs">57</TableCell>
                  <TableCell className="py-1 text-xs">60</TableCell>
                  <TableCell className="py-1 text-xs">63</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    Lățime folie pliată (mm)
                  </TableCell>
                  <TableCell className="py-1 text-xs">200</TableCell>
                  <TableCell className="py-1 text-xs">210</TableCell>
                  <TableCell className="py-1 text-xs">221</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    Grosime medie (mm)
                  </TableCell>
                  <TableCell className="py-1 text-xs">0.00810</TableCell>
                  <TableCell className="py-1 text-xs">0.0090</TableCell>
                  <TableCell className="py-1 text-xs">0.00990</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          {/* <CardHeader className="py-1">
            <CardTitle className="text-sm">Greutate</CardTitle>
          </CardHeader> */}
          <CardContent className="py-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="py-1 text-xs">Greutate</TableHead>
                  <TableHead className="py-1 text-xs">Minim</TableHead>
                  <TableHead className="py-1 text-xs">Nominal</TableHead>
                  <TableHead className="py-1 text-xs">Maxim</TableHead>
                  <TableHead className="py-1 text-xs">Toleranță</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    pe metru liniar (dublu)
                  </TableCell>
                  <TableCell className="py-1 text-xs">27,91 g/ml</TableCell>
                  <TableCell className="py-1 text-xs">31,01 g/ml</TableCell>
                  <TableCell className="py-1 text-xs">34,11 g/ml</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    pe unitate de ambalaj
                  </TableCell>
                  <TableCell className="py-1 text-xs">0,956 kg/rolă</TableCell>
                  <TableCell className="py-1 text-xs">1,063 kg/rolă</TableCell>
                  <TableCell className="py-1 text-xs">1,169 kg/rolă</TableCell>
                  <TableCell className="py-1 text-xs">± 5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-2 mb-2">
        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Ambalare</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <Table>
              {/* <TableHeader>
                <TableRow>
                  <TableHead className="py-1 text-xs" colSpan={2}>
                    Ambalare Primară
                  </TableHead>
                  <TableHead className="py-1 text-xs" colSpan={2}>
                    Ambalare Secundară
                  </TableHead>
                </TableRow>
              </TableHeader> */}
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Role/husă:</TableCell>
                  <TableCell className="py-1 text-xs">330</TableCell>
                  <TableCell className="py-1 text-xs">
                    Dimensiuni cutie (mm):
                  </TableCell>
                  <TableCell className="py-1 text-xs">
                    370 × 280 × 150
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Kg/husă:</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                  <TableCell className="py-1 text-xs">Pachete/cutie:</TableCell>
                  <TableCell className="py-1 text-xs">5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Buc/rolă:</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                  <TableCell className="py-1 text-xs">Role/cutie:</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Buc/pachet:</TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                  <TableCell className="py-1 text-xs">
                    Greutate cutie goală:
                  </TableCell>
                  <TableCell className="py-1 text-xs">_______</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Cerințe de Producție</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 text-yellow-700">
              Se extrude folie tubulară 1280×0,0085mm. BUR 3.26
              <br />
              Cutiile trebuie etichetate corespunzător cu ștampila operatorului
              <br />
              Configurație palet: 8 cutii/rând × 10 rânduri = 80 cutii/palet
              <br />
              Palet albastru
            </div> */}
            <p>
              Se extrude folie tubulară 1280×0,0085mm. BUR 3.26.
              <br />
              Cutiile trebuie etichetate corespunzător cu ștampila operatorului.
              <br />
              Configurație palet: 8 cutii/rând × 10 rănduri = 80 cutii/palet.
              <br />
              Palet albastru
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Coduri Materiale</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Cod pungă</TableCell>
                  <TableCell className="py-1 text-xs">23805</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Cod folie</TableCell>
                  <TableCell className="py-1 text-xs">24912</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Cod cutie</TableCell>
                  <TableCell className="py-1 text-xs">21980</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Cod țeavă</TableCell>
                  <TableCell className="py-1 text-xs">22993</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-1">
            <CardTitle className="text-sm">Coduri Auxiliare</CardTitle>
          </CardHeader>
          <CardContent className="py-1">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-1 text-xs">Scotch</TableCell>
                  <TableCell className="py-1 text-xs">24834</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Folie stretch</TableCell>
                  <TableCell className="py-1 text-xs">20516</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">Colțare carton</TableCell>
                  <TableCell className="py-1 text-xs">22187</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-1 text-xs">
                    Etichetă (100×70)
                  </TableCell>
                  <TableCell className="py-1 text-xs">16496</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
