import { DashboardHeader } from "@/components/dashboard-header"
import { ConfirmationPageClient } from "@/components/confirmation-page-client"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <ConfirmationPageClient />
        </div>
      </main>
    </div>
  )
}
