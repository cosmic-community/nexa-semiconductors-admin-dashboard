'use client'

import { useState } from 'react'
import { Partner } from '@/types'

interface PartnersClientProps {
  initialPartners: Partner[]
}

export default function PartnersClient({ initialPartners }: PartnersClientProps) {
  const [partners, setPartners] = useState(initialPartners)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Partners</h1>
          <p className="text-gray-400">Manage NEXA's strategic partners</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Partner
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            {partner.metadata.logo && (
              <img
                src={`${partner.metadata.logo.imgix_url}?w=300&h=150&fit=contain&auto=format,compress`}
                alt={partner.metadata.partner_name}
                className="w-full h-32 object-contain mb-4"
              />
            )}
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {partner.metadata.partner_type.value}
            </span>
            <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
              {partner.metadata.partner_name}
            </h3>
            {partner.metadata.description && (
              <p className="text-gray-400 text-sm mb-4">
                {partner.metadata.description}
              </p>
            )}
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm hover:bg-opacity-90 transition-colors">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-opacity-90 transition-colors">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {partners.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No partners found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First Partner
          </button>
        </div>
      )}
    </div>
  )
}