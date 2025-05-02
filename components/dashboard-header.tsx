import { Bell, Building, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "./dashboard-nav"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center h-16 px-4 border-b bg-white shrink-0 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex items-center gap-2 mb-8">
            <Building className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">StrataSphere</span>
          </div>
          <DashboardNav mobile />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2 md:ml-4">
        <Building className="h-6 w-6 text-emerald-600 hidden md:block" />
        <Link href="/" className="text-lg font-bold text-emerald-600">
          StrataSphere
        </Link>
      </div>
      <div className="flex items-center ml-auto gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar"
          />
          <span className="sr-only">User menu</span>
        </Button>
      </div>
    </header>
  )
}
