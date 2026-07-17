import {
  Activity,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  Eye,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Medal,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Timer,
  Trophy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PointerEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import portraitUrl from './assets/sairaj-borkar-profile.webp'
import './App.css'

type LinkItem = {
  label: string
  href: string
}

type CaseStudy = {
  problem: string
  constraint: string
  decision: string
  result: string
}

type Project = {
  title: string
  date: string
  summary: string
  metric: string
  tags: string[]
  links: LinkItem[]
  bullets: string[]
  /** Path to a real screenshot/GIF once available, e.g. '/projects/sahaay-ai.png'. Falls back to a generated accent card. */
  image?: string
  accentIcon: LucideIcon
  caseStudy?: CaseStudy
}

type Certification = {
  title: string
  issuer: string
  detail: string
  links?: LinkItem[]
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

const projects: Project[] = [
  {
    title: 'Sahaay AI',
    date: 'Jul 2026',
    summary:
      'AI-powered assistive React web app delivering real-time scene descriptions and offline currency detection for visually impaired users.',
    metric: 'sub-2s vision responses',
    tags: ['React', 'Node.js', 'SQLite', 'ONNX Runtime Web', 'TensorFlow.js', 'AI APIs'],
    accentIcon: Eye,
    links: [
      { label: 'Live', href: 'https://sahaay-ai-7aio.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/Sairaj-creator/Sahaay_AI' },
    ],
    bullets: [
      'Architected real-time scene descriptions via vision models with sub-2-second response times.',
      'Integrated ONNX Runtime Web and TensorFlow.js for sub-100ms offline currency detection.',
      'Built a secure Node.js proxy for Gemini/Llama APIs with 30 requests/min rate limiting.',
      'Persisted 128-dimensional facial embeddings in SQLite across continuous Render deployments.',
    ],
    caseStudy: {
      problem:
        'Visually impaired users need to understand their surroundings and identify currency notes without relying on someone else, and most existing tools require constant internet access.',
      constraint:
        'Cloud vision APIs are too slow for a live-guidance experience, and running full vision models entirely offline on modest hardware risks unusable latency or battery drain.',
      decision:
        'Split the workload: cloud vision models handle rich scene description where a couple seconds is acceptable, while a lightweight ONNX/TensorFlow.js model runs entirely on-device for the higher-frequency task of currency detection.',
      result:
        'Sub-2-second scene descriptions alongside sub-100ms offline currency recognition, backed by a rate-limited proxy so the app stays usable and cost-controlled under real traffic.',
    },
  },
  {
    title: 'ZenCode',
    date: 'Dec 2025',
    summary:
      'TypeScript VS Code extension that monitors cognitive load and nudges developers into healthier debugging patterns.',
    metric: '90+ marketplace users',
    tags: ['TypeScript', 'VS Code API', 'Chart.js', 'Developer Tools', 'Wellness'],
    accentIcon: Timer,
    links: [
      { label: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=sairajdev.zencode' },
      { label: 'GitHub', href: 'https://github.com/Sairaj-creator/zencode' },
    ],
    bullets: [
      'Deployed a productivity extension to the VS Code Marketplace, currently used by 90+ developers.',
      'Engineered a stress-detection algorithm using keystroke dynamics, file switching, and backspace spikes.',
      'Integrated a theme-aware Chart.js dashboard and Auto Zen Mode through the VS Code API.',
    ],
  },
  {
    title: 'Real-time Stress Monitoring System',
    date: 'Jan 2026',
    summary:
      'Computer-vision monitoring tool that maps facial geometry into a live stress index across seven emotional states.',
    metric: '1st place project expo',
    tags: ['Python', 'Flask', 'OpenCV', 'Random Forest', 'MediaPipe Face Mesh', 'Computer Vision'],
    accentIcon: Activity,
    links: [
      { label: 'GitHub', href: 'https://github.com/sathvik-dvdg/Real-time-StressMonitoring-System' },
      {
        label: 'Showcase',
        href: 'https://www.linkedin.com/posts/sairaj-borkar_machinelearning-artificialintelligence-computervision-ugcPost-7435015030347264000-76UQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAJMkBAhpGWUmm2JWijza4GD5w7XweeF8',
      },
    ],
    bullets: [
      'Processed live video feeds at 30+ FPS with Python, Flask, and OpenCV.',
      'Trained a Random Forest classifier on 3,500+ images to categorize seven emotional states.',
      'Used MediaPipe Face Mesh to map six physiological markers to a real-time stress index.',
    ],
  },
]

const hackathons = [
  {
    title: 'The Bengaluru AI Hackathon',
    result: 'Top 5 Finalist',
    detail: 'National-level inter-college AI hackathon organized by Sapthagiri NPS University in May 2026.',
    stat: 'Top 5',
  },
  {
    title: 'KVG Sulia Hackathon',
    result: 'Top 50 Finalist',
    detail: 'Shortlisted among 1,000+ registered participants for rapid problem-solving and prototyping.',
    stat: '1,000+',
    link: 'https://www.linkedin.com/posts/sairaj-borkar_hackwise2-byteloggers-kvgcehackathon-ugcPost-7478516754605080576-R2dU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAJMkBAhpGWUmm2JWijza4GD5w7XweeF8',
  },
]

const certifications: Certification[] = [
  {
    title: 'Java Programming',
    issuer: 'NPTEL & GeeksforGeeks',
    detail: 'Elite Certification with 84% NPTEL score plus foundational Java coursework via GFG.',
    links: [
      {
        label: 'NPTEL',
        href: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S36280043210805086.pdf',
      },
      {
        label: 'GFG',
        href: 'https://media.geeksforgeeks.org/courses/certificates/091c3b58f2da05cf1b16f917e9cf5b6d.pdf',
      },
    ],
  },
  {
    title: 'SQL Intermediate',
    issuer: 'HackerRank',
    detail: 'Verified proficiency in complex relational database queries.',
    links: [{ label: 'Certificate', href: 'https://www.hackerrank.com/certificates/iframe/adfa8865f29c' }],
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    detail: 'Comprehensive bootcamp covering React, Node.js, and SQL database design. Credential link pending.',
  },
]

const skillGroups = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['Java', 'Python', 'TypeScript', 'SQL', 'C', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks',
    icon: Layers3,
    items: ['React JS', 'Angular JS', 'React Native', 'Node.js', 'Express.js', 'GraphQL', 'FastAPI', 'Flask'],
  },
  {
    label: 'Data & Tools',
    icon: Database,
    items: ['PostgreSQL', 'Firebase', 'AWS Basic', 'Git', 'GitHub', 'Linux', 'Jenkins'],
  },
  {
    label: 'Concepts',
    icon: BrainCircuit,
    items: ['DSA', 'OOP', 'CI/CD', 'Agile Methodology', 'Prompt Engineering', 'AI-Assisted Development'],
  },
]

const recognition = [
  {
    icon: BriefcaseBusiness,
    title: 'Core Contributor - Orbit',
    detail: 'Contributed to UI design and frontend architecture of a live production app.',
    href: 'https://www.joinorbit.org/',
    cta: 'Live app',
  },
  {
    icon: Trophy,
    title: 'Mini Project Expo',
    detail: 'Won 1st place at Canara Engineering College in 2025 for the real-time stress monitoring system.',
    cta: '1st place',
  },
  {
    icon: Sparkles,
    title: 'AI/CV Project Showcase',
    detail: 'Shared the machine learning and computer vision build publicly on LinkedIn.',
    href: 'https://www.linkedin.com/posts/sairaj-borkar_machinelearning-artificialintelligence-computervision-ugcPost-7435015030347264000-76UQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAJMkBAhpGWUmm2JWijza4GD5w7XweeF8',
    cta: 'Post',
  },
]

const contactLinks = [
  { label: 'Email', value: 'sairajborkar31@gmail.com', href: 'mailto:sairajborkar31@gmail.com', icon: Mail },
  { label: 'Phone', value: '8861671363', href: 'tel:8861671363', icon: Phone },
  { label: 'GitHub', value: 'github.com/Sairaj-creator', href: 'https://github.com/Sairaj-creator', icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/sairaj-borkar', href: 'https://www.linkedin.com/in/sairaj-borkar/', icon: BriefcaseBusiness },
]

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div className="scroll-progress-fill" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState(projects[0].title)
  const [activeSkillGroup, setActiveSkillGroup] = useState(skillGroups[0].label)

  const projectFilters = useMemo(() => {
    const filters = new Set<string>(['All'])
    projects.forEach((project) => project.tags.forEach((tag) => filters.add(tag)))
    return Array.from(filters)
  }, [])

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.tags.includes(activeFilter))
  }, [activeFilter])

  const currentSkillGroup = skillGroups.find((group) => group.label === activeSkillGroup) ?? skillGroups[0]
  const SkillIcon = currentSkillGroup.icon

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [activeFilter])

  const handleTilt = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = (y / rect.height - 0.5) * -6
    const rotateY = (x / rect.width - 0.5) * 6
    card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
  }

  const clearTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      const shell = document.querySelector('.portfolio-shell')
      if (shell instanceof HTMLElement) {
        shell.style.setProperty('--mouse-x', `${x.toFixed(3)}`)
        shell.style.setProperty('--mouse-y', `${y.toFixed(3)}`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])


  return (
    <div className="portfolio-shell">
      <ScrollProgress />
      <div className="ambient-layer" aria-hidden="true" />
      <div className="scene-layer" aria-hidden="true">
        <div className="orb orb--primary orb--1" />
        <div className="orb orb--secondary orb--2" />
        <div className="orb orb--tertiary orb--3" />
        <div className="orb orb--glass orb--glass-1" />
        <div className="orb orb--glass orb--glass-2" />
        <div className="ring ring--1" />
        <div className="ring ring--2" />
      </div>

      <header className={`glass-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="brand-mark" href="#hero" aria-label="Sairaj Borkar home">
          <span>SB</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="icon-button"
            href="https://github.com/Sairaj-creator"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Sairaj Borkar GitHub"
            title="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="section-frame hero-grid min-h-[calc(100svh-40px)] pt-32 lg:pt-36">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              <Sparkles size={16} />
              Full-Stack Developer | Software Engineer
            </p>
            <h1>Sairaj Borkar</h1>
            <p className="hero-lede">
              Computer Science student building production-grade AI and full-stack systems with React, Node.js,
              Python, and a sharp eye for accessible product experiences.
            </p>

            <div className="hero-actions">
              <a className="action-button" href="/Sairaj_Borkar_Resume.pdf" target="_blank" rel="noreferrer" title="View Resume PDF">
                <FileText size={18} />
                View Resume
              </a>
              <a className="action-button is-primary" href="mailto:sairajborkar31@gmail.com">
                <Mail size={18} />
                Contact
              </a>
              <a className="action-button" href="https://github.com/Sairaj-creator" target="_blank" rel="noreferrer">
                <GitBranch size={18} />
                GitHub
              </a>
              <a
                className="action-button"
                href="https://www.linkedin.com/in/sairaj-borkar/"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
            </div>

            <div className="hero-metrics" aria-label="Portfolio highlights">
              <div>
                <strong>3</strong>
                <span>Flagship projects</span>
              </div>
              <div>
                <strong>90+</strong>
                <span>ZenCode users</span>
              </div>
              <div>
                <strong>8.29</strong>
                <span>CGPA / 10</span>
              </div>
            </div>
          </div>

          <aside className="portrait-card" data-reveal>
            <div className="portrait-frame">
              <img src={portraitUrl} alt="Sairaj Borkar in a navy blazer" loading="eager" width={480} height={528} />
            </div>
            <div className="portrait-meta">
              <span className="status-dot" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <p>Based in Mangaluru, India</p>
                <p>Canara Engineering College</p>
                <span>Expected BE graduation: May 2027</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <Rocket size={16} />
              About
            </p>
            <h2>Grounded fundamentals, shipped product instincts.</h2>
          </div>
          <div className="about-layout">
            <p className="about-copy" data-reveal>
              Dedicated Computer Science student specializing in full-stack web development, experienced in building
              scalable applications with React, Node.js, and Python. Sairaj is targeting software engineering roles
              where strong DSA, OOP, and Agile fundamentals meet practical AI-assisted product work.
            </p>
            <div className="focus-grid" data-reveal>
              <div className="glass-card">
                <Cpu size={22} />
                <h3>AI-assisted products</h3>
                <p>Vision models, ONNX/TensorFlow.js, behavioral stress detection, and accessible interfaces.</p>
              </div>
              <div className="glass-card">
                <ShieldCheck size={22} />
                <h3>Production discipline</h3>
                <p>Rate limits, persistent SQLite data, marketplace releases, and live deployed applications.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <Code2 size={16} />
              Projects
            </p>
            <h2>Flagship builds with measurable outcomes.</h2>
          </div>

          <div className="filter-rail" data-reveal aria-label="Project technology filters">
            {projectFilters.map((filter) => (
              <button
                className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => {
              const isExpanded = expandedProject === project.title
              const AccentIcon = project.accentIcon
              return (
                <article
                  className={`project-card ${isExpanded ? 'is-expanded' : ''}`}
                  key={project.title}
                  data-reveal
                  onPointerMove={handleTilt}
                  onPointerLeave={clearTilt}
                >
                  <div className="project-visual" aria-hidden="true">
                    {project.image ? (
                      <img src={project.image} alt="" loading="lazy" />
                    ) : (
                      <div className="project-visual-placeholder">
                        <AccentIcon size={28} />
                      </div>
                    )}
                  </div>

                  <div className="project-topline">
                    <span>{project.date}</span>
                    <span>{project.metric}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <div className="tag-list">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button type="button" onClick={() => setExpandedProject(isExpanded ? '' : project.title)}>
                      <CheckCircle2 size={16} />
                      {isExpanded ? 'Hide details' : 'Details'}
                    </button>
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                        <ExternalLink size={15} />
                      </a>
                    ))}
                  </div>

                  <div className="project-details" aria-hidden={!isExpanded}>
                    {project.bullets.map((bullet) => (
                      <p key={bullet}>{bullet}</p>
                    ))}
                    {project.caseStudy && (
                      <div className="case-study">
                        <div>
                          <span>Problem</span>
                          <p>{project.caseStudy.problem}</p>
                        </div>
                        <div>
                          <span>Constraint</span>
                          <p>{project.caseStudy.constraint}</p>
                        </div>
                        <div>
                          <span>Decision</span>
                          <p>{project.caseStudy.decision}</p>
                        </div>
                        <div>
                          <span>Result</span>
                          <p>{project.caseStudy.result}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="hackathons" className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <Medal size={16} />
              Hackathons
            </p>
            <h2>Competition pressure, prototype velocity.</h2>
          </div>
          <div className="badge-grid">
            {hackathons.map((hackathon) => (
              <article className="badge-card" key={hackathon.title} data-reveal>
                <div className="badge-stat">{hackathon.stat}</div>
                <div>
                  <p className="badge-kicker">{hackathon.result}</p>
                  <h3>{hackathon.title}</h3>
                  <p>{hackathon.detail}</p>
                  {hackathon.link && (
                    <a href={hackathon.link} target="_blank" rel="noreferrer">
                      LinkedIn post
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <Award size={16} />
              Recognition
            </p>
            <h2>Signals beyond coursework.</h2>
          </div>
          <div className="recognition-grid">
            {recognition.map((item) => {
              const Icon = item.icon
              return (
                <article className="glass-card recognition-card" key={item.title} data-reveal>
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.cta}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span>{item.cta}</span>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="credentials" className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <BadgeCheck size={16} />
              Certifications
            </p>
            <h2>Verified learning across backend, data, and full-stack foundations.</h2>
          </div>
          <div className="credential-grid">
            {certifications.map((certification) => (
              <article className="credential-card" key={`${certification.issuer}-${certification.title}`} data-reveal>
                <div>
                  <p>{certification.issuer}</p>
                  <h3>{certification.title}</h3>
                  <span>{certification.detail}</span>
                </div>
                {certification.links && (
                  <div className="credential-links">
                    {certification.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-frame section-band">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <BookOpen size={16} />
              Skills
            </p>
            <h2>Stack breadth with engineering fundamentals underneath.</h2>
          </div>

          <div className="skills-panel" data-reveal>
            <div className="skill-tabs" role="tablist" aria-label="Skill groups">
              {skillGroups.map((group) => {
                const Icon = group.icon
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeSkillGroup === group.label}
                    className={activeSkillGroup === group.label ? 'is-active' : ''}
                    key={group.label}
                    onClick={() => setActiveSkillGroup(group.label)}
                  >
                    <Icon size={18} />
                    {group.label}
                  </button>
                )
              })}
            </div>

            <div className="skill-cluster">
              <div className="skill-cluster-heading">
                <SkillIcon size={24} />
                <h3>{currentSkillGroup.label}</h3>
              </div>
              <div className="skill-tags">
                {currentSkillGroup.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-frame section-band">
          <div className="education-card" data-reveal>
            <div>
              <p className="eyebrow">
                <GraduationCap size={16} />
                Education
              </p>
              <h2>Canara Engineering College</h2>
              <p>Bachelor of Engineering in Computer Science</p>
            </div>
            <div className="education-stats">
              <div>
                <span>Expected</span>
                <strong>May 2027</strong>
              </div>
              <div>
                <span>CGPA</span>
                <strong>8.29 / 10</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Mangaluru</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-frame section-band contact-section">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">
              <Mail size={16} />
              Contact
            </p>
            <h2>Open to software engineering and full-stack opportunities.</h2>
          </div>
          <div className="contact-grid" data-reveal>
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  className="contact-card"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  key={link.href}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="section-frame site-footer">
        <span>Sairaj Borkar</span>
        <span className="footer-location">
          <MapPin size={14} />
          Mangaluru, India
        </span>
        <a className="footer-resume" href="/Sairaj_Borkar_Resume.pdf" target="_blank" rel="noreferrer">
          <Download size={15} />
          Download resume
        </a>
      </footer>
    </div>
  )
}

export default App
