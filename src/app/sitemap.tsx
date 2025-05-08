import { MetadataRoute } from 'next'
import { getAllBlogAndNewsPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Get base URL from environment variable or default
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aliasvault.net'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/features',
        '/platforms',
        '/docs',
        '/blog',
        '/contact',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0
    }))

    // Get all blog and news posts
    const posts = getAllBlogAndNewsPosts()

    // Create dynamic routes for blog and news posts
    const dynamicRoutes = posts.map(post => ({
        url: `${baseUrl}/${post.type}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }))

    return [...staticRoutes, ...dynamicRoutes]
}
