export default function NewsLoading() {
  return (
    <div>
      <div className="mb-8">
        <div className="h-10 w-48 bg-card animate-pulse rounded mb-2" />
        <div className="h-6 w-64 bg-card animate-pulse rounded" />
      </div>
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-6">
              <div className="w-48 h-32 bg-primary animate-pulse rounded-lg" />
              <div className="flex-1">
                <div className="h-4 w-32 bg-secondary animate-pulse rounded mb-2" />
                <div className="h-6 w-3/4 bg-primary animate-pulse rounded mb-2" />
                <div className="h-4 w-full bg-primary animate-pulse rounded mb-4" />
                <div className="flex gap-2">
                  <div className="h-8 w-16 bg-secondary animate-pulse rounded" />
                  <div className="h-8 w-16 bg-red-500 animate-pulse rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}