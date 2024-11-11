import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Get base URL from environment variable or default
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aliasvault.net'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/docs',
        '/contact',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0
    }))

    // Example: add dynamic routes from database/API
    // const posts = await fetchPosts()
    // const dynamicRoutes = posts.map(post => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: post.updatedAt,
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8
    // }))

    return [...staticRoutes/* , ...dynamicRoutes */]
}
