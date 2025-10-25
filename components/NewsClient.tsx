'use client'

import { useState } from 'react'
import { NewsUpdate } from '@/types'

interface NewsClientProps {
  initialNews: NewsUpdate[]
}

export default function NewsClient({ initialNews }: NewsClientProps) {
  const [news, setNews] = useState(initialNews)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">News & Updates</h1>
          <p className="text-gray-400">Manage NEXA's news and announcements</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add News Article
        </button>
      </div>

      <div className="grid gap-6">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex gap-6">
              {article.metadata.featured_image && (
                <img
                  src={`${article.metadata.featured_image.imgix_url}?w=300&h=200&fit=crop&auto=format,compress`}
                  alt={article.metadata.headline}
                  className="w-48 h-32 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                    {article.metadata.category.value}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(article.metadata.publication_date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {article.metadata.headline}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {article.metadata.summary}
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

      {news.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No news articles found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First News Article
          </button>
        </div>
      )}
    </div>
  )
}