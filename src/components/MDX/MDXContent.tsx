'use client'

import { MDXRemote } from 'next-mdx-remote'
import { components } from './MDXComponents'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
