export type Service = {
  key: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  highlights?: string[]
  href?: string
}

export type ProjectItem = {
  image?: string
  title?: string
  topics?: string[]
  category?: string
  href?: string
}

export interface Testimonial {
  content: string
  name: string
  profession?: string
  avatar?: string
}

export interface HeaderItem {
  id: string
  name: string
  link: string
}
