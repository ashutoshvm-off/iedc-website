import {
  Facebook,
  YoutubeIcon,
  Instagram,
  Linkedin,
  Lightbulb,
  Users,
  Calendar,
  Award,
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Youtube,
} from "lucide-react"
import type { ReactNode } from "react"

// Types
export type NavItem = {
  name: string
  href: string
}

export type SocialLink = {
  name: string
  href: string
  icon: ReactNode
}

export type Feature = {
  icon: ReactNode
  title: string
  description: string
}

export type Stat = {
  number: string
  label: string
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export type StartupSuccess = {
  name: string
  description: string
  image: string
  year: string
}

export type TeamMember = {
  name: string
  role: string
  image: string
  department?: string
  year?: string
  bio?: string
  social?: {
    email?: string
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export type Achievement = {
  icon: ReactNode
  title: string
  description: string
}

export type ExcomMember = {
  name: string
  position: string
  image: string
  department: string
  year?: string
  social?: {
    email?: string
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export type Event = {
  id: number
  title: string
  date: string
  time?: string
  location: string
  image: string
  description: string
  category: string
  registrationLink?: string
}

export type GalleryImage = {
  id: number
  title: string
  category: string
  date: string
  image: string
}

export type FAQ = {
  question: string
  answer: string
}

export type ContactInfo = {
  email: string
  phone: string
  address: string[]
  officeHours: {
    days: string
    hours: string
  }[]
}

// Navigation
export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Excom", href: "/excom" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

// Social Links
export const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100090497731078&mibextid=rS40aB7S9Ucbxw6v", icon: <Facebook className="h-6 w-6" /> },
  { name: "Youtube", href: "https://youtube.com/@asiiedc?si=AwrDJC7qqMPRFrpP", icon: <Youtube className="h-6 w-6" /> },
  { name: "Instagram", href: "https://www.instagram.com/asiet_iedc", icon: <Instagram className="h-6 w-6" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/iedc-asiet/", icon: <Linkedin className="h-6 w-6" /> },
]
// email: "adishankaraiedc@gmail.com",

// Contact Information
export const contactInfo: ContactInfo = {
  email: "adishankaraiedc@gmail.com",
  phone: "+91 73064 54832",
  address: ["IEDC BootCamp, ASIET,", "Kalady, Kerala - 683574"],
  officeHours: [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "opened for project" },
    { days: "Sunday", hours: "Closed" },
  ],
}

// Home Page Data
export const homeData = {
  hero: {
    title: ["Innovation and", "Entrepreneurship Development Cell"],
    subtitle: "Fostering innovation, creativity, and entrepreneurial mindset among students",
    buttons: [
      { text: "Learn More", href: "/about", variant: "primary" },
      { text: "Our Events", href: "/events", variant: "secondary" },
    ],
  },
  features: [
    {
      icon: <Lightbulb className="h-10 w-10 text-darkblue-600" />,
      title: "Innovation",
      description: "Fostering creative thinking and innovative solutions to real-world problems",
    },
    {
      icon: <Users className="h-10 w-10 text-darkblue-600" />,
      title: "Mentorship",
      description: "Connecting students with industry experts and successful entrepreneurs",
    },
    {
      icon: <Calendar className="h-10 w-10 text-darkblue-600" />,
      title: "Events",
      description: "Organizing workshops, hackathons, and bootcamps to develop skills",
    },
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Incubation",
      description: "Supporting student startups with resources, funding, and guidance",
    },
  ],
  upcomingEvents: [
    {
      title: "Startup Bootcamp",
      date: "June 15-17, 2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "A 3-day intensive program to help students develop their startup ideas",
    },
    {
      title: "Tech Hackathon",
      date: "July 8-9, 2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "24-hour coding competition to solve real-world problems using technology",
    },
    {
      title: "Entrepreneurship Summit",
      date: "August 20, 2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual summit featuring keynote speakers, panel discussions, and networking",
    },
  ],
  stats: [
    { number: "50+", label: "Events Organized" },
    { number: "1000+", label: "Students Impacted" },
    { number: "25+", label: "Startups Incubated" },
    { number: "₹10M+", label: "Funding Raised" },
  ],
  cta: {
    title: "Ready to Join IEDC?",
    subtitle: "Become a member and kickstart your entrepreneurial journey",
    buttonText: "Join IEDC",
    buttonLink: "https://iedc.startupmission.in/joinus/", // Replace with actual Google Form link
  },
}

// About Page Data
export const aboutData = {
  hero: {
    title: "About IEDC",
    subtitle:
      "Fostering innovation and entrepreneurship among students through mentorship, resources, and opportunities.",
  },
  mission: {
    icon: <Target className="h-6 w-6 text-blue-600" />,
    title: "Our Mission",
    description:
      "To create a vibrant ecosystem that fosters innovation and entrepreneurship among students by providing them with the necessary resources, mentorship, and opportunities to transform their ideas into successful ventures.",
    points: [
      "Promote entrepreneurial mindset among students",
      "Provide platform for innovative ideas",
      "Connect students with industry experts",
      "Support student startups with resources and funding",
    ],
  },
  vision: {
    icon: <Lightbulb className="h-6 w-6 text-darkblue-600" />,
    title: "Our Vision",
    description:
      "To be the premier hub for student entrepreneurship, recognized for nurturing innovative ideas and producing successful entrepreneurs who contribute to economic growth and social development.",
    points: [
      "Create a culture of innovation and entrepreneurship",
      "Develop a network of student entrepreneurs",
      "Establish partnerships with industry and investors",
      "Build a portfolio of successful student startups",
    ],
  },
  journey: [
    {
      year: "2015",
      title: "Foundation",
      description: "IEDC was established with a vision to promote innovation and entrepreneurship among students.",
    },
    {
      year: "2017",
      title: "First Startup",
      description: "Incubated our first student startup which went on to raise seed funding.",
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Expanded our facilities and launched dedicated incubation space for student startups.",
    },
    {
      year: "2021",
      title: "Recognition",
      description: "Recognized as one of the top college-based entrepreneurship cells in the region.",
    },
    {
      year: "2023",
      title: "Today",
      description: "A thriving community of innovators with over 25 startups incubated and ₹10M+ funding raised.",
    },
  ],
  successStories: [
    {
      name: "TechSolutions",
      description: "AI-powered solutions for small businesses. Raised $500K in seed funding.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2018",
    },
    {
      name: "EcoInnovate",
      description: "Sustainable packaging alternatives. Winner of National Startup Award.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2019",
    },
    {
      name: "HealthTech",
      description: "Healthcare monitoring devices for rural areas. Impacted 10,000+ lives.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2020",
    },
    {
      name: "EduLearn",
      description: "Personalized learning platform for K-12 students. 50,000+ active users.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2021",
    },
    {
      name: "FinTech Solutions",
      description: "Financial inclusion platform for unbanked population. Partnered with 3 banks.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2022",
    },
    {
      name: "AgriTech",
      description: "Smart farming solutions for small farmers. Deployed in 100+ farms.",
      image: "/placeholder.svg?height=300&width=300",
      year: "2023",
    },
  ],
  team: [
    {
      name: "Dr. Jane Smith",
      role: "Faculty Coordinator",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Prof. John Doe",
      role: "Technical Advisor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Robert Johnson",
      role: "Industry Liaison",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Prof. Sarah Williams",
      role: "Entrepreneurship Mentor",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  achievements: [
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Best College IEDC",
      description: "Recognized as the Best College IEDC by the State Startup Mission in 2022",
    },
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Innovation Excellence",
      description: "Awarded for Innovation Excellence by the Ministry of Education in 2021",
    },
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Startup Ecosystem Builder",
      description: "Recognized as a key Startup Ecosystem Builder by Industry Association in 2023",
    },
  ],
}

// Excom Page Data
export const excomData = {
  hero: {
    title: "Executive Committee",
    subtitle: "Meet the dedicated team leading IEDC's initiatives and activities",
  },
  currentExcom: [
    {
      name: "John Doe",
      position: "Chairperson",
      image: "/placeholder.svg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        email: "john@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "Vice Chairperson",
      image: "/placeholder.svg?height=300&width=300",
      department: "Electronics",
      year: "Final Year",
      social: {
        email: "jane@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Johnson",
      position: "Secretary",
      image: "/placeholder.svg?height=300&width=300",
      department: "Mechanical",
      year: "Pre-Final Year",
      social: {
        email: "michael@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Emily Brown",
      position: "Treasurer",
      image: "/placeholder.svg?height=300&width=300",
      department: "Electrical",
      year: "Pre-Final Year",
      social: {
        email: "emily@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "David Wilson",
      position: "Technical Lead",
      image: "/placeholder.svg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        email: "david@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Sarah Lee",
      position: "Marketing Lead",
      image: "/placeholder.svg?height=300&width=300",
      department: "Business Administration",
      year: "Pre-Final Year",
      social: {
        email: "sarah@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Robert Chen",
      position: "Design Lead",
      image: "/placeholder.svg?height=300&width=300",
      department: "Design",
      year: "Final Year",
      social: {
        email: "robert@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Lisa Wang",
      position: "Content Lead",
      image: "/placeholder.svg?height=300&width=300",
      department: "Media Studies",
      year: "Pre-Final Year",
      social: {
        email: "lisa@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "James Miller",
      position: "Event Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      department: "Event Management",
      year: "Final Year",
      social: {
        email: "james@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Olivia Garcia",
      position: "Outreach Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      department: "Public Relations",
      year: "Pre-Final Year",
      social: {
        email: "olivia@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Daniel Martinez",
      position: "Innovation Lead",
      image: "/placeholder.svg?height=300&width=300",
      department: "Mechanical",
      year: "Final Year",
      social: {
        email: "daniel@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Sophia Rodriguez",
      position: "Startup Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      department: "Business Administration",
      year: "Final Year",
      social: {
        email: "sophia@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "William Taylor",
      position: "Technical Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Computer Science",
      year: "Pre-Final Year",
      social: {
        email: "william@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Ava Thomas",
      position: "Design Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Design",
      year: "Pre-Final Year",
      social: {
        email: "ava@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Ethan White",
      position: "Marketing Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Marketing",
      year: "Pre-Final Year",
      social: {
        email: "ethan@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Isabella Harris",
      position: "Content Creator",
      image: "/placeholder.svg?height=300&width=300",
      department: "Media Studies",
      year: "Pre-Final Year",
      social: {
        email: "isabella@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Mason Clark",
      position: "Event Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Event Management",
      year: "Pre-Final Year",
      social: {
        email: "mason@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Charlotte Lewis",
      position: "Outreach Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Public Relations",
      year: "Pre-Final Year",
      social: {
        email: "charlotte@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Liam Walker",
      position: "Innovation Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Mechanical",
      year: "Pre-Final Year",
      social: {
        email: "liam@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Amelia Hall",
      position: "Startup Member",
      image: "/placeholder.svg?height=300&width=300",
      department: "Business Administration",
      year: "Pre-Final Year",
      social: {
        email: "amelia@example.com",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ],
  previousExcom: {
    "2022-2023": [
      {
        name: "Alex Johnson",
        position: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Emma Williams",
        position: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electronics",
      },
      {
        name: "Noah Brown",
        position: "Secretary",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Olivia Davis",
        position: "Treasurer",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electrical",
      },
      {
        name: "William Miller",
        position: "Technical Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Sophia Wilson",
        position: "Marketing Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Ethan Taylor",
        position: "Design Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Ava Martinez",
        position: "Content Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Jacob Anderson",
        position: "Event Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Mia Thomas",
        position: "Outreach Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Daniel White",
        position: "Innovation Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Emily Harris",
        position: "Startup Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Matthew Clark",
        position: "Technical Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Abigail Lewis",
        position: "Design Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Christopher Walker",
        position: "Marketing Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Marketing",
      },
      {
        name: "Madison Hall",
        position: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Andrew Young",
        position: "Event Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Elizabeth King",
        position: "Outreach Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Joshua Wright",
        position: "Innovation Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Samantha Lopez",
        position: "Startup Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
    ],
    "2021-2022": [
      {
        name: "James Anderson",
        position: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Charlotte Thomas",
        position: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electronics",
      },
      {
        name: "Benjamin Jackson",
        position: "Secretary",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Mia White",
        position: "Treasurer",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electrical",
      },
      {
        name: "Elijah Harris",
        position: "Technical Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Abigail Martin",
        position: "Marketing Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Alexander Thompson",
        position: "Design Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Sofia Garcia",
        position: "Content Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Henry Robinson",
        position: "Event Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Scarlett Lewis",
        position: "Outreach Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Sebastian Clark",
        position: "Innovation Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Lily Walker",
        position: "Startup Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Jack Hall",
        position: "Technical Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Chloe Young",
        position: "Design Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Owen King",
        position: "Marketing Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Marketing",
      },
      {
        name: "Zoe Wright",
        position: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Gabriel Lopez",
        position: "Event Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Penelope Scott",
        position: "Outreach Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Leo Torres",
        position: "Innovation Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Nora Hill",
        position: "Startup Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
    ],
    "2020-2021": [
      {
        name: "Lucas Thompson",
        position: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Harper Garcia",
        position: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electronics",
      },
      {
        name: "Ethan Martinez",
        position: "Secretary",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Evelyn Robinson",
        position: "Treasurer",
        image: "/placeholder.svg?height=300&width=300",
        department: "Electrical",
      },
      {
        name: "Aiden Clark",
        position: "Technical Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Scarlett Lewis",
        position: "Marketing Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Logan Walker",
        position: "Design Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Aria Hall",
        position: "Content Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Carter Young",
        position: "Event Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Layla King",
        position: "Outreach Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Grayson Wright",
        position: "Innovation Lead",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Aubrey Lopez",
        position: "Startup Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
      {
        name: "Julian Scott",
        position: "Technical Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Stella Torres",
        position: "Design Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Design",
      },
      {
        name: "Isaac Hill",
        position: "Marketing Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Marketing",
      },
      {
        name: "Ellie Adams",
        position: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        department: "Media Studies",
      },
      {
        name: "Hudson Nelson",
        position: "Event Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Event Management",
      },
      {
        name: "Violet Baker",
        position: "Outreach Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Public Relations",
      },
      {
        name: "Lincoln Rivera",
        position: "Innovation Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Willow Morgan",
        position: "Startup Member",
        image: "/placeholder.svg?height=300&width=300",
        department: "Business Administration",
      },
    ],
  },
  facultyAdvisors: [
    {
      name: "Dr. Jane Smith",
      position: "Faculty Coordinator",
      department: "Computer Science",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Smith has over 15 years of experience in technology entrepreneurship and has mentored numerous successful startups.",
    },
    {
      name: "Prof. John Doe",
      position: "Technical Advisor",
      department: "Electronics",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Prof. Doe specializes in product development and has helped students convert their ideas into viable products.",
    },
    {
      name: "Dr. Robert Johnson",
      position: "Industry Liaison",
      department: "Business Administration",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Johnson brings industry connections and expertise in securing funding for early-stage startups.",
    },
  ],
}

// Events Page Data
export const eventsData = {
  hero: {
    title: "Events & Activities",
    subtitle: "Discover workshops, competitions, and networking opportunities to enhance your entrepreneurial journey",
  },
  currentEvents: [
    {
      id: 1,
      title: "Startup Bootcamp",
      date: "June 15-17, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A 3-day intensive program to help students develop their startup ideas. Learn from industry experts, work with mentors, and pitch your ideas to potential investors.",
      category: "Workshop",
      registrationLink: "#",
    },
    {
      id: 2,
      title: "Tech Hackathon",
      date: "July 8-9, 2023",
      time: "10:00 AM onwards",
      location: "Computer Science Block",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "24-hour coding competition to solve real-world problems using technology. Form teams, brainstorm ideas, and build working prototypes. Exciting prizes to be won!",
      category: "Competition",
      registrationLink: "#",
    },
    {
      id: 3,
      title: "Entrepreneurship Summit",
      date: "August 20, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Annual summit featuring keynote speakers, panel discussions, and networking opportunities. Connect with successful entrepreneurs, investors, and industry leaders.",
      category: "Conference",
      registrationLink: "#",
    },
  ],
  previousEvents: [
    {
      id: 4,
      title: "Ideathon 2023",
      date: "March 12, 2023",
      location: "Main Auditorium",
      image: "/placeholder.svg?height=400&width=600",
      description: "A day-long event where students pitched their innovative ideas to a panel of judges.",
      category: "Competition",
    },
    {
      id: 5,
      title: "Design Thinking Workshop",
      date: "February 25, 2023",
      location: "Seminar Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "A hands-on workshop on design thinking methodology for problem-solving.",
      category: "Workshop",
    },
    {
      id: 6,
      title: "Investor Connect",
      date: "January 15, 2023",
      location: "Conference Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "An opportunity for student startups to connect with potential investors.",
      category: "Networking",
    },
    {
      id: 7,
      title: "Product Development Masterclass",
      date: "December 10, 2022",
      location: "Seminar Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "A masterclass on product development lifecycle from ideation to launch.",
      category: "Workshop",
    },
    {
      id: 8,
      title: "Startup Showcase",
      date: "November 20, 2022",
      location: "Exhibition Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "An exhibition of student startups showcasing their products and services.",
      category: "Exhibition",
    },
    {
      id: 9,
      title: "Marketing for Startups",
      date: "October 15, 2022",
      location: "Seminar Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "A workshop on digital marketing strategies for early-stage startups.",
      category: "Workshop",
    },
    {
      id: 10,
      title: "Pitch Perfect",
      date: "September 25, 2022",
      location: "Main Auditorium",
      image: "/placeholder.svg?height=400&width=600",
      description: "A competition where students pitched their business ideas in 3 minutes.",
      category: "Competition",
    },
    {
      id: 11,
      title: "Entrepreneurship Bootcamp",
      date: "August 10-12, 2022",
      location: "Main Campus",
      image: "/placeholder.svg?height=400&width=600",
      description: "A 3-day bootcamp on entrepreneurship fundamentals and business model canvas.",
      category: "Workshop",
    },
    {
      id: 12,
      title: "Innovation Challenge",
      date: "July 5, 2022",
      location: "Main Auditorium",
      image: "/placeholder.svg?height=400&width=600",
      description: "A challenge to solve industry-specific problems using innovative solutions.",
      category: "Competition",
    },
  ],
  categories: ["All", "Workshop", "Competition", "Conference", "Networking", "Exhibition"],
}

// Gallery Page Data
export const galleryData = {
  hero: {
    title: "Gallery",
    subtitle: "Explore moments from our events, workshops, and activities",
  },
  categories: ["All", "Events", "Workshops", "Competitions", "Exhibitions", "Field Trips"],
  images: [
    {
      id: 1,
      title: "Startup Bootcamp 2023",
      category: "Events",
      date: "June 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Hackathon Winners",
      category: "Competitions",
      date: "July 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Entrepreneurship Summit",
      category: "Events",
      date: "August 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Workshop on Design Thinking",
      category: "Workshops",
      date: "May 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Investor Pitch Day",
      category: "Events",
      date: "April 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Product Showcase",
      category: "Exhibitions",
      date: "March 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Ideathon 2023",
      category: "Competitions",
      date: "February 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Networking Session",
      category: "Events",
      date: "January 2023",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Innovation Challenge",
      category: "Competitions",
      date: "December 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 10,
      title: "Startup Weekend",
      category: "Events",
      date: "November 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 11,
      title: "Marketing Workshop",
      category: "Workshops",
      date: "October 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 12,
      title: "Pitch Competition",
      category: "Competitions",
      date: "September 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 13,
      title: "Entrepreneurship Bootcamp",
      category: "Workshops",
      date: "August 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 14,
      title: "Industry Visit",
      category: "Field Trips",
      date: "July 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 15,
      title: "Startup Expo",
      category: "Exhibitions",
      date: "June 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 16,
      title: "Mentor Connect",
      category: "Events",
      date: "May 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 17,
      title: "Product Development Workshop",
      category: "Workshops",
      date: "April 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 18,
      title: "Innovation Showcase",
      category: "Exhibitions",
      date: "March 2022",
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
}

// Contact Page Data
export const contactData = {
  hero: {
    title: "Contact Us",
    subtitle: "Have questions or want to get involved? Reach out to us!",
  },
  contactInfo: {
    email: "adishankaraiedc@gmail.com",
    phone: "+91 73064 54832",
    address: ["IEDC BootCamp, ASIET,", "Kalady, Kerala - 683574"],
  },
  officeHours: [
    { days: "Monday - Friday", hours: "9:00 AM - 4:00 PM" },
    { days: "Saturday", hours: "open for student project development" },
    { days: "Sunday", hours: "Closed" },
  ],
  faqs: [
    {
      question: "How can I join IEDC?",
      answer:
        "Students can join IEDC by filling out the membership form available at our office or online through our website. Membership is open to all students of the college.",
    },
    {
      question: "What kind of events does IEDC organize?",
      answer:
        "IEDC organizes a variety of events including workshops, hackathons, bootcamps, ideathons, startup showcases, and networking sessions with industry experts and investors.",
    },
    {
      question: "Can I get funding for my startup through IEDC?",
      answer:
        "IEDC helps student startups connect with potential investors and funding agencies. We also provide guidance on applying for government grants and other funding opportunities.",
    },
    {
      question: "Does IEDC provide mentorship for startups?",
      answer:
        "Yes, IEDC has a network of mentors from industry and academia who provide guidance to student entrepreneurs on various aspects of starting and running a business.",
    },
    {
      question: "How can I volunteer for IEDC activities?",
      answer:
        "Students interested in volunteering can reach out to the IEDC office or contact any of the executive committee members. We're always looking for enthusiastic volunteers to help with our events and activities.",
    },
  ],
  formSubjects: ["General Inquiry", "Event Participation", "Startup Support", "Mentorship", "Collaboration", "Other"],
  contactForm: {
    success: {
      title: "Message Sent Successfully!",
      message: "Thank you for reaching out. We'll get back to you as soon as possible.",
      icon: <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />,
    },
    fields: [
      {
        id: "name",
        label: "Your Name",
        type: "text",
        placeholder: "John Doe",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@example.com",
        required: true,
      },
      {
        id: "subject",
        label: "Subject",
        type: "select",
        required: true,
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Your message here...",
        required: true,
        rows: 5,
      },
    ],
    submitButton: {
      text: "Send Message",
      icon: <Send className="h-4 w-4" />,
      loadingText: "Sending...",
    },
  },
  socialMedia: {
    title: "Connect With Us",
    subtitle: "Follow us on social media for updates and announcements",
    links: [
      { 
        name: "Facebook", 
        href: "https://www.facebook.com/profile.php?id=100090497731078&mibextid=rS40aB7S9Ucbxw6v",
        icon: <Facebook className="h-8 w-8 hover:text-blue-600 transition-colors" />
      },
      { 
        name: "Youtube", 
        href: "https://youtube.com/@asiiedc?si=AwrDJC7qqMPRFrpP",
        icon: <Youtube className="h-8 w-8 hover:text-red-600 transition-colors" />
      },
      { 
        name: "Instagram", 
        href: "https://www.instagram.com/asiet_iedc",
        icon: <Instagram className="h-8 w-8 hover:text-pink-600 transition-colors" />
      },
      { 
        name: "LinkedIn", 
        href: "https://www.linkedin.com/company/iedc-asiet/",
        icon: <Linkedin className="h-8 w-8 hover:text-blue-700 transition-colors" />
      }
    ]
  },
  mapSection: {
    title: "Find Us",
    subtitle: "Visit our office to learn more about our programs and initiatives",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3163114677605!2d76.42670313444827!3d10.177936142501386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEwJzQwLjYiTiA3NsKwMjUnNDUuNCJF!5e0!3m2!1sen!2sin!4v1709960012345!5m2!1sen!2sin"
        width="3000"
        height="1100.6"
        style={{
          border: "none",
          width: '100%',
          height: '100%',
          borderRadius: "0.75rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          maxWidth: "3000.4px",
          maxHeight: "1100.6px"
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ASIET IEDC Location"
      ></iframe>
    ),
    mapLink: "https://maps.google.com/maps?q=10.177936104149945,76.42928813995687",
    directions: {
      title: "Getting Here",
      items: [
        "Located in Adi Shankara Institute of Engineering and Technology, Kalady",
        "15 minutes from Cochin International Airport",
        "5 minutes from Kalady town center"
      ]
    }
  },
}

// Footer Data
export const footerData = {
  description:
    "Innovation and Entrepreneurship Development Cell - Fostering innovation and entrepreneurship among students.",
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Executive Committee", href: "/excom" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ],
  contactInfo: {
    email: "adishankaraiedc@gmail.com",
    phone: "+91 73064 54832",
    address: ["IEDC BootCamp, ASIET,", "Kalady, Kerala - 683574"],
  },
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100090497731078&mibextid=rS40aB7S9Ucbxw6v", icon: <Facebook className="h-6 w-6" /> },
    { name: "Youtube", href: "https://youtube.com/@asiiedc?si=AwrDJC7qqMPRFrpP", icon: <Youtube className="h-6 w-6" /> },
    { name: "Instagram", href: "https://www.instagram.com/asiet_iedc", icon: <Instagram className="h-6 w-6" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/iedc-asiet/", icon: <Linkedin className="h-6 w-6" /> },
  ],
  copyright: {
    text: "© {year} IEDC. All rights reserved.",
    year: new Date().getFullYear(),
  },
}

// UI Elements and Common Components Data
export const uiData = {
  buttons: {
    primary: {
      className: "bg-blue-600 text-white hover:bg-blue-700",
    },
    secondary: {
      className: "bg-white text-blue-700 hover:bg-blue-50",
    },
    outline: {
      className: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    },
  },
  icons: {
    social: {
      facebook: <Facebook />,
      Youtube: <Youtube />,
      instagram: <Instagram />,
      linkedin: <Linkedin />,
    },
    features: {
      innovation: <Lightbulb />,
      mentorship: <Users />,
      events: <Calendar />,
      incubation: <Award />,
    },
    contact: {
      email: <Mail />,
      phone: <Phone />,
      address: <MapPin />,
    },
    actions: {
      arrowRight: <ArrowRight />,
      send: <Send />,
      check: <CheckCircle />,
    },
  },
  colors: {
    primary: "#007EA7", // Blue
    secondary: "#003459", // Dark Blue
    accent: "#00A8E8", // Light Blue
    dark: "#00171F", // Nearly Black
    light: "#FFFFFF", // White
    success: "#10B981", // Green
    error: "#EF4444", // Red
    warning: "#F59E0B", // Yellow
  },
}
