import { getBlogPostsByTag } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import SingleBlog from '@/components/Blog/SingleBlog'
import SingleNews from '@/components/Blog/SingleNews'
import Breadcrumb from '@/components/Common/Breadcrumb'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const posts = getBlogPostsByTag(tag)

  if (posts.length === 0) {
    return {
      title: 'Tag Not Found',
      description: 'No posts found for this tag.',
    }
  }

  return {
    title: `Posts tagged with "${tag}" | AliasVault Blog`,
    description: `Browse all blog posts tagged with ${tag} on AliasVault.`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const posts = getBlogPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <>
      <Breadcrumb
        pageName={`Posts tagged with "${tag}"`}
        description={`Browse all blog posts and news tagged with ${tag}`}
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                {post.type === 'blog' ? (
                  <SingleBlog blog={post} />
                ) : (
                  <SingleNews news={post} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}