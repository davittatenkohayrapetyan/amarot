# Amarot Website (Phase 1)

Production-ready first version of Amarot's brand and storefront website.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma (PostgreSQL schema)
- Auth.js credentials auth for admin

## Features
- Premium public site: home, shop, product details, ingredients, about, contact, wholesale, blog/read.
- Admin CMS: login, dashboard, products CRUD, blog CRUD, homepage announcement management.
- SEO: metadata, OG/Twitter cards base, sitemap, robots, canonical base.
- Future ecommerce foundations: cart, checkout, payment/shipping/order domain models (schema only for now).

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Configure env
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client and run migrations
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Seed data
   ```bash
   npm run prisma:seed
   ```
5. Start dev server
   ```bash
   npm run dev
   ```

## Admin
- Login path: `/admin/login`
- Credentials from `.env`

## Notes
- Cart and Buy Now are intentionally non-transactional in phase 1 and return graceful “coming soon” behavior.
- Product and post image fields are included and ready for integration with storage/CDN in next phase.
