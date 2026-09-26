import { ProjectItem, Service, Testimonial } from '@/types'
import { Network, ShieldCheck, Code2, Smartphone, Megaphone, Target, Users, MessageCircle } from 'lucide-react'

export const SERVICES: Service[] = [
  {
    key: 'network-admin',
    title: 'Network Administration',
    description: 'Configure and maintain reliable network infrastructure with Cisco equipment.',
    icon: Network,
    highlights: ['Cisco routing & switching', 'LAN/WAN setup', 'Infrastructure maintenance'],
  },
  {
    key: 'network-security',
    title: 'Network Security',
    description: 'Set up and monitor systems so networks stay stable and protected.',
    icon: ShieldCheck,
    highlights: ['Access control', 'Monitoring', 'Systems administration'],
  },
  {
    key: 'web-software',
    title: 'Web & Software Development',
    description: 'Build web apps and tools with Java, Python, C and React.',
    icon: Code2,
    highlights: ['React', 'Java / Python / C', 'Custom software'],
  },
  {
    key: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Design and build cross-platform mobile apps with Flutter.',
    icon: Smartphone,
    highlights: ['Flutter', 'Cross-platform', 'UI implementation'],
  },
  {
    key: 'meta-ads',
    title: 'Media Buying — Meta Ads',
    description: 'Plan and run Facebook & Instagram ad campaigns for e-commerce brands.',
    icon: Megaphone,
    highlights: ['Campaign setup', 'Audience targeting', 'Budget optimization'],
  },
  {
    key: 'snapchat-ads',
    title: 'Media Buying — Snapchat Ads',
    description: 'Run Snapchat ad campaigns tailored to Algerian e-commerce audiences.',
    icon: Target,
    highlights: ['Snapchat Ads Manager', 'Creative testing', 'Performance tracking'],
  },
  {
    key: 'social-management',
    title: 'Social Media Management',
    description: 'Manage social accounts end-to-end: content, scheduling and growth.',
    icon: Users,
    highlights: ['Content calendar', 'Community management', 'Growth tracking'],
  },
  {
    key: 'community',
    title: 'Community Management',
    description: 'Respond to and engage a brand\u2019s audience across social platforms.',
    icon: MessageCircle,
    highlights: ['Audience engagement', 'Brand voice', 'Reporting'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    image: '/images/project/Api-GAt.png',
    title: 'Complete API & Cloud project',
    topics: ['Cloud', 'API', 'Software'],
    category: 'Development',
  },
  {
    image: '/images/project/Ecom-sys.png',
    title: 'E-commerce system project',
    topics: ['e-commerce', 'Website', 'Dashboard'],
    category: 'Development',
  },
  {
    image: '/images/project/PhoneShop.png',
    title: 'Showcase website project ',
    topics: ['ShowCase-Website'],
    category: 'Development',
  },
  {
    image: '/images/project/Reseau-cisco.png',
    title: 'Company secured network project',
    topics: ['Network Security'],
    category: 'Networking',
  },
]

export const TESTIMONIALS: Testimonial[] = []
