export default function TeamLoading() {
  return (
    <div>
      <div className="mb-8">
        <div className="h-10 w-48 bg-card animate-pulse rounded mb-2" />
        <div className="h-6 w-64 bg-card animate-pulse rounded" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="w-32 h-32 bg-primary animate-pulse rounded-full mx-auto mb-4" />
            <div className="h-6 w-3/4 bg-primary animate-pulse rounded mx-auto mb-2" />
            <div className="h-4 w-1/2 bg-primary animate-pulse rounded mx-auto mb-4" />
            <div className="flex gap-2 justify-center">
              <div className="h-8 w-16 bg-secondary animate-pulse rounded" />
              <div className="h-8 w-16 bg-red-500 animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}