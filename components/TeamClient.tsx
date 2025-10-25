'use client'

import { useState } from 'react'
import { TeamMember } from '@/types'

interface TeamClientProps {
  initialTeamMembers: TeamMember[]
}

export default function TeamClient({ initialTeamMembers }: TeamClientProps) {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Team Members</h1>
          <p className="text-gray-400">Manage NEXA's leadership team</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Team Member
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            {member.metadata.photo && (
              <img
                src={`${member.metadata.photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={member.metadata.full_name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-foreground text-center mb-1">
              {member.metadata.full_name}
            </h3>
            <p className="text-secondary text-sm text-center mb-4">
              {member.metadata.role}
            </p>
            <div className="flex gap-2 justify-center">
              <button className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm hover:bg-opacity-90 transition-colors">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-opacity-90 transition-colors">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {teamMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No team members found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First Team Member
          </button>
        </div>
      )}
    </div>
  )
}