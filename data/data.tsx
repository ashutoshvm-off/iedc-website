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
    linkedin?: string
    instagram?: string
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
    background: {
      image: "/images/homelogo.png", // Changed from placeholder.svg to homelogo.png
      overlay: "bg-black/60", // Slightly darker overlay for better text visibility
      className: "bg-cover bg-center bg-fixed bg-no-repeat min-h-screen" // Added bg-fixed for parallax effect
    }
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
      title: "Excom Call",
      date: "To Be Announced",
      image: "/images/excecom.png?height=10&width=600",
      description: "Join us for our upcoming Excom call where you can participate to be a executive member of IEDC ASIET.",
    },
  ],
  stats: [
    { number: "50+", label: "Events Organized" },
    { number: "1000+", label: "Students Impacted" },
    { number: "33+", label: "Startups Incubated" },
    { number: "₹10L+", label: "Funding Raised" },
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
      description: "IEDC was established at ASIET with a vision to promote innovation and entrepreneurship among students.",
    },
    {
      year: "2017",
      title: "B-HUB Inauguration",
      description: "Adi Shankara Institute of Engineering and Technology inaugurated the B-HUB, a dedicated space for startups.",
    },
    {
      year: "2019",
      title: "SIET Fab Lab in Top 3 in Kerala",
      description: "KSIDC approves Business Incubation Centre. Produced marketable products, with state recognition for excellence.",
    },
    {
      year: "2020",
      title: "MSME Approval",
      description: "MSME approved incubation center at campus.",
    },
    {
      year: "2024",
      title: "KSUM Approval for Co-Working Space",
      description: "KSUM approval for co-working space; over 25 products commercialized. Recognition of coordinators by EDII, KSUM, and Atal Innovation Mission.",
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
      name: "Asst Prof. P V Rajaraman",
      role: "Chief Technology Officer, ASIET",
      image: "/images/About/pvrajaraman.png",
    },
    {
      name: "Dr. Eldose K K",
      role: "Cheif Coordinator of IEDC and TBI",
      image: "/images/About/eldhosekk.png?height=275&width=300",
    },
    {
      name: "Asst Prof. Eldhose P Sim",
      role: "IEDC Nodal Officer",
      image: "/images/About/eldhosepsim.png",
    },
    {
      name: "Dr. Sneha Prakash",
      role: "IEDC Nodal Officer",
      image: "/images/About/drsnehaprakash.png",
    },
  ],
  achievements: [
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Best IEDC in State",
      description: "Recognized as Best IEDC in the state and received Entrepreneurship Enabler Award",
    },
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "Best Performance Award",
      description: "Received Best Performance Award from Kerala Startup Mission in 2020",
    },
    {
      icon: <Award className="h-10 w-10 text-darkblue-600" />,
      title: "KSUM approval for co-working space; over 25 products commercialized",
      description: "Recognition of coordinators by EDII, KSUM, and Atal Innovation Mission in 2024",
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
      name: "Arjun Bittaj",
      position: "IEDC Lead",
      image: "/images/excom/arjunbittaj.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/arjun-bittaj-b16001251/",
        instagram: "https://www.instagram.com/arjun_bittaj"
      },
    },
    {
      name: "Aparna Prasad",
      position: "IEDC Lead",
      image: "/images/excom/aparnaprasad.jpg?height=300&width=300",
      department: "Electronics",
      year: "Final Year",
      social: {
        linkedin: "#",
        instagram: "https://www.instagram.com/aparna_prasad___/"
      },
    },
    {
      name: "Luthfiya Kamal",
      position: "Event Lead and IPR Coordinator",
      image: "/images/excom/luthfiakamal.jpg?height=300&width=300",
      department: "Biomedical",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/luthfiya/",
        instagram: "https://www.instagram.com/l.u.t.h.h/"
      },
    },
    {
      name: "Ajin P D",
      position: "Event Lead and IPR Coordinator",
      image: "/images/excom/ajinpd.jpg?height=300&width=300",
      department: "Computer Science (AI)",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/ajin-p-d-94b37a212/",
        instagram: "https://www.instagram.com/ajin_p_d/"
      },
    },
    {
      name: "Ashutosh V M",
      position: "Technical Lead",
      image: "/images/excom/ashutoshvm.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Pre-Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/ashutoshvm/",
        instagram: "https://www.instagram.com/the__.anonymous_/"
      },
    },
    {
      name: "Sreeraj S",
      position: "Technical Lead",
      image: "/images/excom/sreerajs.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/sreeraj-s-8926b1226/",
        instagram: "https://www.instagram.com/_penguin_bongo_/"
      },
    },
    {
      name: "Shoun Augustine",
      position: "Technical Lead",
      image: "/images/excom/shouns.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/shoun-a-294966225/",
        instagram: "#"
      },
    },
    {
      name: "Malavika Muraleedharan",
      position: "Women Entrepreneurship Lead",
      image: "/images/excom/malavika.jpg?height=300&width=300",
      department: "Computer Science(AI)",
      year: "Pre-Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/malavika-muraleedharan-b6807b2bb/",
        instagram: "https://www.instagram.com/_malavi.ka__/"
      },
    },
    {
      name: "Nimmy Jolly",
      position: "Women Entrepreneurship Lead",
      image: "/images/excom/nimmikjolly.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/nimmy-k-jolly-06351b226/",
        instagram: "https://www.instagram.com/nimmy_jolly/"
      },
    },
    {
      name: "Arjun S",
      position: "Community Lead",
      image: "/images/excom/arjuns.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/arjun-s-622062230/",
        instagram: "https://www.instagram.com/arjun._2002/"
      },
    },
    {
      name: "Lakshmi Nandana R",
      position: "Community Lead",
      image: "/images/excom/lakshminandana.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Pre-Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/lakshmi-nandana-r-504596231/",
        instagram: "https://www.instagram.com/lakshmeeey/"
      },
    },
    {
      name: "Ameesh Muhammed ",
      position: "Creative and Innovative Lead",
      image: "/images/excom/ameesh.jpg?height=300&width=300",
      department: "Computer Science(AI)",
      year: "Pre-Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/ameeshm/",
        instagram: "https://www.instagram.com/4m335h/"
      },
    },
    {
      name: "Adarsh Ajith",
      position: "Creative and Innovative Lead",
      image: "/images/excom/adarshajith.jpg?height=300&width=300",
      department: "Computer Science(AI)",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/adarsh-ajith/",
        instagram: "https://www.instagram.com/shubudian?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      },
    },
    {
      name: "Nanditha Nambyar",
      position: "Finance Lead",
      image: "/images/excom/nanditanambyar.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/nanditha-nambiar-aa66a124b/",
        instagram: "https://www.instagram.com/feat.nanditha/"
      },
    },
    {
      name: "Rohit James",
      position: "Finance Lead",
      image: "/images/excom/rohit.jpg?height=300&width=300",
      department: "Mechanical",
      year: "Pre-Final Year",
      social: {
        linkedin: "#",
        instagram: "https://www.instagram.com/r_o_c_k_u___/"
      },
    },
    {
      name: "Nandana Silju",
      position: "Finance Lead",
      image: "/images/excom/nandana.jpg?height=300&width=300",
      department: "Computer Science",
      year: "2nd Year",
      social: {
        linkedin: "https://www.linkedin.com/in/nandana-silju-3040a3287/",
        instagram: "https://www.instagram.com/nandana_silju/"
      },
    },
    {
      name: "Rithwik Vallabhan",
      position: "Quality and operations Lead",
      image: "/images/excom/rithwik.jpg?height=300&width=300",
      department: "Computer Science",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/rithwik-vallabhan-tv-b01232220/",
        instagram: "https://www.instagram.com/rithwik.vallabhan/"
      },
    },
    {
      name: "Aleena Nelson",
      position: "Quality and operations Lead",
      image: "/images/excom/aleenanelson.jpg?height=300&width=300",
      department: "Biomedical",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/aleenanelson/",
        instagram: "https://www.instagram.com/december_solitude/"
      },
    },
    {
      name: "Melvin Mathew Jacob",
      position: "Branding and Marketing Lead",
      image: "/images/excom/melvin.jpg?height=300&width=300",
      department: "Biomedical",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/melvinmathewjacob/",
        instagram: "#"
      },
    },
    {
      name: "Sanchu M",
      position: "Branding and Marketing Lead",
      image: "/images/excom/sanchum.jpg?height=300&width=300",
      department: "EEE",
      year: "Final Year",
      social: {
        linkedin: "https://www.linkedin.com/in/sanchu-m-6b7a231bb/",
        instagram: "https://www.instagram.com/sanchu.me/"
      },
    },
  ],
  previousExcom: {
    "2023-2024": [
      {
        name: "Nowarlal",
        position: "IEDC Lead",
        image: "/images/excom23-24/nowar.jpg?height=300&width=300",
        department: "Mechanical",
      },
      {
        name: "Hari Krishnan",
        position: "Asst IEDC Lead",
        image: "/images/excom23-24/harikrishnan.jpg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Sanchu M",
        position: "Creative and Innovative Lead",
        image: "/images/excom23-24/sanchum.jpg?height=300&width=300",
        department: "EEE",
      },
      {
        name: "Aaron P Laju",
        position: "Community Lead",
        image: "/images/excom23-24/aaron.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
      {
        name: "Arjun Bittaj",
        position: "Asst Community Lead",
        image: "/images/excom23-24/arjunbittaj.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
      {
        name: "Lijo K Simon",
        position: "Asst Community Lead",
        image: "/images/excom23-24/lijoksimon.jpg?height=300&width=300",
        department: "RA",
      },
      {
        name: "Ajin P D",
        position: "Asst Creative and Innovative Lead",
        image: "/images/excom23-24/ajinpd.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
      {
        name: "Lakshmi Nandana R",
        position: "Asst Creative and Innovative Lead",
        image: "/images/excom23-24/lakshminandana.jpg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Alan S Puthussery",
        position: "Branding and Marketing Lead",
        image: "/images/excom23-24/alansputhu.jpg?height=300&width=300",
        department: "RA",
      },
      {
        name: "Rahul James",
        position: "Event Lead and IPR Coordinator",
        image: "/images/excom23-24/rahuljames.jpg?height=300&width=300",
        department: "Civil Engineering",
      },
      {
        name: "Melvin Mathew Jacob",
        position: "Asst Event Lead and IPR Coordinator",
        image: "/images/excom23-24/melvin.jpg?height=300&width=300",
        department: "Biomedical",
      },
      {
        name: "Nandana",
        position: "Asst Event Lead and IPR Coordinator",
        image: "/images/excom23-24/nandana.jpg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Nanditha Nambyar",
        position: "Women Entrepreneurship Lead",
        image: "/images/excom23-24/nanditanambyar.jpg?height=300&width=300",
        department: "Computer Science",
      },
      {
        name: "Malavika Muraleedharan",
        position: "Asst Women Entrepreneurship Lead",
        image: "/images/excom23-24/malavika.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
      {
        name: "Benchacko Chittilappilly",
        position: "Finance Lead",
        image: "/images/excom23-24/benchacko.jpg?height=300&width=300",
        department: "EEE",
      },
      {
        name: "Aparna Prasad",
        position: "Assistant Finance Lead",
        image: "/images/excom23-24/aparnaprasad.jpg?height=300&width=300",
        department: "Electronics",
      },
      {
        name: "Noel Mathew",
        position: "Quality and Operations Lead",
        image: "/images/excom23-24/noelmathew.jpg?height=300&width=300",
        department: "ECE",
      },
      {
        name: "Adarsh Jomon",
        position: "Assistant Quality and Operations Lead",
        image: "/images/excom23-24/adarshjomon.jpg?height=300&width=300",
        department: "RA",
      },
      {
        name: "Alvin Regin",
        position: "Technology Lead",
        image: "/images/excom23-24/alvinregin.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
      {
        name: "Ardhra K Shaji",
        position: "Assistant Technology Lead",
        image: "/images/excom23-24/ardhrakshaji.jpg?height=300&width=300",
        department: "Computer Science(AI)",
      },
    ],
    "2022-2023": [
      {
        name: "J Jithendra Gopal",
        position: "Cheif Executive Officer",
        image: "/images/excom22-23/jjithendra.jpg?height=300&width=300",
      },
      {
        name: "U Hari Krishnan",
        position: "Cheif Operating Officer",
        image: "/images/excom22-23/uharikrishnan.jpeg?height=300&width=300",
      },
      {
        name: "Nikhil R Bhat",
        position: "Cheif Technical Officer",
        image: "/images/excom22-23/nickilrbhatt.jpeg?height=300&width=300",
      },
      {
        name: "Rahul V R",
        position: "Cheif Marketing Officer",
        image: "/images/excom22-23/rahulvr.jpg?height=300&width=300",
      },
      {
        name: "Dyna Joshy",
        position: "Cheif Creative Officer",
        image: "/images/excom22-23/dynajoshy.jpeg?height=300&width=300",
      },
      {
        name: "Benchacko Chittilappilly",
        position: "Cheif Communication Officer",
        image: "/images/excom22-23/benchacko.jpg?height=300&width=300",
      },
      {
        name: "Alan S Puthussery",
        position: "Cheif Financial Officer",
        image: "/images/excom22-23/alansputhu.jpg?height=300&width=300",
      },
      {
        name: "Bhagya Rajeshkumar Panicker",
        position: "Quality and Operations Co-Lead",
        image: "/images/excom22-23/bhagyarajeshpanicker.jpeg?height=300&width=300",
      },
      {
        name: "Sreeraj Rajeev",
        position: "Quality and Operations Co-Lead",
        image: "/images/excom22-23/sreerajrajeev.jpeg?height=300&width=300",
      },
      {
        name: "Lijo K Simon",
        position: " Technical Co-Lead",
        image: "/images/excom22-23/lijoksimon.jpg?height=300&width=300",
      },
      {
        name: "Nowar Lal",
        position: "Technical Co-Lead",
        image: "/images/excom22-23/nowar.jpg?height=300&width=300",
      },
      {
        name: "Nandana",
        position: "Creative Co-Lead",
        image: "/images/excom22-23/nandana.jpg?height=300&width=300",
      },
      {
        name: "Devika Sankar",
        position: "Creative Co-Lead",
        image: "/images/excom22-23/devikasankar.jpeg?height=300&width=300",
      },
      {
        name: "Harikrishnan S Menon",
        position: "Community Co-Lead",
        image: "/images/excom22-23/harikrishnan.jpg?height=300&width=300",
      },
      {
        name: "Seethal Benny",
        position: "Community Co-Lead",
        image: "/images/excom22-23/seethalbenny.jpeg?height=300&width=300",
      },
      {
        name: "Arjun Mani",
        position: "Finance Co-Lead",
        image: "/images/excom22-23/arjunmani.jpg?height=300&width=300",
      },
      {
        name: "Gayathri S",
        position: "Marketing Co-Lead",
        image: "/images/excom22-23/gayathri.jpg?height=300&width=300",
      },
    ],
    // "2020-2021": [
    //   {
    //     name: "Lucas Thompson",
    //     position: "Chairperson",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Computer Science",
    //   },
    //   {
    //     name: "Harper Garcia",
    //     position: "Vice Chairperson",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Electronics",
    //   },
    //   {
    //     name: "Ethan Martinez",
    //     position: "Secretary",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Mechanical",
    //   },
    //   {
    //     name: "Evelyn Robinson",
    //     position: "Treasurer",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Electrical",
    //   },
    //   {
    //     name: "Aiden Clark",
    //     position: "Technical Lead",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Computer Science",
    //   },
    //   {
    //     name: "Scarlett Lewis",
    //     position: "Marketing Lead",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Business Administration",
    //   },
    //   {
    //     name: "Logan Walker",
    //     position: "Design Lead",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Design",
    //   },
    //   {
    //     name: "Aria Hall",
    //     position: "Content Lead",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Media Studies",
    //   },
    //   {
    //     name: "Carter Young",
    //     position: "Event Coordinator",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Event Management",
    //   },
    //   {
    //     name: "Layla King",
    //     position: "Outreach Coordinator",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Public Relations",
    //   },
    //   {
    //     name: "Grayson Wright",
    //     position: "Innovation Lead",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Mechanical",
    //   },
    //   {
    //     name: "Aubrey Lopez",
    //     position: "Startup Coordinator",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Business Administration",
    //   },
    //   {
    //     name: "Julian Scott",
    //     position: "Technical Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Computer Science",
    //   },
    //   {
    //     name: "Stella Torres",
    //     position: "Design Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Design",
    //   },
    //   {
    //     name: "Isaac Hill",
    //     position: "Marketing Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Marketing",
    //   },
    //   {
    //     name: "Ellie Adams",
    //     position: "Content Creator",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Media Studies",
    //   },
    //   {
    //     name: "Hudson Nelson",
    //     position: "Event Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Event Management",
    //   },
    //   {
    //     name: "Violet Baker",
    //     position: "Outreach Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Public Relations",
    //   },
    //   {
    //     name: "Lincoln Rivera",
    //     position: "Innovation Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Mechanical",
    //   },
    //   {
    //     name: "Willow Morgan",
    //     position: "Startup Member",
    //     image: "/placeholder.svg?height=300&width=300",
    //     department: "Business Administration",
    //   },
    // ],
  },
  facultyAdvisors: [
    {
      name: "Dr. Eldhose K K",
      position: "Professor, HOD & Dean",
      department: "Mechanical Engineering",
      image: "/images/About/eldhosekk.png?height=100&width=300",
      bio: "Dr. Eldhose K K has experience in technology entrepreneurship and has mentored students to successfully work on their projects.",
    },
    {
      name: "Asst Prof. Eldhose P Sim",
      position: "Assistant Professor",
      department: "Computer Science",
      image: "/images/About/eldhosepsim.png?height=300&width=300",
      bio: "Asst Prof. Eldhose P Sim specializes in product development and has helped students convert their ideas into viable products and also brings industry connections and expertise in securing funding for early-stage startups.",
    },
    {
      name: "Dr. Sneha Prakash",
      position: "Professor",
      department: "Computer Science",
      image: "/images/About/drsnehaprakash.png?height=300&width=300",
      bio: "Dr. Sneha Prakash brings industry connections and expertise in securing funding for early-stage startups.",
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
      image: "/images/Gallery/.png?height=600&width=800",
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
    {
      id: 19,
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
