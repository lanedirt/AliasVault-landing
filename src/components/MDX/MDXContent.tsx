'use client'

import { MDXRemote } from 'next-mdx-remote'
import { components } from './MDXComponents'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
