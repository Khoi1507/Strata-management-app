export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-16 bg-white border-b animate-pulse" />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-10 bg-gray-200 rounded-md animate-pulse w-1/3" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 h-96 animate-pulse" />
            <div className="bg-white rounded-lg shadow-sm p-6 h-96 animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
}
