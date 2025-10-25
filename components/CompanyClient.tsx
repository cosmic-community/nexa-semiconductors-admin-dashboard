'use client'

import { useState } from 'react'
import { CompanyInfo } from '@/types'

interface CompanyClientProps {
  initialCompanyInfo: CompanyInfo | null
}

export default function CompanyClient({ initialCompanyInfo }: CompanyClientProps) {
  const [companyInfo, setCompanyInfo] = useState(initialCompanyInfo)

  if (!companyInfo) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 mb-4">No company information found</p>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Company Information
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Company Information</h1>
          <p className="text-gray-400">Manage NEXA's core company details</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Edit Company Info
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        {companyInfo.metadata.hero_background && (
          <img
            src={`${companyInfo.metadata.hero_background.imgix_url}?w=1200&h=300&fit=crop&auto=format,compress`}
            alt="Company Hero"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
        )}

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {companyInfo.metadata.company_name}
            </h2>
            <p className="text-secondary text-lg mb-4">
              {companyInfo.metadata.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mission Statement</h3>
            <p className="text-gray-400">
              {companyInfo.metadata.mission_statement}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Vision Statement</h3>
            <p className="text-gray-400">
              {companyInfo.metadata.vision_statement}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {companyInfo.metadata.founded_year && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Founded</p>
                <p className="text-foreground">{companyInfo.metadata.founded_year}</p>
              </div>
            )}
            {companyInfo.metadata.headquarters && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                <p className="text-foreground">{companyInfo.metadata.headquarters}</p>
              </div>
            )}
            {companyInfo.metadata.contact_email && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Contact Email</p>
                <p className="text-foreground">{companyInfo.metadata.contact_email}</p>
              </div>
            )}
            {companyInfo.metadata.contact_phone && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Contact Phone</p>
                <p className="text-foreground">{companyInfo.metadata.contact_phone}</p>
              </div>
            )}
          </div>

          {(companyInfo.metadata.primary_color || companyInfo.metadata.secondary_color) && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Brand Colors</h3>
              <div className="flex gap-4">
                {companyInfo.metadata.primary_color && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-12 h-12 rounded border border-border"
                      style={{ backgroundColor: companyInfo.metadata.primary_color }}
                    />
                    <span className="text-gray-400 text-sm">Primary</span>
                  </div>
                )}
                {companyInfo.metadata.secondary_color && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-12 h-12 rounded border border-border"
                      style={{ backgroundColor: companyInfo.metadata.secondary_color }}
                    />
                    <span className="text-gray-400 text-sm">Secondary</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}