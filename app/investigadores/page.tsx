"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MapPin, Building, FileText, Award, Users } from "lucide-react"
import Link from "next/link"

// Eliminar datos de ejemplo y lógica de perfiles

export default function InvestigadoresPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedField, setSelectedField] = useState("all")
  const [selectedInstitution, setSelectedInstitution] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  // Dejar los filtros vacíos
  const fields: string[] = []
  const institutions: string[] = []
  const locations: string[] = []

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-900">Investigadores de Chihuahua</h1>
          <p className="text-blue-600">
            Conoce a los investigadores que están impulsando la ciencia y tecnología en el estado
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
                    placeholder="Buscar por nombre, título o especialidad..."
                    className="pl-10 bg-white border-blue-200 text-blue-900 placeholder:text-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Campo" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todos los campos</SelectItem>
                  {fields.map((field) => (
                    <SelectItem key={field} value={field}>
                      {field}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedInstitution} onValueChange={setSelectedInstitution}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Institución" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todas las instituciones</SelectItem>
                  {institutions.map((institution) => (
                    <SelectItem key={institution} value={institution}>
                      {institution}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-white border-blue-200 text-blue-900">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-100">
                  <SelectItem value="all">Todas las ubicaciones</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Resultados: solo tarjeta de Próximamente */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-blue-600">
              0 investigadores encontrados
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Filter className="mr-2 h-4 w-4" />
              Filtros avanzados
            </Button>
          </div>
          <div className="flex justify-center mt-8">
            <Card className="bg-white border-blue-100 max-w-md w-full">
              <CardContent className="text-center pt-8 pb-8">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl text-blue-900 font-bold mb-2">Próximamente</h3>
                <p className="text-blue-600 mb-4">
                  Favor de registrarse investigadores para poder mostrar la información
                </p>
                <p className="text-blue-600 mb-4">
                  Estamos trabajando para mostrar el listado de investigadores. Para acceder a esta información, necesitamos que los investigadores se registren en nuestra plataforma.
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
