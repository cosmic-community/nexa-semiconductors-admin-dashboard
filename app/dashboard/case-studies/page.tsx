import { cosmic, hasStatus } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import CaseStudiesClient from '@/components/CaseStudiesClient'

export default async function CaseStudiesPage() {
  let caseStudies: CaseStudy[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    caseStudies = response.objects as CaseStudy[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      caseStudies = []
    } else {
      throw error
    }
  }

  return <CaseStudiesClient initialCaseStudies={caseStudies} />
}