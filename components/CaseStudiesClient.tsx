'use client'

import { useState } from 'react'
import { CaseStudy } from '@/types'

interface CaseStudiesClientProps {
  initialCaseStudies: CaseStudy[]
}

export default function CaseStudiesClient({ initialCaseStudies }: CaseStudiesClientProps) {
  const [caseStudies, setCaseStudies] = useState(initialCaseStudies)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Case Studies</h1>
          <p className="text-gray-400">Manage NEXA's project case studies</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Case Study
        </button>
      </div>

      <div className="grid gap-6">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            <div className="flex gap-6">
              {caseStudy.metadata.featured_image && (
                <img
                  src={`${caseStudy.metadata.featured_image.imgix_url}?w=300&h=200&fit=crop&auto=format,compress`}
                  alt={caseStudy.metadata.project_name}
                  className="w-48 h-32 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {caseStudy.metadata.project_name}
                </h3>
                <p className="text-secondary text-sm mb-2">
                  {caseStudy.metadata.client} • {caseStudy.metadata.industry}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {caseStudy.metadata.project_summary}
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

      {caseStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No case studies found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First Case Study
          </button>
        </div>
      )}
    </div>
  )
}