export default function CompanyLoading() {
  return (
    <div>
      <div className="mb-8">
        <div className="h-10 w-48 bg-card animate-pulse rounded mb-2" />
        <div className="h-6 w-64 bg-card animate-pulse rounded" />
      </div>
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="w-full h-48 bg-primary animate-pulse rounded-lg mb-6" />
        <div className="space-y-6">
          <div className="h-8 w-1/2 bg-primary animate-pulse rounded" />
          <div className="h-6 w-3/4 bg-primary animate-pulse rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-primary animate-pulse rounded" />
            <div className="h-4 w-full bg-primary animate-pulse rounded" />
            <div className="h-4 w-3/4 bg-primary animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}