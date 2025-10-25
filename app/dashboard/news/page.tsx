import { cosmic, hasStatus } from '@/lib/cosmic'
import { NewsUpdate } from '@/types'
import NewsClient from '@/components/NewsClient'

export default async function NewsPage() {
  let news: NewsUpdate[] = []

  try {
    const response = await cosmic.objects
      .find({ type: 'news-updates' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    news = response.objects as NewsUpdate[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      news = []
    } else {
      throw error
    }
  }

  return <NewsClient initialNews={news} />
}