import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { MaintenanceRequestForm } from "@/components/maintenance-request-form"

export default function NewMaintenanceRequestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">New Maintenance Request</h1>
            <MaintenanceRequestForm />
          </div>
        </main>
      </div>
    </div>
  )
}
