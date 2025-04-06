import Image from 'next/image'
import { GitHubRelease } from '@/components/Common/GitHubRelease'

export const components = {
  GitHubRelease,
  img: (props: any) => (
    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
      <Image
        {...props}
        fill
        className="object-cover object-center"
        alt={props.alt || ''}
      />
    </div>
  ),
  h1: (props: any) => (
    <h1
      className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="mb-6 list-inside list-disc text-body-color"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
      <p className="text-center text-base font-medium italic text-body-color" {...props} />
    </div>
  ),
} 