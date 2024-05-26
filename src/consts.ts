import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mon Portfolio",
  DESCRIPTION: "Bienvenue dans mon portfolio",
  AUTHOR: "Mark Horn",
}


// Degree Page
export const FORMATION: Page = {
  TITLE: "Mes formations",
  DESCRIPTION: "mes formations",
}

// Work Page
export const WORK: Page = {
  TITLE: "Expérience professionnelle",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Veille technologique ",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Stage Page
export const STAGE: Page = {
  TITLE: "Stage",
  DESCRIPTION: "mes stages",
}



// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Accueil",
    HREF: "/",
  },
  {
    TEXT: "Formations",
    HREF: "/formation",
  },
  {
    TEXT: "Experience",
    HREF: "/work",
  },
  {
    TEXT: "Stages",
    HREF: "/stage",
  },
  {
    TEXT: "Projets",
    HREF: "/projects",
  },
  {
    TEXT: "Veille\u00A0Technologique",
    HREF: "/blog",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "maitriya@outlook.fr",
    HREF: "mailto:maitriya@outlook.fr",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "SMaitriya",
    HREF: "https://github.com/SMaitriya"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "maitriya-sramaner",
    HREF: "https://www.linkedin.com/in/maitriya-sramaner/",
  }

]

