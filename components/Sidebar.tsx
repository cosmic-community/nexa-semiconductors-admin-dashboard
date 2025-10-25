'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Services', href: '/dashboard/services', icon: '💼' },
  { name: 'Team', href: '/dashboard/team', icon: '👥' },
  { name: 'Case Studies', href: '/dashboard/case-studies', icon: '📊' },
  { name: 'News', href: '/dashboard/news', icon: '📰' },
  { name: 'Partners', href: '/dashboard/partners', icon: '🤝' },
  { name: 'Roadmap', href: '/dashboard/roadmap', icon: '🗺️' },
  { name: 'Company Info', href: '/dashboard/company', icon: '🏢' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border">
      <div className="p-6">
        <h2 className="text-xl font-bold text-secondary mb-1">NEXA</h2>
        <p className="text-xs text-gray-400">Admin Dashboard</p>
      </div>

      <nav className="px-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-colors ${
                isActive
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-gray-400 hover:bg-primary hover:text-foreground'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}