"use client"

import React from "react"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  return (
    <>
      <div className="pt-[73px]">
        <header
          className={`border-b border-blue-100 fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                    src="/images/sei-logo.png"
                    alt="Sistema Estatal de Investigadores Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-lg text-gray-800 hidden sm:inline">
                  Sistema Estatal de Investigadores
                </span>
                <span className="font-bold text-lg text-gray-800 sm:hidden">SEI</span>
              </Link>

              <NavigationMenu className="hidden md:flex ml-4">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#044caa]">Explorar</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-white">
                        <li className="row-span-4">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline outline-none focus:shadow-md"
                              href="/explorar"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-[#044caa]">Explorar</div>
                              <p className="text-sm leading-tight text-[#044caa]">
                                Descubre investigadores, proyectos e instituciones en Chihuahua.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/investigadores" title="Investigadores">
                          Explora perfiles de investigadores destacados.
                        </ListItem>
                        <ListItem href="/proyectos" title="Proyectos">
                          Descubre los últimos proyectos de investigación.
                        </ListItem>
                        <ListItem href="/instituciones" title="Instituciones">
                          Explora universidades y centros de investigación.
                        </ListItem>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 text-[#044caa] h-full flex flex-col justify-center"
                              href="/campos"
                            >
                              <div className="text-sm font-medium leading-none">Campos de estudio</div>
                              <p className="line-clamp-2 text-sm leading-snug text-[#044caa]">Navega por diferentes áreas de conocimiento.</p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/proyectos" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-[#044caa]")}>
                        Proyectos
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/publicaciones" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-[#044caa]")}>
                        Publicaciones
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-[#916bc4] text-white hover:bg-[#7d5baa] px-3 py-1 h-9" asChild>
                <a href="https://i2c.com.mx/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold tracking-tight">I</span>
                    <span className="text-xs font-bold relative top-[-5px]">2</span>
                    <span className="text-lg font-bold tracking-tight">C</span>
                  </div>
                </a>
              </Button>
              <div className="hidden md:flex gap-2">
                <Button asChild className="bg-[#044caa] text-white hover:bg-[#033d88]">
                  <Link href="/iniciar-sesion">Iniciar sesión</Link>
                </Button>
                <Button asChild className="bg-[#044caa] text-white hover:bg-[#033d88]">
                  <Link href="/registro">Registrarse</Link>
                </Button>
              </div>

              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-[#044caa] hover:bg-blue-50">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white text-[#044caa] border-blue-100">
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        <Image
                          src="/images/sei-logo.png"
                          alt="Sistema Estatal de Investigadores Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-bold text-lg">Sistema Estatal de Investigadores</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/explorar" onClick={handleLinkClick}>
                          Explorar
                        </Link>
                      </Button>
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/investigadores" onClick={handleLinkClick}>
                          Investigadores
                        </Link>
                      </Button>
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/proyectos" onClick={handleLinkClick}>
                          Proyectos
                        </Link>
                      </Button>
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/publicaciones" onClick={handleLinkClick}>
                          Publicaciones
                        </Link>
                      </Button>
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/instituciones" onClick={handleLinkClick}>
                          Instituciones
                        </Link>
                      </Button>
                      <Button variant="ghost" className="justify-start text-[#044caa] hover:bg-blue-50" asChild>
                        <Link href="/campos" onClick={handleLinkClick}>
                          Campos
                        </Link>
                      </Button>
                      <Button className="justify-start bg-[#916bc4] text-white hover:bg-[#7d5baa]" asChild>
                        <a
                          href="https://i2c.com.mx/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                          onClick={handleLinkClick}
                        >
                          <div className="flex items-baseline">
                            <span className="text-lg font-bold tracking-tight">I</span>
                            <span className="text-xs font-bold relative top-[-5px]">2</span>
                            <span className="text-lg font-bold tracking-tight">C</span>
                          </div>
                        </a>
                      </Button>
                      <Button className="justify-start bg-[#044caa] text-white hover:bg-[#033d88]" asChild>
                        <Link href="/iniciar-sesion" onClick={handleLinkClick}>
                          Iniciar sesión
                        </Link>
                      </Button>
                      <Button className="mt-2 bg-[#044caa] text-white hover:bg-[#033d88]" asChild>
                        <Link href="/registro" onClick={handleLinkClick}>
                          Registrarse
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 text-[#044caa]",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-[#044caa]">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
