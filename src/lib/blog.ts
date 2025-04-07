import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentPost {
  type: 'blog' | 'news'
  slug: string
  title: string
  description: string
  date: string
  image?: string
  author: {
    name: string
    image: string
    designation: string
  }
  tags: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')
const newsDirectory = path.join(process.cwd(), 'src/content/news')

function getPostsFromDirectory(directory: string, type: 'blog' | 'news'): ContentPost[] {
  const fileNames = fs.readdirSync(directory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(directory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        type,
        ...data,
      } as ContentPost
    })
}

export function getAllBlogPosts(): ContentPost[] {
  const posts = getPostsFromDirectory(postsDirectory, 'blog')
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllNewsPosts(): ContentPost[] {
  const posts = getPostsFromDirectory(newsDirectory, 'news')
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllBlogAndNewsPosts(): ContentPost[] {
  const blogPosts = getPostsFromDirectory(postsDirectory, 'blog')
  const newsPosts = getPostsFromDirectory(newsDirectory, 'news')
  const allPosts = [...blogPosts, ...newsPosts]
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): ContentPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      type: 'blog',
      slug,
      content,
      ...data,
    } as ContentPost
  } catch {
    return null
  }
} 

export function getNewsBySlug(slug: string): ContentPost | null {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      type: 'news',
      slug,
      content,
      ...data,
    } as ContentPost
  } catch {
    return null
  }
}

export function getBlogPostsByTag(tag: string): ContentPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}
