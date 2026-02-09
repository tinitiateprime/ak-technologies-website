// app/page.js
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Globe, Users, Clock, UserCheck, Briefcase, CheckCircle, Star, BookOpen, FileText, ClipboardCheck,  Code2,
  ShoppingCart,
  ShieldCheck,
  Truck,
  HeartPulse,
  Hospital ,
  Plane,
  Factory, UserCircle2,Settings ,Database, Cloud, Brain, BarChart3, Layers, Smartphone, Server, Bug  } from 'lucide-react'


import { useRouter } from 'next/navigation';


const services = [
  {
    title: 'Development Services',
    href: '/it-development',
    image: '/images/it-development-services.jpg',
  },
  {
    title: 'Training program',
    href: '/training/personalized-training',
    image: '/images/services-training.png',
  },
  {
    title: 'Work Experience Program',
    href: '/work-experience-program',
    image: '/images/work-experience-program.jpg',
  },
  {
    title: 'Remote Consulting',
    href: '/remote-consulting',
    image: '/images/Remote-consulting-service.jpg',
  },
]

const programs = [
  {
    title: 'Python AWS Developer Program',
    duration: '3 Months',
    image: '/images/IT-training/Python-AWS-Developer-Program.png',
    href: '/courses/Python-AWS-Developer-Program',
    description: 'Master Python backend, AWS Lambda, API Gateway, and DynamoDB through hands-on projects.',
  },
  {
    title: 'Power BI Developer Program',
    duration: '2 Months',
    image: '/images/IT-training/Power-BI-Developer-Program.png',
    href: '/courses/power-bi-developer-program',
    description: 'Learn powerful BI reporting, data modeling, and dashboard creation using real-world business data.',
  },
  // {
  //   title: 'AWS DevOps Program',
  //   duration: '3 Months',
  //   image: '/images/IT-training/AWS-DevOps-Program.png',
  //   description: 'Gain expertise in CI/CD pipelines, infrastructure as code, containerization, and cloud deployment.',
  // },
    {
    title: 'SQL Database Program',
    duration: '3 Months',
    image: '/images/courses/sql.png',
    description: 'Understand data modeling, querying, and reporting using relational databases and SQL.',
    href: '/courses/sql-language-course',
  },
]


// const itServices = [
//   {
//     title: 'Data Engineering',
//     image: '/images/IT-development/data-engineering.png',
//   },
//   {
//     title: 'App Development',
//     image: '/images/IT-development/app-development.jpg',
//   },
//   {
//     title: 'Web/Backend Development',
//     image: '/images/IT-development/web-backend.png',
//   },
//   {
//     title: 'Testing and Support',
//     image: '/images/IT-development/testing-support.png',
//   },
// ]




const itServices = [
  {
    title: "Cloud Services",
    icon: Cloud,
    image1: "/images/IT-development/cloud.jpg",
    href: "/it-development/cloud-services",
    description:
      "Seamless cloud migration, hosting, and managed services across AWS & Azure, ensuring scalability, security, and cost efficiency.",
    features: ["AWS & Azure expertise", "Scalable Hosting", "Cloud Cost Optimization"],
  },
  {
    title: "AI-Powered Development",
    icon: Brain,
    image1: "/images/IT-development/ai-powered.jpg",
    href: "/it-development/ai-powered-development",
    description:
      "Build intelligent applications with AI/ML models, natural language processing, and automation that deliver smarter business outcomes.",
    features: ["Custom AI Models", "Agentic & Chatbots","Azure AI & Aws AI Services","Predictive Analytics"],
  },
  {
    title: "Reporting Services",
    icon: BarChart3,
    image1: "/images/IT-development/reporting.jpg",
    href: "/it-development/reporting",
    description:
      "Transform raw data into actionable insights with BI dashboards, interactive reports, and real-time analytics tailored to business needs.",
    features: ["Power BI, Tableau", "Real-time Dashboards", "Interactive Reports"],
  },
  {
    title: "Full Stack Development",
    icon: Layers,
    image1: "/images/it-development-services.jpg",
    href: "/it-development/full-stack-development",
    description:
      "End-to-end web and application development from frontend to backend, integrating secure APIs, databases, and cloud infrastructure.",
    features: ["React, Next.js, Node.js", "Secure APIs", "Database Integration"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    image1: "/images/IT-development/app-development-1.jpg",
    href: "/it-development/app-development",
    description:
      "Modern mobile & web apps with pixel-perfect UI/UX, scalable architecture, and secure APIs. From MVP to enterprise scale deployments.",
    features: ["React Native", "Flutter", "Android & iOS"],
  },
  {
    title: "Web & Backend Development",
    icon: Server,
    image1: "/images/IT-development/web-backend-1.jpg",
    href: "/it-development/web-backend",
    description:
      "Robust backend systems & dynamic web apps with REST/GraphQL APIs, authentication, and CI/CD pipelines.",
    features: ["Node.js, Django, Spring Boot", "REST & GraphQL APIs", "Role-based Access"],
  },
  {
    title: "Testing & Support",
    icon: Bug,
    image1: "/images/IT-development/testing-support-1.jpg",
    href: "/it-development/testing-support",
    description:
      "Ensure bug-free, stable software with automation, regression testing, and SLA-based support teams.",
    features: ["Selenium & Cypress", "Postman Testing", "24/7 Support"],
  },
  {
  title: "DevOps Services",
  icon: Settings, // you can replace with a suitable Lucide/FA icon
  image1: "/images/IT-development/DevOPs.jpg",
  href: "/it-development/devops",
  description:
    "Accelerate software delivery with automation, CI/CD pipelines, containerization, and reliable cloud-native infrastructure.",
  features: [
    "CI/CD Pipelines",
    "Kubernetes & Docker",
    "Infrastructure as Code",
    "Monitoring & Logging"
  ],
},
{
  title: "Database Services",
  icon: Database,
  image1: "/images/IT-development/database.jpg",
  href: "/it-development/database",
  description:
    "Design, optimize, and manage relational & NoSQL databases with high availability, scalability, and strong security.",
  features: [
    "SQL & NoSQL Databases",
    "Performance Tuning",
    "Backup & Disaster Recovery",
    "Data Migration & Replication"
  ],
},

];




const careerSupport = [
  {
    icon: Briefcase,
    title: 'IT Career Guidance',
    description: 'Personalized guidance from industry experts to align your goals with real-world roles in IT.',
    href:'/it-career-guidance',
  },
  {
    icon: BookOpen,
    title: 'Basics to Advanced Learning',
    description: 'Step-by-step learning paths from foundational concepts to advanced tech stacks and real use cases.',
    href:'/basics-to-advanced-learning'
  },
  {
    icon: Code2,
    title: 'Hands-On Coding Exercises',
    description: 'Daily challenges and practice labs to build strong coding logic and practical development skills.',
      href:'/hands-on-coding-exercises'
  },
  {
    icon: FileText,
    title: 'Live Projects',
    description: 'Build real-world applications with mentorship support to strengthen your portfolio and confidence.',
      href:'/live-projects'
  },
  {
    icon: UserCircle2,
    title: 'Resume Preparation',
    description: 'Get help crafting a standout, recruiter-friendly resume tailored for your desired job roles.',
      href:'/resume-preparation'
  },
  {
    icon: ClipboardCheck,
    title: 'Interview Preparation',
    description: 'Mock interviews, HR tips, and technical assessments to boost your readiness and confidence.',
      href:'/interview-preparation'
  },
]

export default function HomePage() {

   const router = useRouter();


  return (
    <main className="text-gray-800">
    <section className="relative bg-black py-20 sm:py-10 md:py-15  ">
  <div className="max-w-7xl sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text Section */}
    <div className="text-center md:text-left">
      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
        Trusted IT Experts
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
        Transform Your Business with Custom IT Development
      </h1>
      <p className="text-base sm:text-lg text-white mb-6 max-w-xl">
        Scalable full-stack platforms, AI-powered workflows, and real-time data engineering — our team delivers future-ready solutions for startups and global enterprises.
      </p>
    </div>

    {/* Image Section */}
{/* Image Section */}
<div className="relative w-full h-64 p-2 sm:h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-lg">
  <Image
    src="/images/banners/tinitiate.jpg"
    alt="IT Development Solutions"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
    fetchPriority="high"
 
  />
</div>

  </div>
  </section>
    
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
      Development Services
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
      {itServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group relative bg-white border border-gray-200 
                       rounded-b-2xl shadow-md hover:shadow-xl 
                       transition-all duration-500 overflow-hidden"
          >
            {/* Background Image (Clickable) */}
            {/* <a href={service.href} className="block relative h-60 w-full overflow-hidden">
              <Image
                src={service.image1}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </a> */}

            <a href={service.href} className="block relative h-60 w-full overflow-hidden">
  <Image
    src={service.image1}
    alt={service.title}
    fill
    loading="lazy" 
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
    className="object-cover group-hover:scale-110 transition-transform duration-700"
  />
</a>


            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Icon className="w-6 h-6" />
                </div>
                <a
                  href={service.href}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
                >
                  {service.title}
                </a>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              <ul className="text-sm text-gray-700 space-y-1 mb-6">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-blue-500">✔</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

<section id="about" className="py-10 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
      Why Choose AK Technologies?
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: Why Choose AK Technologies */}
      <div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          With <strong>15+ years of hands-on IT experience</strong>, our delivery isn&apos;t just theory—it&apos;s
          real-time execution paired with scalable architecture, secure development practices, and measurable business
          outcomes.
        </p>

        <ul className="space-y-3">
          {[
            "Senior engineers with strong industry experience",
            "Architecture-first approach for scale & performance",
            "Security and best practices built-in",
            "Fast delivery with clear milestones",
            "Reliable post-launch support and optimization",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: IT Development Services */}
      <div>
        <h4 className="text-xl font-bold mb-4 text-gray-900">Development Services</h4>

        <p className="text-gray-700 mb-4 leading-relaxed">
          From scalable backend systems to robust data pipelines, AI-powered applications, and modern web/mobile apps,
          AK Technologies provides full-spectrum development services tailored to today’s business needs.
        </p>

        <ul className="space-y-3">
          {[
            "Custom application development (Web & Mobile)",
            "Data engineering and cloud solutions (AWS & Azure)",
            "API integrations and backend platform development",
            "Automation, AI assistants, and intelligent workflows",
            "Testing, DevOps, deployment, and production support",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


{/* Capabilities / Expertise Section */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
      Driving Business Growth with Reliable IT Services & Innovative Solutions
    </h2>

    <p className="max-w-7xl mx-auto text-lg text-gray-700 text-center mb-12">
      <strong>AK Technologies</strong> brings a wealth of real-world expertise by collaborating closely with clients
      to understand their unique business challenges. We design and deliver customized IT solutions
      that align with organizational goals, enhance efficiency, and create measurable value.
      Our team of seasoned professionals ensures that every project is executed with precision,
      helping businesses thrive in today’s competitive digital landscape.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <div className="relative w-full max-w-md h-80 md:h-[450px]">
 <Image
  src="/images/statistics.jpg"
  alt="AK Technologies Expertise"
  fill
  loading="lazy"
  className="object-contain rounded-xl shadow-md"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

        </div>
      </div>

      <div className="w-full max-w-lg mx-auto">
        {[
          { title: "Web Development", percent: 85 },
          { title: "App Development", percent: 90 },
          { title: "Cloud Services", percent: 80 },
          { title: "AI-Powered Development", percent: 87 },
          { title: "Database Services", percent: 92 },
          { title: "Testing & Support", percent: 95 },
          { title: "DevOps Services", percent: 74 },
          { title: "Reporting & Analytics", percent: 86 },
        ].map((service, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-md font-medium text-gray-900">{service.title}</span>
              <span className="text-sm font-semibold text-gray-700">{service.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${service.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* Industries Section */}
<section
  id="industries"
  className="relative py-16 px-6 overflow-hidden" // removed bg-cover/bg-center
>
  {/* Background as a real Image → now optimized & lazy */}
  <Image
    src="/images/bg-images/6.jpg"
    alt=""                 // decorative
    fill
    loading="lazy"
    sizes="100vw"
    className="object-cover -z-10" // sit behind everything
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="relative max-w-7xl mx-auto z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white tracking-tight">
      🌍 Industries We Serve
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
      {[
        { name: "Technology", icon: Code2 },
        { name: "E-Commerce", icon: ShoppingCart },
        { name: "Insurance", icon: ShieldCheck },
        { name: "Logistics & Shipping", icon: Truck },
        { name: "Hospital / Healthcare", icon: Hospital },
        { name: "Travel", icon: Plane },
        { name: "Education", icon: BookOpen },
        { name: "Manufacturing", icon: Factory },
      ].map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center justify-center group">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
            <Icon className="w-8 h-8" />
          </div>
          <span className="mt-3 text-md font-bold text-white group-hover:text-blue-300">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services
      <section id="services" className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all bg-white"
            >
              <Image
                src={svc.image}
                alt={svc.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl text-center text-gray-800 hover:text-blue-700">{svc.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* Final CTA Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career or Business?</h2>
        <p className="mb-6 text-lg">Join our training programs or consult with us for IT development and cloud solutions tailored for startups and enterprises.</p>
        <Link href="/request-callback" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
          Get Started Today
        </Link>
      </section>
    
    </main>
  )
}