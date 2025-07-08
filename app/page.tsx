"use client"

import { useState, useEffect, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  GraduationCap,
  Award,
  Download,
  ArrowRight,
  Star,
  Moon,
  Sun,
  Menu,
  X,
  Play,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Users,
  Coffee,
  Zap,
  Rocket,
  Globe,
  Database,
  Smartphone,
  Palette,
  Search,
  Send,
  CheckCircle,
  Quote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { submitContactForm } from "./actions"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  // Handle form submission
  const handleFormSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await submitContactForm(formData)
        setFormSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000)
      } catch (error) {
        console.error("Form submission error:", error)
        // Show error message to user
        alert("Failed to send message. Please try again or contact directly via email.")
      }
    })
  }

  // Animated counters
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => ({
        experience: prev.experience < 6 ? prev.experience + 1 : 6,
        projects: prev.projects < 8 ? prev.projects + 2 : 8,
        clients: prev.clients < 5 ? prev.clients + 1 : 5,
        awards: prev.awards < 2 ? prev.awards + 1 : 2,
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/CVV.pdf" // You would add your actual resume file
    link.download = "CVV.pdf"
    link.click()
  }

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 60 },
    { name: "PostgreSQL", level: 80 },
    { name: "Angular", level: 75 },
    { name: "Flutter", level: 70 },
  ]

  const projects = [
    {
      title: "Lwie E-Commerce Platform",
      description: "A platform to swap what you have with what you need, offering a full-stack e-commerce solution.",
      tech: ["Next.js", "Express.js", "Node.js", "PostgreSQL", "Mantine", "Tailwind CSS"],
      github: "https://github.com/johndoe/lwie-ecommerce",
      live: "https://lwie-ecommerce-demo.vercel.app",
      image: "/Screenshot (713).png?height=200&width=300",
      featured: true,
      likes: 0, // Update as needed
      comments: 0, // Update as needed
    },
    {
      title: "Cement Factory Website",
      description: "Website for a cement factory showcasing products and services.",
      tech: ["Next.js", "Tailwind CSS", "Mantine", "Daisy UI"],
      github: "https://github.com/johndoe/cement-factory",
      live: "https://cement-factory-demo.vercel.app",
      image: "/download1.webp?height=200&width=300",
      featured: true,
      likes: 0, // Update as needed
      comments: 0, // Update as needed
    },
    {
      title: "Portfolio for Software Engineering Student",
      description: "A personal portfolio showcasing projects and skills.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/johndoe/portfolio",
      live: "https://portfolio-demo.vercel.app",
      image: "/download 2.webp?height=200&width=300",
      featured: false,
      likes: 0, // Update as needed
      comments: 0, // Update as needed
    },
  ]

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      price: "Starting at 2,500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Flutter.",
      price: "Starting at 3,500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Scalable APIs and database solutions for your applications.",
      price: "Starting at 2,000",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that convert.",
      price: "Starting at 1,500",
    },
  ]

  const testimonials = [
    {
      name: "Emnet Assefa",
      role: "Student",
      content:
        "Seble delivered an exceptional portfolio that exceeded our expectations. Her attention to detail and technical expertise are outstanding.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Fozia Kassa",
      role: "Project Member",
      content:
        "Working with Seble was a pleasure. She understood our requirements perfectly and delivered a scalable solution on time and within budget.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Mickeal",
      role: "Founder, Kachamele Software Solution",
      content:
        "Seble's expertise in both frontend and backend development helped us launch our platform successfully. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for creating maintainable and scalable React applications that can grow with your business.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "/download3.webp?height=200&width=300",
      tags: ["React", "JavaScript", "Best Practices"],
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development in 2025 and beyond.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "/download4.webp?height=200&width=300",
      tags: ["Web Development", "Trends", "Technology"],
    },
    {
      title: "Optimizing Next.js Performance",
      excerpt:
        "Advanced techniques for improving the performance of your Next.js applications and delivering better user experiences.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      image: "/download5.webp?height=200&width=300",
      tags: ["Next.js", "Performance", "Optimization"],
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 to-slate-100"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"} backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seble H/mariam
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "services", "projects", "blog", "testimonials", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-blue-600 font-medium"
                      : darkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {section}
                </button>
              ))}

              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
              <div className="flex flex-col space-y-2 pt-4">
                {["home", "about", "skills", "services", "projects", "blog", "testimonials", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize text-left py-2 px-4 rounded transition-colors ${
                        activeSection === section
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : darkMode
                            ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {section}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-blue-100 shadow-2xl">
            <AvatarImage src="/gurd picture.jpg?height=160&width=160" alt="Seble H/mariam" />
            <AvatarFallback className="text-3xl">SH</AvatarFallback>
          </Avatar>

          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Available for new projects
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, innovative solutions, and
            cutting-edge technologies. Let's build something amazing together! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Play className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{counters.experience}+</div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Months Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{counters.projects}+</div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{counters.clients}+</div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{counters.awards}+</div>
              <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Awards Won</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <Link
              href="https://github.com/seble119"
              className={`transform hover:scale-110 transition-all duration-200 ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              href="https://linkedin.com/in/seble-haile"
              className={`transform hover:scale-110 transition-all duration-200 ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
            >
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link
              href="mailto:seble11994@gmail.com"
              className={`transform hover:scale-110 transition-all duration-200 ${darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
            >
              <Mail className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Get to know more about my journey, passion, and what drives me as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
              <Image
                src="/n1.jpg?height=500&width=500"
                alt="About me"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-4">Hello! I'm Seble H/mariam 👋</h3>
              <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {
                  "I'm a passionate Full Stack Developer dedicated to creating digital solutions that make a difference. My"
                }
                journey began with a curiosity about how websites work, and it has evolved into a deep love for crafting
                exceptional user experiences.
              </p>
              <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {"I specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms. I"}
                believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and
                best practices.
              </p>
              <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {
                  "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,"
                }
                or sharing my knowledge through blog posts and mentoring other developers.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">6 Months</div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">8+ Projects</div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Completed</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">5+ Clients</div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Satisfied</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Software Engineering</div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Education</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button onClick={() => scrollToSection("projects")} className="bg-blue-600 hover:bg-blue-700">
                  <Rocket className="mr-2 h-4 w-4" />
                  View My Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")}>
                  <Coffee className="mr-2 h-4 w-4" />
                  {"Let's Chat"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-purple-50"}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {"Here are the technologies and tools I work with to bring ideas to life."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <Card
                className={`p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
              >
                <CardHeader className="text-center pb-4">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Angular"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
              >
                <CardHeader className="text-center pb-4">
                  <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "REST APIs", "Express"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-purple-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
              >
                <CardHeader className="text-center pb-4">
                  <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Tools & Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Vercel", "Figma"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-green-100 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              I offer a comprehensive range of development services to help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
                  <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                  <Button className="mt-4 w-full bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-slate-50 to-slate-100"}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className={`max-w-2xl mx-auto mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Here are some of my recent projects that showcase my skills and experience.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/seble119", "_blank")}
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Latest Blog Posts</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Sharing my thoughts, experiences, and insights about web development and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{post.readTime}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{post.date}</div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full justify-between group">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read More
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-purple-50"}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Clients Say</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {"Don't just take my word for it. Here's what my clients have to say about working with me."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-blue-600 mb-4" />

                  <p className={`mb-6 italic ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{testimonial.content}</p>

                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {"I'm always open to discussing new opportunities, interesting projects, or just having a chat about"}
              {"technology. Let's create something amazing together!"}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <Link href="mailto:seble11994@gmail.com" className="text-blue-600 hover:underline">
                      seble11994@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Phone</p>
                    <Link href="tel:+251926544558" className="text-green-600 hover:underline">
                      +251926544558
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Location</p>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Addis Ababa, Kotebe</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4 text-lg">Follow Me</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/seble119"
                    target="_blank"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 transform hover:scale-110"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/seble-haile"
                    target="_blank"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-all duration-200 transform hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card className={`p-6 ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Newsletter
                  </CardTitle>
                  <CardDescription>Stay updated with my latest projects and blog posts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input placeholder="Enter your email" type="email" />
                    <Button>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className={`p-6 ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {"Thank you for reaching out. I'll get back to you within 24 hours!"}
                    </p>
                  </div>
                ) : (
                  <form action={handleFormSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input type="text" name="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input type="text" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" name="email" placeholder="john@example.com" required />
                    </div>

                    <div className="mb-4">
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input type="text" name="subject" placeholder="Project Discussion" required />
                    </div>

                    <div className="mb-6">
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        rows={4}
                        name="message"
                        placeholder={"Tell me about your project or idea..."}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 ${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-gray-900 text-white"}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Seble H/mariam
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating amazing digital experiences.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/seble119"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/seble-haile"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:seble11994@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Blog", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                {["Web Development", "Mobile Apps", "Backend APIs", "UI/UX Design", "Consulting"].map((service) => (
                  <div key={service} className="text-gray-400">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>Addis Ababa, Kotebe</div>
                <div>seble11994@gmail.com</div>
                <div>+251926544558</div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Seble H/mariam. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
