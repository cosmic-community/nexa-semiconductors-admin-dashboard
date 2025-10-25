interface DashboardStatsProps {
  stats: {
    services: number
    teamMembers: number
    caseStudies: number
    news: number
    partners: number
    roadmap: number
  }
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    { label: 'Services', value: stats.services, icon: '💼' },
    { label: 'Team Members', value: stats.teamMembers, icon: '👥' },
    { label: 'Case Studies', value: stats.caseStudies, icon: '📊' },
    { label: 'News Updates', value: stats.news, icon: '📰' },
    { label: 'Partners', value: stats.partners, icon: '🤝' },
    { label: 'Roadmap Items', value: stats.roadmap, icon: '🗺️' },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      {statCards.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
            <span className="text-4xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}