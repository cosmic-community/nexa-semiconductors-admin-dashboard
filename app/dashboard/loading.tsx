export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400">Loading dashboard...</p>
      </div>
    </div>
  )
}