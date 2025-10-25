import { cosmic, hasStatus } from '@/lib/cosmic'
import { Service } from '@/types'
import ServicesClient from '@/components/ServicesClient'

export default async function ServicesPage() {
  let services: Service[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    services = response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      services = []
    } else {
      throw error
    }
  }

  return <ServicesClient initialServices={services} />
}