"use client"

import React, {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Play,
  TrendingUp,
  MessageCircle,
  Target,
  BarChart3,
  Users,
  Lightbulb,
  Heart,
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Instagram,
  Music,
} from "lucide-react"
import { translations } from "./i18n"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Separator } from "./components/ui/separator"
import { ImageWithFallback } from "./components/samuel/ImageWithFallback"
import { ImpressumPage } from "./components/ImpressumPage"
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"

/* ------------------------ Theme Context ------------------------ */

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    document.documentElement.className = initialTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}

/* ------------------------ Navigation ------------------------ */

const Navigation = ({
  activeSection,
  setActiveSection,
  language,
  setLanguage,
}: {
  activeSection: string
  setActiveSection: (section: string) => void
  language: "en" | "de"
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "de">>
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: "home", label: translations[language].navHome },
    { id: "services", label: translations[language].navServices },
    { id: "about", label: translations[language].navAbout },
    { id: "contact", label: translations[language].navContact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => setActiveSection("home")}
            className="hover:opacity-80 transition-opacity flex items-center"
          >
            <img
              src={theme === "light" ? "/Lumora.svg" : "/Lumoraw.svg"}
              alt="Lumora"
              className="h-6 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Switch */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setLanguage("de")}
                className={`text-sm font-medium transition-colors ${
                  language === "de"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                DE
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center space-x-4 px-4 pt-2">
                  <button
                    onClick={() => setLanguage("de")}
                    className={`text-sm font-medium transition-colors ${
                      language === "de"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    DE
                  </button>
                  <span className="text-muted-foreground">|</span>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`text-sm font-medium transition-colors ${
                      language === "en"
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

/* ------------------------ Sections ------------------------ */

const ClientLogos = ({ language }: { language: "en" | "de" }) => {
  const clients = [
    {
      name: "KinderOase",
      logo: "/kinderoase-logo.jpg",
    },
    {
      name: "CGI",
      logo: "/cgi-logo.jpg",
    },
    {
      name: "Hotel Danner",
      logo: "/hotel-danner-logo.jpg",
    },
    {
      name: "Restaurant FUDU",
      logo: "/restaurant-fudu-logo.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            {translations[language].clientsHeading}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2">
                <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                  <div className="flex flex-col items-center">
                    <ImageWithFallback
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-24 h-24 object-cover mb-3 rounded-full border border-gray-200 shadow-sm"
                    />
                    <h3 className="font-semibold text-lg text-center">
                      {client.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ServicesSection = ({ language }: { language: "en" | "de" }) => {
  const services = [
    {
      title: translations[language].serviceVideoProductionTitle,
      description: translations[language].serviceVideoProductionDesc,
      icon: Play,
    },
    {
      title: translations[language].servicePhotographyTitle,
      description: translations[language].servicePhotographyDesc,
      icon: Target,
    },
    {
      title: translations[language].serviceSocialMediaContentTitle,
      description: translations[language].serviceSocialMediaContentDesc,
      icon: MessageCircle,
    },
    {
      title: translations[language].serviceSocialMediaManagementTitle,
      description: translations[language].serviceSocialMediaManagementDesc,
      icon: BarChart3,
    },
    {
      title: translations[language].serviceWebsitesTitle,
      description: translations[language].serviceWebsitesDesc,
      icon: TrendingUp,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            {translations[language].servicesTitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-4">
            {translations[language].servicesHeading.split("{highlight}")[0]}
            <span className="text-primary">
              {translations[language].servicesHeadingHighlight}
            </span>
            {translations[language].servicesHeading.split("{highlight}")[1]}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translations[language].servicesSubheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudyHighlight = ({ language }: { language: "en" | "de" }) => {
  // Placeholder
  return null
}

/* ------------------------ About Page ------------------------ */

const AboutPage = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => {
  const values = [
    {
      icon: Target,
      title: translations[language].aboutValue1Title,
      description: translations[language].aboutValue1Desc,
    },
    {
      icon: Heart,
      title: translations[language].aboutValue2Title,
      description: translations[language].aboutValue2Desc,
    },
    {
      icon: Lightbulb,
      title: translations[language].aboutValue3Title,
      description: translations[language].aboutValue3Desc,
    },
    {
      icon: Users,
      title: translations[language].aboutValue4Title,
      description: translations[language].aboutValue4Desc,
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6">
              {translations[language].aboutHeroTitle.split("{highlight}")[0]}
              <span className="text-primary">
                {translations[language].aboutHeroTitleHighlight}
              </span>
              {translations[language].aboutHeroTitle.split("{highlight}")[1]}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {translations[language].aboutHeroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {translations[language].aboutMissionTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    {translations[language].aboutMissionDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {translations[language].aboutVisionTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    {translations[language].aboutVisionDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              {translations[language].aboutValuesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              {translations[language].aboutCtaTitle}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {translations[language].aboutCtaDescription}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group"
              onClick={() => setActiveSection("contact")}
            >
              {translations[language].aboutCtaButton}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------ Services Page ------------------------ */

const ServicesPage = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => {
  const services = [
    {
      title: translations[language].serviceVideoProductionTitle,
      description: translations[language].serviceVideoProductionDesc,
      icon: Play,
    },
    {
      title: translations[language].servicePhotographyTitle,
      description: translations[language].servicePhotographyDesc,
      icon: Target,
    },
    {
      title: translations[language].serviceSocialMediaContentTitle,
      description: translations[language].serviceSocialMediaContentDesc,
      icon: MessageCircle,
    },
    {
      title: translations[language].serviceSocialMediaManagementTitle,
      description: translations[language].serviceSocialMediaManagementDesc,
      icon: BarChart3,
    },
    {
      title: translations[language].serviceWebsitesTitle,
      description: translations[language].serviceWebsitesDesc,
      icon: TrendingUp,
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              {translations[language].servicesTitle}
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              {translations[language].servicesPageHeroTitle.split("{highlight}")[0]}
              <span className="text-primary">
                {translations[language].servicesPageHeroTitleHighlight}
              </span>
              {translations[language].servicesPageHeroTitle.split("{highlight}")[1]}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {translations[language].servicesPageHeroDescription}
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() => setActiveSection("contact")}
            >
              {translations[language].heroBookCall}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              {translations[language].finalCTAHeading}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {translations[language].finalCTADescription}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              onClick={() => setActiveSection("contact")}
            >
              {translations[language].finalCTAButton1}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------ Testimonials & Final CTA ------------------------ */

const Testimonials = ({ language }: { language: "en" | "de" }) => {
  const testimonials = [
    {
      company: translations[language].testimonial1Company,
      role: translations[language].testimonial1Role,
      content: translations[language].testimonial1Content,
      avatar: "/kinderoase-logo.jpg",
    },
    {
      company: translations[language].testimonial2Company,
      role: translations[language].testimonial2Role,
      content: translations[language].testimonial2Content,
      avatar: "/cgi-logo.jpg",
    },
    {
      company: translations[language].testimonial3Company,
      role: translations[language].testimonial3Role,
      content: translations[language].testimonial3Content,
      avatar: "/restaurant-fudu-logo.jpg",
    },
    {
      company: translations[language].testimonial4Company,
      role: translations[language].testimonial4Role,
      content: translations[language].testimonial4Content,
      avatar: "/hotel-danner-logo.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">
            {translations[language].testimonialHeading}
          </h2>
          <p className="text-xl text-muted-foreground">
            {translations[language].testimonialSubheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={t.avatar || "/placeholder.svg"}
                      alt={`${t.company} logo`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{t.company}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FinalCTA = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2e0885] to-[#220e5b] text-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl mb-6">
          {translations[language].finalCTAHeading}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {translations[language].finalCTADescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="group bg-white text-[#2e0885] hover:bg-[#f3f1fa] hover:text-[#2e0885] rounded-full transition-colors"
            onClick={() => setActiveSection("contact")}
          >
            {translations[language].finalCTAButton1}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
)

/* ------------------------ Hero Section ------------------------ */

const HeroSection = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => (
  <section className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 min-h-[790px] md:min-h-[890px]">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="min-h-[400px] flex flex-col justify-center">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 h-6">
              {translations[language].heroBadge}
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight min-h-[120px] md:min-h-[180px]">
              {translations[language].heroTitle.split("{highlight}")[0]}
              <span className="text-primary">
                {translations[language].heroTitleHighlight}
              </span>
              {translations[language].heroTitle.split("{highlight}")[1]}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl min-h-[80px]">
              {translations[language].heroParagraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group min-w-[200px] justify-center"
                onClick={() => setActiveSection("contact")}
              >
                {translations[language].heroBookCall}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="/LumoraTitel.png"               
              alt={translations[language].heroImageAlt}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

/* ------------------------ Cookie Consent ------------------------ */

const CookieConsent = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setTimeout(() => setIsVisible(true), 800)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center"
        >
          <Card
            className="
              max-w-3xl w-full
              rounded-2xl
              border border-gray-200
              bg-white
              text-black
              shadow-2xl
            "
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                {/* Text links (schwarz) */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-black">
                    {translations[language].cookieConsentTitle}
                  </h3>
                  <p className="text-sm mb-3 leading-relaxed text-black">
                    {translations[language].cookieConsentDescription}
                  </p>
                  <button
                    onClick={() => setActiveSection("privacy-policy")}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {translations[language].cookieConsentLearnMore}
                  </button>
                </div>

                {/* Buttons rechts */}
                <div className="flex flex-col sm:flex-row gap-3 sm:ml-4">
                  <Button
                    variant="outline"
                    onClick={handleDecline}
                    className="
                      px-5 py-2
                      border-gray-300
                      text-gray-800
                      bg-transparent
                      hover:bg-gray-100
                    "
                  >
                    {translations[language].cookieConsentDecline}
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="
                      px-5 py-2
                      bg-primary
                      text-white
                      hover:bg-primary/90
                    "
                  >
                    {translations[language].cookieConsentAccept}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ------------------------ Footer ------------------------ */

const Footer = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => (
  <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-primary mb-4">Lumora</h3>
          <p className="text-muted-foreground mb-4">
            {translations[language].footerDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">
            {translations[language].footerQuickLinks}
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  setActiveSection("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].navHome}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].navServices}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].navAbout}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].navContact}
              </button>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">
            {translations[language].footerLegal}
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  setActiveSection("impressum");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].footerImpressum}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveSection("privacy-policy");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {translations[language].footerPrivacy}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lumora Marketing.{" "}
          {translations[language].footerRights}
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Instagram", "TikTok"].map((social) => (
            <motion.a
              key={social}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

/* ------------------------ Contact Page ------------------------ */

const ContactPage = ({
  language,
  setActiveSection,
}: {
  language: "en" | "de"
  setActiveSection: (section: string) => void
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.service) newErrors.service = "Please select a service"

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c47656ed-6603-4531-839e-6f63dd316beb",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to: "info@lumoramarketing.de",
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
        setErrors({})
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const services = [
    { value: "video", label: translations[language].contactServiceVideo },
    { value: "photo", label: translations[language].contactServicePhoto },
    { value: "social-content", label: translations[language].contactServiceSocialContent },
    { value: "social-management", label: translations[language].contactServiceSocialManagement },
    { value: "website", label: translations[language].contactServiceWebsite },
    { value: "all", label: translations[language].contactServiceAll },
  ]

  const socialMediaLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/lumora.marketingagentur?igsh=YzVrZ2didTFlZTQz&utm_source=qr",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@lumora.marketingagentur?_r=1&_t=ZN-91B086NiuKE",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              {translations[language].contactTitle}
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              {translations[language].contactHeroTitle.split("{highlight}")[0]}
              <span className="text-primary">
                {translations[language].contactHeroTitleHighlight}
              </span>
              {translations[language].contactHeroTitle.split("{highlight}")[1]}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {translations[language].contactHeroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {translations[language].contactFormTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitStatus === "success" && (
                      <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-800 dark:text-green-200">
                          {translations[language].contactSuccessTitle}
                        </AlertTitle>
                        <AlertDescription className="text-green-700 dark:text-green-300">
                          {translations[language].contactSuccessMessage}
                        </AlertDescription>
                      </Alert>
                    )}

                    {submitStatus === "error" && (
                      <Alert className="mb-6 border-red-500 bg-red-50 dark:bg-red-950">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertTitle className="text-red-800 dark:text-red-200">
                          {translations[language].contactErrorTitle}
                        </AlertTitle>
                        <AlertDescription className="text-red-700 dark:text-red-300">
                          {translations[language].contactErrorMessage}
                        </AlertDescription>
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          type="text"
                          placeholder={translations[language].contactNamePlaceholder}
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder={translations[language].contactEmailPlaceholder}
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="tel"
                          placeholder={translations[language].contactPhonePlaceholder}
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                        <Input
                          type="text"
                          placeholder={translations[language].contactCompanyPlaceholder}
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger
                            className={errors.service ? "border-red-500" : ""}
                          >
                            <SelectValue
                              placeholder={
                                translations[language]
                                  .contactServicePlaceholder
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem
                                key={s.value}
                                value={s.value}
                              >
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <Textarea
                          placeholder={
                            translations[language].contactMessagePlaceholder
                          }
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className={`min-h-[150px] ${
                            errors.message ? "border-red-500" : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {
                              translations[language]
                                .contactSubmitting
                            }
                          </>
                        ) : (
                          <>
                            {
                              translations[language]
                                .contactSubmitButton
                            }
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {translations[language].contactQuickBookTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 opacity-90">
                      {translations[language].contactQuickBookDescription}
                    </p>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full group"
                      onClick={() =>
                        window.open(
                          "https://calendly.com/lumoramarketing-info",
                          "_blank",
                        )
                      }
                    >
                      {translations[language].contactQuickBookButton}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {translations[language].contactInfoTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="text-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${translations[language].contactInfoEmail}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {translations[language].contactInfoEmail}
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-3">
                      <Phone className="text-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${translations[language].contactInfoPhone}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {translations[language].contactInfoPhone}
                        </a>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Location
                        </p>
                        <p className="text-foreground">
                          {translations[language].contactInfoAddress}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {translations[language].contactFollowUs}
                      </p>
                      <div className="flex space-x-3">
                        {socialMediaLinks.map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={social.name}
                          >
                            <social.icon size={18} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------ AppContent & App ------------------------ */

const AppContent = ({
  language,
  setLanguage,
}: {
  language: "en" | "de"
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "de">>
}) => {
  const [activeSection, setActiveSection] = useState("home")

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection
              language={language}
              setActiveSection={setActiveSection}
            />
            <ClientLogos language={language} />
            <ServicesSection language={language} />
            <CaseStudyHighlight language={language} />
            <Testimonials language={language} />
            <FinalCTA
              language={language}
              setActiveSection={setActiveSection}
            />
          </>
        )
      case "about":
        return (
          <AboutPage
            language={language}
            setActiveSection={setActiveSection}
          />
        )
      case "services":
        return (
          <ServicesPage
            language={language}
            setActiveSection={setActiveSection}
          />
        )
      case "contact":
        return (
          <ContactPage
            language={language}
            setActiveSection={setActiveSection}
          />
        )
      case "impressum":
        return (
          <ImpressumPage
            language={language}
            onBack={() => setActiveSection("home")}
          />
        )
      case "privacy-policy":
        return (
          <PrivacyPolicyPage
            language={language}
            onBack={() => setActiveSection("home")}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer
        language={language}
        setActiveSection={setActiveSection}
      />
      <CookieConsent
        language={language}
        setActiveSection={setActiveSection}
      />
    </div>
  )
}

export default function App() {
  const [language, setLanguage] = useState<"en" | "de">("de")

  return (
    <ThemeProvider>
      <AppContent language={language} setLanguage={setLanguage} />
    </ThemeProvider>
  )
}
