import Image from 'next/image'
import { GitHubRelease } from '@/components/Common/GitHubRelease'
import ClickableImage from './ClickableImage'
import { ComponentProps } from 'react'

export const components = {
  GitHubRelease,
  ClickableImage,
  a: (props: ComponentProps<'a'>) => (
    <a
      className="text-primary transition-all duration-300 hover:underline"
      {...props}
    />
  ),
  img: (props: ComponentProps<'img'>) => (
    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
      <Image
        src={props.src || ''}
        alt={props.alt || ''}
        fill
        className="object-cover object-center"
      />
    </div>
  ),
  h1: (props: ComponentProps<'h1'>) => (
    <h1
      className="mb-12 mt-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight"
      {...props}
    />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2
      className="mb-8 mt-12 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight"
      {...props}
    />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3
      className="mb-6 mt-8 text-lg font-medium leading-tight text-black dark:text-white sm:text-xl sm:leading-tight"
      {...props}
    />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p
      className="mb-6 text-base leading-relaxed text-body-color md:text-lg md:leading-relaxed"
      {...props}
    />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul
      className="mb-6 list-inside list-disc text-body-color"
      {...props}
    />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol
      className="list-decimal list-inside mb-6 text-body-color"
      {...props}
    />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li
      className="mb-2 text-base leading-relaxed text-body-color md:text-lg md:leading-relaxed"
      {...props}
    />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <div className="relative z-10 mb-6 overflow-hidden rounded-md bg-primary bg-opacity-10 p-4 md:p-5">
      <blockquote className="text-center text-base font-medium italic text-body-color" {...props} />
    </div>
  ),
}