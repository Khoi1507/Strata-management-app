import Link from "next/link"
import { ArrowRight, Building, FileText, PenToolIcon as Tool, Users, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-emerald-600">StrataSphere</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/levies" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Levies
            </Link>
            <Link href="/maintenance" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Maintenance
            </Link>
            <Link href="/documents" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Documents
            </Link>
            <Link href="/committee" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Committee
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-emerald-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-emerald-800">Strata Management Made Simple</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              StrataSphere helps strata committees efficiently manage their buildings, track levies, handle maintenance
              requests, and communicate with owners.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-emerald-800">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Wallet className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Levy Management</CardTitle>
                  <CardDescription>
                    Track and manage levy payments for administration and capital works funds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Generate levy notices, record payments, and monitor fund balances with ease.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/levies">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Tool className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Streamline the process of handling maintenance and repair requests.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Allow owners to submit requests, track progress, and manage contractor communications.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/maintenance">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Document Repository</CardTitle>
                  <CardDescription>Centralized storage for all strata-related documents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Store meeting minutes, financial reports, by-laws, and other important documents.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/documents">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Committee Management</CardTitle>
                  <CardDescription>Manage committee roles and responsibilities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Track committee members, their roles, and contact information for easy communication.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/committee">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Building className="h-6 w-6 mr-2 text-emerald-400" />
                StrataSphere
              </h3>
              <p className="text-gray-300">
                Simplifying strata management for committees in New South Wales under the Strata Schemes Management Act
                (2015).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/levies" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Levies
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/documents" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Documents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">Need assistance with your strata management?</p>
              <Button variant="outline" className="bg-emerald-600 hover:bg-emerald-700 border-none">
                Contact Support
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} StrataSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
