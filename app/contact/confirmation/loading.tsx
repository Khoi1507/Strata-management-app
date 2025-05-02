export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-16 bg-white border-b animate-pulse" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 h-96 animate-pulse" />
        </div>
      </main>
    </div>
  )
}
