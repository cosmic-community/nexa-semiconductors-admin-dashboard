'use client'

import { useState } from 'react'
import { Service } from '@/types'

interface ServicesClientProps {
  initialServices: Service[]
}

export default function ServicesClient({ initialServices }: ServicesClientProps) {
  const [services, setServices] = useState(initialServices)

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Services</h1>
          <p className="text-gray-400">Manage NEXA's service offerings</p>
        </div>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
          Add Service
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors"
          >
            {service.metadata.service_image && (
              <img
                src={`${service.metadata.service_image.imgix_url}?w=400&h=200&fit=crop&auto=format,compress`}
                alt={service.metadata.service_name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {service.metadata.service_name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {service.metadata.short_description}
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
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No services found</p>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-opacity-90 transition-colors">
            Add Your First Service
          </button>
        </div>
      )}
    </div>
  )
}