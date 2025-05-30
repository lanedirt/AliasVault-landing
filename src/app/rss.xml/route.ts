import { getAllBlogAndNewsPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';
import { remark } from 'remark';
import html from 'remark-html';

export async function GET() {
  const posts = getAllBlogAndNewsPosts();

  // Process posts to clean up content
  const processedPosts = await Promise.all(
    posts.map(async (post) => {
      // Convert MDX to plain text with basic formatting
      const processedContent = await remark()
        .use(html)
        .process(post.content);

      // Get first 500 characters of content for description
      const truncatedContent = processedContent.toString()
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\n+/g, ' ') // Replace multiple newlines with space
        .trim()
        .slice(0, 500) + '...';

      return {
        ...post,
        content: truncatedContent
      };
    })
  );

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>AliasVault Blog</title>
        <link>https://aliasvault.com</link>
        <description>Latest blog posts and news from AliasVault</description>
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="https://aliasvault.com/rss.xml" rel="self" type="application/rss+xml" />
        ${processedPosts.map((post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>https://aliasvault.com/${post.type}/${post.slug}</link>
            <guid>https://aliasvault.com/${post.type}/${post.slug}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description><![CDATA[${post.content}]]></description>
            <category><![CDATA[${post.tags.join(', ')}]]></category>
            <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
          </item>
        `).join('')}
      </channel>
    </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}