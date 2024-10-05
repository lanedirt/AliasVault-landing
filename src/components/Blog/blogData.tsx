import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Understanding End-to-End Encryption in AliasVault",
    paragraph:
      "Dive deep into how AliasVault implements end-to-end encryption to ensure your data remains private and secure at all times.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alex Crypto",
      image: "/images/blog/author-01.png",
      designation: "Security Expert",
    },
    tags: ["security"],
    publishDate: "2023-05-15",
  },
  {
    id: 2,
    title: "5 Ways AliasVault Protects Your Digital Identity",
    paragraph:
      "Discover the key features of AliasVault that help you maintain control over your online presence and protect your personal information.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Emma Privacy",
      image: "/images/blog/author-02.png",
      designation: "Digital Privacy Advocate",
    },
    tags: ["privacy"],
    publishDate: "2023-06-02",
  },
  {
    id: 3,
    title: "The Power of Virtual Identities: AliasVault in Action",
    paragraph:
      "Learn how to leverage virtual identities to create unique personas for different online services and enhance your privacy.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Sam Alias",
      image: "/images/blog/author-03.png",
      designation: "Product Manager",
    },
    tags: ["feature"],
    publishDate: "2023-06-20",
  },
];

export default blogData;
