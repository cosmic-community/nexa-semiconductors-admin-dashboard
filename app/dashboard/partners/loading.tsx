export default function PartnersLoading() {
  return (
    <div>
      <div className="mb-8">
        <div className="h-10 w-48 bg-card animate-pulse rounded mb-2" />
        <div className="h-6 w-64 bg-card animate-pulse rounded" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="w-full h-32 bg-primary animate-pulse rounded-lg mb-4" />
            <div className="h-4 w-24 bg-secondary animate-pulse rounded mb-2" />
            <div className="h-6 w-3/4 bg-primary animate-pulse rounded mb-2" />
            <div className="h-4 w-full bg-primary animate-pulse rounded mb-4" />
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-secondary animate-pulse rounded" />
              <div className="h-8 w-16 bg-red-500 animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}