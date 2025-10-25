import { cosmic, hasStatus } from '@/lib/cosmic'
import { Partner } from '@/types'
import PartnersClient from '@/components/PartnersClient'

export default async function PartnersPage() {
  let partners: Partner[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'partners' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    partners = response.objects as Partner[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      partners = []
    } else {
      throw error
    }
  }

  return <PartnersClient initialPartners={partners} />
}