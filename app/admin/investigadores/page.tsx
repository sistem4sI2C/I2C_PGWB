"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, Filter, Search, UserCog } from "lucide-react"
import { ExportDialog } from "@/components/export-dialog"

// Interfaz para los datos de investigadores
interface Investigador {
  id: number
  no_cvu: string
  curp: string
  nombre_completo: string
  rfc: string
  correo: string
  nacionalidad: string
  fecha_nacimiento: string
  institucion: string
}

export default function InvestigadoresAdmin() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [investigadores, setInvestigadores] = useState<Investigador[]>([])
  const [filteredData, setFilteredData] = useState<Investigador[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [exportDialogOpen, setExportDialogOpen] = useState(false)

  // Cargar investigadores desde la API
  useEffect(() => {
    const fetchInvestigadores = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/investigadores")

        if (!response.ok) {
          throw new Error("Error al cargar los investigadores")
        }

        const data = await response.json()
        setInvestigadores(data)
        setFilteredData(data)
      } catch (error) {
        console.error("Error al cargar investigadores:", error)
        setError("No se pudieron cargar los investigadores. Usando datos de ejemplo.")

        // Fallback example data
        const investigadoresData = [
          {
            id: 1,
            no_cvu: "123456",
            curp: "MELM800101HCHNNS09",
            nombre_completo: "Dr. Carlos Méndez López",
            rfc: "MELC800101AB9",
            correo: "carlos.mendez@universidad.edu",
            nacionalidad: "Mexicana",
            fecha_nacimiento: "1980-01-01",
            institucion: "Universidad Autónoma de Chihuahua",
          },
          {
            id: 2,
            no_cvu: "234567",
            curp: "ROLA750212MCHDPR05",
            nombre_completo: "Dra. María Rodríguez Álvarez",
            rfc: "ROAM750212CD3",
            correo: "maria.rodriguez@universidad.edu",
            nacionalidad: "Mexicana",
            fecha_nacimiento: "1975-02-12",
            institucion: "Universidad Nacional Autónoma",
          },
        ]
        setInvestigadores(investigadoresData)
        setFilteredData(investigadoresData)
      } finally {
        setIsLoading(false)
      }
    }

    fetchInvestigadores()
  }, [])

  // Filtrar datos basados en el término de búsqueda
  const handleSearch = () => {
    const filtered = investigadores.filter(
      (investigador) =>
        investigador.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investigador.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investigador.curp.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investigador.rfc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (investigador.institucion && investigador.institucion.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredData(filtered)
    setCurrentPage(1)
  }

  // Calcular índices para paginación
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Button variant="ghost" asChild className="mr-4 text-blue-700 hover:bg-blue-50">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al panel
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-blue-900">Administración de Investigadores</h1>
      </div>

      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      <Card className="bg-white border-blue-100 mb-8">
        <CardHeader>
          <CardTitle className="text-blue-900">Investigadores Registrados</CardTitle>
          <CardDescription className="text-blue-600">
            Gestiona los perfiles de investigadores registrados en la plataforma SECCTI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre, CURP, RFC o correo..."
                  className="pl-10 bg-white border-blue-200 text-blue-900 placeholder:text-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} className="bg-blue-700 text-white hover:bg-blue-800">
                Buscar
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={() => setExportDialogOpen(true)}
              >
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-blue-100 overflow-hidden">
            <Table>
              <TableHeader className="bg-blue-50">
                <TableRow className="hover:bg-blue-50 border-b border-blue-100">
                  <TableHead className="text-blue-700">ID</TableHead>
                  <TableHead className="text-blue-700">PU</TableHead>
                  <TableHead className="text-blue-700">CURP</TableHead>
                  <TableHead className="text-blue-700">Nombre Completo</TableHead>
                  <TableHead className="text-blue-700">RFC</TableHead>
                  <TableHead className="text-blue-700">Correo</TableHead>
                  <TableHead className="text-blue-700">Nacionalidad</TableHead>
                  <TableHead className="text-blue-700">Fecha de Nacimiento</TableHead>
                  <TableHead className="text-blue-700 text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-blue-600">
                      Cargando investigadores...
                    </TableCell>
                  </TableRow>
                ) : currentItems.length > 0 ? (
                  currentItems.map((investigador) => (
                    <TableRow key={investigador.id} className="hover:bg-blue-50 border-b border-blue-100">
                      <TableCell className="text-blue-900">{investigador.id}</TableCell>
                      <TableCell className="text-blue-900">{investigador.no_cvu || "N/A"}</TableCell>
                      <TableCell className="text-blue-900">{investigador.curp || "N/A"}</TableCell>
                      <TableCell className="text-blue-900 font-medium">
                        {investigador.nombre_completo || "N/A"}
                      </TableCell>
                      <TableCell className="text-blue-900">{investigador.rfc || "N/A"}</TableCell>
                      <TableCell className="text-blue-900">{investigador.correo || "N/A"}</TableCell>
                      <TableCell className="text-blue-900">
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {investigador.nacionalidad || "N/A"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-blue-900">{investigador.fecha_nacimiento || "N/A"}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-blue-700 hover:bg-blue-50"
                            asChild
                          >
                            <Link href={`/investigadores/${investigador.id}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver perfil</span>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-blue-700 hover:bg-blue-50"
                            asChild
                          >
                            <Link href={`/admin/investigadores/editar/${investigador.id}`}>
                              <UserCog className="h-4 w-4" />
                              <span className="sr-only">Editar investigador</span>
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-blue-600">
                      No se encontraron investigadores con los criterios de búsqueda.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <p className="text-sm text-blue-600">Mostrar</p>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number.parseInt(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-[70px] bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="5" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100 text-blue-900">
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-blue-600">por página</p>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) paginate(currentPage - 1)
                    }}
                    className={`${
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    } text-blue-700 hover:bg-blue-50`}
                  />
                </PaginationItem>
                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => {
                  // Mostrar solo un número limitado de páginas
                  if (
                    index === 0 ||
                    index === Math.ceil(filteredData.length / itemsPerPage) - 1 ||
                    (index >= currentPage - 2 && index <= currentPage + 0)
                  ) {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            paginate(index + 1)
                          }}
                          isActive={currentPage === index + 1}
                          className={`${
                            currentPage === index + 1 ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-50"
                          }`}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  } else if (index === 1 || index === Math.ceil(filteredData.length / itemsPerPage) - 2) {
                    return (
                      <PaginationItem key={index}>
                        <PaginationEllipsis className="text-blue-600" />
                      </PaginationItem>
                    )
                  }
                  return null
                })}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) paginate(currentPage + 1)
                    }}
                    className={`${
                      currentPage === Math.ceil(filteredData.length / itemsPerPage)
                        ? "pointer-events-none opacity-50"
                        : ""
                    } text-blue-700 hover:bg-blue-50`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      {/* Diálogo de exportación */}
      <ExportDialog
        title="Exportar Investigadores"
        description="Selecciona el formato y los campos que deseas exportar."
        dataType="investigadores"
        open={exportDialogOpen}
        onOpenChange={setExportDialogOpen}
      />
    </div>
  )
}
