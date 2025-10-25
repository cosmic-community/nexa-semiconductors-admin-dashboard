import { cosmic, hasStatus } from '@/lib/cosmic'
import { RoadmapMilestone } from '@/types'
import RoadmapClient from '@/components/RoadmapClient'

export default async function RoadmapPage() {
  let milestones: RoadmapMilestone[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'roadmap-milestones' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    milestones = response.objects as RoadmapMilestone[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      milestones = []
    } else {
      throw error
    }
  }

  return <RoadmapClient initialMilestones={milestones} />
}