import { cosmic } from '@/lib/cosmic'
import DashboardStats from '@/components/DashboardStats'

export default async function DashboardPage() {
  // Fetch counts for all content types with proper typing
  const stats = await Promise.all([
    cosmic.objects.find({ type: 'services' }).props(['id']).then(r => r.objects.length).catch(() => 0),
    cosmic.objects.find({ type: 'team-members' }).props(['id']).then(r => r.objects.length).catch(() => 0),
    cosmic.objects.find({ type: 'case-studies' }).props(['id']).then(r => r.objects.length).catch(() => 0),
    cosmic.objects.find({ type: 'news-updates' }).props(['id']).then(r => r.objects.length).catch(() => 0),
    cosmic.objects.find({ type: 'partners' }).props(['id']).then(r => r.objects.length).catch(() => 0),
    cosmic.objects.find({ type: 'roadmap-milestones' }).props(['id']).then(r => r.objects.length).catch(() => 0),
  ])

  const statsData = {
    services: stats[0],
    teamMembers: stats[1],
    caseStudies: stats[2],
    news: stats[3],
    partners: stats[4],
    roadmap: stats[5],
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          NEXA Semiconductors Dashboard
        </h1>
        <p className="text-gray-400">
          Engineering the Future of Silicon Intelligence
        </p>
      </div>

      <DashboardStats stats={statsData} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Recent Activity
          </h2>
          <p className="text-gray-400 text-sm">
            Select a content type from the sidebar to manage your content.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <a
              href="/dashboard/services"
              className="block px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors"
            >
              Manage Services
            </a>
            <a
              href="/dashboard/team"
              className="block px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors"
            >
              Manage Team
            </a>
            <a
              href="/dashboard/news"
              className="block px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors"
            >
              Manage News
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}