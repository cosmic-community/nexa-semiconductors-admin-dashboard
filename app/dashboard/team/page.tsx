import { cosmic, hasStatus } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import TeamClient from '@/components/TeamClient'

export default async function TeamPage() {
  let teamMembers: TeamMember[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    teamMembers = response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      teamMembers = []
    } else {
      throw error
    }
  }

  return <TeamClient initialTeamMembers={teamMembers} />
}