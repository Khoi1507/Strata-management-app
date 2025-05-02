import {
  Building,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  PenToolIcon as Tool,
  Users,
  Wallet,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

interface DashboardNavProps {
  mobile?: boolean
}

export function DashboardNav({ mobile = false }: DashboardNavProps) {
  const navClass = mobile ? "grid gap-1" : "hidden border-r bg-white w-[240px] h-[calc(100vh-4rem)] p-6 md:block"

  return (
    <nav className={navClass}>
      <Link
        href="/dashboard"
        className="flex items-center gap-2 p-2 text-emerald-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        href="/levies"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Wallet className="h-5 w-5" />
        Levies
      </Link>
      <Link
        href="/maintenance"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Tool className="h-5 w-5" />
        Maintenance
      </Link>
      <Link
        href="/documents"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <FileText className="h-5 w-5" />
        Documents
      </Link>
      <Link
        href="/committee"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Users className="h-5 w-5" />
        Committee
      </Link>
      <Link
        href="/meetings"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Calendar className="h-5 w-5" />
        Meetings
      </Link>
      <Link
        href="/announcements"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <MessageSquare className="h-5 w-5" />
        Announcements
      </Link>
      <Link
        href="/contact"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <MessageCircle className="h-5 w-5" />
        Contact Us
      </Link>
      <Link
        href="/building"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Building className="h-5 w-5" />
        Building Info
      </Link>
      <Link
        href="/settings"
        className="flex items-center gap-2 p-2 text-gray-600 font-medium rounded-md hover:bg-emerald-50"
      >
        <Settings className="h-5 w-5" />
        Settings
      </Link>
    </nav>
  )
}
