import { cosmic, hasStatus } from '@/lib/cosmic'
import { CompanyInfo } from '@/types'
import CompanyClient from '@/components/CompanyClient'

export default async function CompanyPage() {
  let companyInfo: CompanyInfo | null = null

  try {
    const response = await cosmic.objects
      .find({ type: 'company-info' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const objects = response.objects as CompanyInfo[]
    companyInfo = objects[0] || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      companyInfo = null
    } else {
      throw error
    }
  }

  return <CompanyClient initialCompanyInfo={companyInfo} />
}