'use client'

import { useState } from 'react'
import { RoadmapMilestone } from '@/types'

interface RoadmapClientProps {
  initialMilestones: RoadmapMilestone[]
}

export default function RoadmapClient({ initialMilestones }: RoadmapClientProps) {
  const [milestones, setMilestones] = useState(initialMilestones)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-secondary'
      case 'planned':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Roadmap Milestones</h1>
          <p className="text-gray-400">Manage NEXA's development timeline</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Milestone
        </button>
      </div>

      <div className="space-y-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex items-start gap-4">
              {milestone.metadata.milestone_icon && (
                <img
                  src={`${milestone.metadata.milestone_icon.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                  alt={milestone.metadata.milestone_title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 ${getStatusColor(milestone.metadata.status.key)} text-white rounded text-xs`}>
                    {milestone.metadata.status.value}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {milestone.metadata.target_date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {milestone.metadata.milestone_title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {milestone.metadata.description}
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm hover:bg-opacity-90 transition-colors">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-opacity-90 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {milestones.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No roadmap milestones found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First Milestone
          </button>
        </div>
      )}
    </div>
  )
}