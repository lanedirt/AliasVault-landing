import { Link } from '@/i18n/navigation'

interface TagButtonProps {
  text: string
}

const TagButton = ({ text }: TagButtonProps) => {
  return (
    <Link
      href={`/blog/tag/${text.toLowerCase()}`}
      className="mr-3 mb-3 inline-flex items-center justify-center rounded-md bg-primary bg-opacity-10 px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-20"
    >
      {text}
    </Link>
  )
}

export default TagButton
