"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Users, FileText, MapPin, ExternalLink, Award, GraduationCap, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Datos de ejemplo para instituciones
const instituciones = [
  {
    id: 1,
    nombre: "Universidad Autónoma de Chihuahua",  
    siglas: "UACH",
    tipo: "Universidad Pública",
    ubicacion: "Chihuahua, Chihuahua",
    descripcion:
      "La Universidad Autónoma de Chihuahua es una institución de educación superior pública que se destaca por su excelencia académica y su contribución a la investigación científica en el estado.",
    imagen: "/placeholder.svg?height=200&width=400",
    investigadores: 0,
    proyectos: 0,
    publicaciones:0,
    areas: ["Neurociencia", "Biotecnología", "Ciencias Sociales", "Ingeniería", "Medicina"],
    fundacion: 1954,
    sitioWeb: "https://www.uach.mx",
    slug: "universidad-autonoma-chihuahua",
    investigadoresDestacados: [
      { nombre: "Dra. María Rodríguez", area: "Neurociencia", avatar: "/placeholder.svg" },
      { nombre: "Dr. Pedro Sánchez", area: "Biotecnología", avatar: "/placeholder.svg" },
      { nombre: "Dra. Laura García", area: "Ciencias Sociales", avatar: "/placeholder.svg" },
    ],
  }
]

export default function InstitucionesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-900">Instituciones de Investigación</h1>
          <p className="text-blue-600">
            Conoce las principales instituciones de educación superior y centros de investigación en Chihuahua
          </p>
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-blue-100 text-center">
            <CardContent className="pt-6">
              <Building className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-sm text-blue-600">Instituciones</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-sm text-blue-600">Investigadores</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-sm text-blue-600">Proyectos</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-sm text-blue-600">Publicaciones</p>
            </CardContent>
          </Card>
        </div>

        {/* Próximamente */}
        <div className="flex justify-center mt-8">
          <Card className="bg-white border-blue-100 max-w-md w-full">
            <CardContent className="text-center pt-8 pb-8">
              <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center shadow">
                <Building className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl text-blue-900 font-bold mb-2">Próximamente</h3>
              <p className="text-blue-600 mb-4">
                Favor de registrarse investigadores para poder mostrar la información
              </p>
              <p className="text-blue-600 mb-4">
                Estamos trabajando para mostrar el listado de instituciones. Para acceder a esta información, necesitamos que los investigadores se registren en nuestra plataforma.
              </p>
              <Link href="/registro">
                <Button className="bg-blue-700 text-white hover:bg-blue-800">
                  Registrarse como Investigador
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Lista de instituciones */}
        {/*
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {instituciones.map((institucion) => (
            <Card key={institucion.id} className="bg-white border-blue-100">
              <div className="relative h-48 w-full">
                <Image
                  src={institucion.imagen || "/placeholder.svg"}
                  alt={institucion.nombre}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2 bg-blue-700 text-white">{institucion.tipo}</Badge>
                    <CardTitle className="text-xl text-blue-900">{institucion.nombre}</CardTitle>
                    <CardDescription className="text-blue-600">
                      {institucion.siglas} • Fundada en {institucion.fundacion}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{institucion.ubicacion}</span>
                  </div>

                  <p className="text-blue-600 text-sm">{institucion.descripcion}</p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-bold text-blue-900">{institucion.investigadores}</div>
                      <div className="text-xs text-blue-600">Investigadores</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-900">{institucion.proyectos}</div>
                      <div className="text-xs text-blue-600">Proyectos</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-900">{institucion.publicaciones}</div>
                      <div className="text-xs text-blue-600">Publicaciones</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">Áreas de investigación:</h4>
                    <div className="flex flex-wrap gap-1">
                      {institucion.areas.slice(0, 4).map((area, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                          {area}
                        </Badge>
                      ))}
                      {institucion.areas.length > 4 && (
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                          +{institucion.areas.length - 4} más
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">Investigadores destacados:</h4>
                    <div className="flex gap-2">
                      {institucion.investigadoresDestacados.slice(0, 3).map((investigador, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={investigador.avatar || "/placeholder.svg"} alt={investigador.nombre} />
                            <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                              {investigador.nombre
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-blue-600">
                            {investigador.nombre.split(" ")[0]} {investigador.nombre.split(" ")[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-blue-100 flex justify-between">
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
                  <Link href={`/instituciones/${institucion.slug}`}>
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Ver detalles
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open(institucion.sitioWeb, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Sitio web
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        */}
      </div>
    </div>
  )
}
