import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, FileText, Building, GraduationCap, TrendingUp, Award, Globe } from "lucide-react"
import { SearchBar } from "@/components/search-bar"

// Datos de ejemplo para estadísticas
const estadisticas = {
  investigadores: 0,
  proyectos: 0,
  publicaciones: 0,
  instituciones: 0,
  colaboraciones: 0,
  areas: 0,
}

// Áreasde investigación populares
const areasPopulares = [
  { nombre: "Inteligencia Artificial", investigadores: 0, proyectos: 0, color: "bg-blue-100 text-blue-800" },
  { nombre: "Neurociencia", investigadores: 0, proyectos: 0, color: "bg-purple-100 text-purple-800" },
  { nombre: "Energías Renovables", investigadores: 0, proyectos: 0, color: "bg-green-100 text-green-800" },
  { nombre: "Biotecnología", investigadores: 0, proyectos: 0, color: "bg-orange-100 text-orange-800" },
  { nombre: "Ciencias Ambientales", investigadores: 0, proyectos: 0, color: "bg-teal-100 text-teal-800" },
  { nombre: "Robótica", investigadores: 0, proyectos: 0, color: "bg-indigo-100 text-indigo-800" },
]

// Instituciones destacadas LLENAR CON INFORMACION DE LOS REPORTES SUBIDOS DE LOS PDFS
const institucionesDestacadas = [
  {
    nombre: "PROXIMAMENTE",
    investigadores: 45,
    proyectos: 32,
    areas: ["Neurociencia", "Biotecnología", "Ciencias Sociales"],
  }
]

export default function ExplorarPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-900">Explora la Investigación en Chihuahua</h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Descubre investigadores, proyectos, publicaciones e instituciones que están impulsando la ciencia y
            tecnología en el estado
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="bg-blue-50 rounded-xl px-6 py-8">
          <SearchBar />
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.investigadores}</div>
              <p className="text-sm text-blue-600">Investigadores</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.proyectos}</div>
              <p className="text-sm text-blue-600">Proyectos</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.publicaciones}</div>
              <p className="text-sm text-blue-600">Publicaciones</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <Building className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.instituciones}</div>
              <p className="text-sm text-blue-600">Instituciones</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <Globe className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.colaboraciones}</div>
              <p className="text-sm text-blue-600">Colaboraciones</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-100 text-center h-full flex flex-col justify-between">
            <CardContent className="pt-6">
              <GraduationCap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">{estadisticas.areas}</div>
              <p className="text-sm text-blue-600">Áreas</p>
            </CardContent>
          </Card>
        </div>

        {/* Navegación rápida */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <Link href="/investigadores">
            <Card className="bg-white border-blue-100 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Investigadores</CardTitle>
                <CardDescription className="text-blue-600">
                  Explora perfiles de investigadores destacados
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/proyectos">
            <Card className="bg-white border-blue-100 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Proyectos</CardTitle>
                <CardDescription className="text-blue-600">
                  Descubre proyectos de investigación actuales
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/publicaciones">
            <Card className="bg-white border-blue-100 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Publicaciones</CardTitle>
                <CardDescription className="text-blue-600">Accede a publicaciones científicas</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/instituciones">
            <Card className="bg-white border-blue-100 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Instituciones</CardTitle>
                <CardDescription className="text-blue-600">Conoce las instituciones de investigación</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Áreas de investigación populares */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-900">Áreas de Investigación Populares</h2>
            <Button variant="ghost" asChild className="text-blue-700 hover:bg-blue-50">
              <Link href="/campos">Ver todas</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Card className="bg-white border-blue-100 max-w-md w-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Próximamente</CardTitle>
                <CardDescription className="text-blue-600 text-base">
                  Favor de registrarse investigadores para poder mostrar la información
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 mb-4">
                  Estamos trabajando para mostrar las áreas de investigación populares. 
                  Para acceder a esta información, necesitamos que los investigadores 
                  se registren en nuestra plataforma.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-blue-100 pt-4">
                <Link href="/registro">
                  <Button className="bg-blue-700 text-white hover:bg-blue-800">
                    Registrarse como Investigador
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Instituciones destacadas */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-900">Instituciones Destacadas</h2>
            <Button variant="ghost" asChild className="text-blue-700 hover:bg-blue-50">
              <Link href="/instituciones">Ver todas</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Card className="bg-white border-blue-100 max-w-md w-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Building className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Próximamente</CardTitle>
                <CardDescription className="text-blue-600 text-base">
                  Favor de registrarse investigadores para poder mostrar la información
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 mb-4">
                  Estamos trabajando para mostrar las instituciones destacadas. 
                  Para acceder a esta información, necesitamos que los investigadores 
                  se registren en nuestra plataforma.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-blue-100 pt-4">
                <Link href="/registro">
                  <Button className="bg-blue-700 text-white hover:bg-blue-800">
                    Registrarse como Investigador
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
