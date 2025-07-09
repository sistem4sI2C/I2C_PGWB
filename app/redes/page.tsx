"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export default function RedesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-900">Redes de Colaboración</h1>
        </div>
        <div className="flex justify-center">
          <Card className="bg-white border-blue-100 max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl text-blue-900">Próximamente</CardTitle>
              <CardDescription className="text-blue-600 text-base">
                Favor de registrarse investigadores para poder mostrar la información
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-600 mb-4">
                Estamos trabajando para mostrar las redes de colaboración y eventos académicos disponibles. 
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
  )
}
