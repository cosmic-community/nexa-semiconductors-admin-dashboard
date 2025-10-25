# NEXA Semiconductors Admin Dashboard

![App Preview](https://imgix.cosmicjs.com/4b565d70-b1ba-11f0-a808-31b5d2a33ba3-photo-1635070041078-e363dbe005cb-1761407407058.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive, production-ready admin dashboard for managing NEXA Semiconductors' content across all Cosmic CMS content types. Built with Next.js 15, React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Multi-Content Type Management** - Manage Services, Team Members, Case Studies, Testimonials, News Updates, Partners, Roadmap Milestones, and Company Info
- **Full CRUD Operations** - Create, read, update, and delete content with intuitive modal-based interfaces
- **Rich Content Editing** - Support for HTML content, file uploads, and object relationships
- **Responsive Design** - Fully responsive layout optimized for all screen sizes
- **Real-time Updates** - Instant visual feedback for all content operations
- **Search & Filter** - Quick search and filter capabilities across content types
- **Status Management** - Track completion status, publication dates, and featured content
- **Image Optimization** - Automatic image optimization using imgix CDN
- **Type Safety** - Full TypeScript support with comprehensive type definitions
- **Error Handling** - Robust error handling with user-friendly messages

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fcef6092c9229c30fe6011&clone_repository=68fcf2f592c9229c30fe607b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies Create a highly professional and futuristic corporate website for NEXA Semiconductors, a cutting-edge semiconductor startup revolutionizing advanced chip manufacturing. The design must reflect innovation, precision engineering, and world-class technology.
> 
> Brand Identity
> • Company Name: NEXA Semiconductors
> • Tagline: Engineering the Future of Silicon Intelligence
> • Theme: Futuristic, premium, clean UI, semiconductor and AI-inspired visuals
> • Color Palette: Deep Navy Blue, Electric Cyan, Silver, and White
> • Style: Sleek layouts, micro-interactions, modern typography, chip patterns, nanotech-themed shapes
> 
> Company Overview
> NEXA Semiconductors is building next-generation high-performance silicon chips by 2029, focusing on innovation that drives the intelligence of tomorrow's world. NEXA aims to become a global leader in semiconductor technology by combining advanced nanomanufacturing with AI-driven engineering.
> 
> Leadership Team Section
> Highlight the founding team with professional photos and roles:
> • Saitej Reddy — Founder & CTO (Visionary technologist leading chip architecture & R&D)
> • Shravan Kumar — CEO & Co-Founder (Driving strategy, growth, and global partnerships)
> • Manjith — COO (Overseeing operations and scaling execution worldwide)
> • Harini Satwika — Head of Strategic Communication (Managing branding, global communication & corporate relations)
> 
> Key Sections to Include
> 
> Hero Section with bold mission statement and futuristic background animation
> 
> About Us: Vision for chip manufacturing by 2029
> 
> Technology: Innovation in semiconductor fabrication
> 
> Roadmap: Development milestones from today to 2029 chip launch
> 
> Leadership Team: Professional bios with clean card layouts
> 
> Partners & Investors: Placeholder logos
> 
> Contact Section with professional inquiry form
> 
> Footer with copyright and headquarters location placeholder
> 
> Visual Assets
> • Include abstract semiconductor chip imagery
> • Include subtle animated circuit lines or nanotech grids
> • Smooth hover effects and transitions
> 
> Tone of Content
> Professional, confident, futuristic, trusted by innovators
> 
> Ensure the final website looks like a world-class semiconductor company with a global vision and premium brand presence."

### Code Generation Prompt

> "Create a React dashboard that displays and manages my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI component library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Bun** - Fast JavaScript runtime and package manager

## 📋 Prerequisites

- Bun installed on your machine
- A Cosmic account with the NEXA Semiconductors bucket
- Node.js 18+ (for compatibility)

## 🚀 Getting Started

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

The application requires the following environment variables:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Read-only API key for fetching content
- `COSMIC_WRITE_KEY` - Write access API key for content management

## 📖 Cosmic SDK Examples

### Fetching Content

```typescript
// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single team member
const { object: teamMember } = await cosmic.objects
  .findOne({ type: 'team-members', slug: 'saitej-reddy' })
  .depth(1)
```

### Creating Content

```typescript
// Create new service
await cosmic.objects.insertOne({
  type: 'services',
  title: 'New Service',
  metadata: {
    service_name: 'New Service',
    short_description: 'Service description',
    full_description: '<p>Detailed description</p>',
    display_order: 5
  }
})
```

### Updating Content

```typescript
// Update roadmap milestone status
await cosmic.objects.updateOne(milestoneId, {
  metadata: {
    status: {
      key: 'completed',
      value: 'Completed'
    }
  }
})
```

### Deleting Content

```typescript
// Delete partner
await cosmic.objects.deleteOne(partnerId)
```

## 🎨 Cosmic CMS Integration

This dashboard is specifically designed to work with the following Cosmic object types:

- **company-info** (singleton) - Core company information
- **services** - Service offerings with descriptions and features
- **team-members** - Leadership team with bios and photos
- **testimonials** - Client testimonials and reviews
- **case-studies** - Project case studies with challenges, solutions, and results
- **roadmap-milestones** - Development timeline and milestones
- **partners** - Strategic partners and investors
- **news-updates** - Company news and announcements

Each content type has dedicated management interfaces with appropriate fields, validations, and relationships.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Create new site in Netlify
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy

## 📝 License

This project is licensed under the MIT License.

## 🤝 Support

For support, please contact the NEXA Semiconductors team or refer to the [Cosmic documentation](https://www.cosmicjs.com/docs).

<!-- README_END -->