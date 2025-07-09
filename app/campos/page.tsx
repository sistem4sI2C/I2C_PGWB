import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, FileText, Award, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Datos de ejemplo para campos de estudio
const camposEstudio = [
  {
    id: 1,
    nombre: "Inteligencia Artificial",
    descripcion:
      "Desarrollo de sistemas inteligentes, machine learning, deep learning y aplicaciones de IA en diversos sectores.",
    investigadores: 0,
    proyectos: 0,
    publicaciones: 0,
    instituciones: 0,
    crecimiento: 0,
    tendencia: "up",
    subcampos: ["Machine Learning", "Deep Learning", "Visión Computacional", "Procesamiento de Lenguaje Natural"],
    color: "bg-blue-100 text-blue-800",
    slug: "prb1",
  }
]

export default function CamposPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-900">Campos de Investigación</h1>
          <p className="text-blue-600">
            Explora las diferentes áreas de conocimiento y especialización de los investigadores en Chihuahua
          </p>
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-blue-100 text-center">
            <CardContent className="pt-6">
              <Lightbulb className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-900">0</div>
              <p className="text-sm text-blue-600">Campos activos</p>
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
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl text-blue-900 font-bold mb-2">Próximamente</h3>
              <p className="text-blue-600 mb-4">
                Favor de registrarse investigadores para poder mostrar la información
              </p>
              <p className="text-blue-600 mb-4">
                Estamos trabajando para mostrar el listado de campos de investigación. Para acceder a esta información, necesitamos que los investigadores se registren en nuestra plataforma.
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
  )
}
