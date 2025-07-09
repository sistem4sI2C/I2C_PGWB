import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { obtenerInvestigadores } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    // Get all investigators from mock data
    const investigadores = await obtenerInvestigadores()

    return NextResponse.json(investigadores)
  } catch (error) {
    console.error("Error al obtener investigadores:", error)
    return NextResponse.json({ error: "Error al obtener los investigadores" }, { status: 500 })
  }
}
