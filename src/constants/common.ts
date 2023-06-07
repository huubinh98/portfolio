import type { menuObject, skillsObject } from "@/models";

const urlImage = '/src/assets/images'

export const MENU = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as menuObject[];

export const SKILLS = [
  {
    title: 'HTML',
    src: `${urlImage}/icon-html.svg`
  },
  {
    title: 'CSS',
    src: `${urlImage}/icons-css.svg`
  },
  {
    title: 'SASS',
    src: `${urlImage}/logos-sass.svg`
  },
  {
    title: 'JAVASCRIPT',
    src: `${urlImage}/icons-js.svg`
  },
  {
    title: 'TYPESCRIPT',
    src: `${urlImage}/typescript-icon.svg`
  },
  {
    title: 'TAILWIND',
    src: `${urlImage}/icons-tailwind.svg`
  },
  {
    title: 'BOOTSTRAP',
    src: `${urlImage}/logos-bootstrap.png`
  },
  {
    title: 'REACT',
    src: `${urlImage}/logos-react.svg`
  },
  {
    title: 'VUE',
    src: `${urlImage}/vuejs-icon.svg`
  },
  {
    title: 'GITLAB',
    src: `${urlImage}/icon-git.svg`
  },
  {
    title: 'GITHUB',
    src: `${urlImage}/icons-github.svg`
  }
] as skillsObject[]