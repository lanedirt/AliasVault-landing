FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects anonymous telemetry data about general usage
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry during the build
# ENV NEXT_TELEMETRY_DISABLED 1

# Make sure your next.config.js has output: 'standalone' set
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Instead of using standalone output, copy the entire .next directory
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# Copy node_modules needed for production
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
# Copy package.json and next.config.mjs
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Use next start to run the application
CMD ["npm", "run", "start"]