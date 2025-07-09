"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ExternalLink, FileText, Calendar, User, Building } from "lucide-react"
import Link from "next/link"

// Eliminar datos de ejemplo y lógica de publicaciones

export default function PublicacionesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedAccess, setSelectedAccess] = useState("all")

  // Dejar los filtros vacíos
  const categorias: string[] = []
  const años: number[] = []

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-900">Publicaciones Científicas</h1>
          <p className="text-blue-600">
            Explora las publicaciones científicas de investigadores de Chihuahua en revistas nacionales e
            internacionales
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <Card className="bg-white border-blue-100">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Buscar por título, autor, revista o palabras clave..."
                    className="pl-10 bg-white border-blue-200 text-blue-900 placeholder:text-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {categorias.map((categoria) => (
                    <SelectItem key={categoria} value={categoria}>
                      {categoria}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todos los años</SelectItem>
                  {años.map((año) => (
                    <SelectItem key={año} value={año.toString()}>
                      {año}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedAccess} onValueChange={setSelectedAccess}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Acceso" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Abierto">Acceso abierto</SelectItem>
                  <SelectItem value="Restringido">Acceso restringido</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Resultados: solo tarjeta de Próximamente */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-blue-600">
              0 publicaciones encontradas
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Filter className="mr-2 h-4 w-4" />
              Filtros avanzados
            </Button>
          </div>
          <div className="flex justify-center mt-8">
            <Card className="bg-white border-blue-100 max-w-md w-full">
              <CardContent className="text-center pt-8 pb-8">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center shadow">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl text-blue-900 font-bold mb-2">Próximamente</h3>
                <p className="text-blue-600 mb-4">
                  Favor de registrarse investigadores para poder mostrar la información
                </p>
                <p className="text-blue-600 mb-4">
                  Estamos trabajando para mostrar el listado de publicaciones científicas. Para acceder a esta información, necesitamos que los investigadores se registren en nuestra plataforma.
                </p>
                <Link href="/registro">
                  <Button className="bg-blue-700 text-white hover:bg-blue-800">
                    Registrarse como Investigador
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
