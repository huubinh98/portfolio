import type {
  experienceObject,
  menuObject,
  projectObject,
  skillsObject,
} from "@/models";

const urlImage = "./assets/images";

export const UrlGithub = "https://github.com/huubinh98";

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
    title: "HTML",
    src: `icon-html.svg`,
  },
  {
    title: "CSS",
    src: `icons-css.svg`,
  },
  {
    title: "SASS",
    src: `logo-sass.svg`,
  },
  {
    title: "JAVASCRIPT",
    src: `icons-js.svg`,
  },
  {
    title: "TYPESCRIPT",
    src: `typescript-icon.svg`,
  },
  {
    title: "TAILWIND",
    src: `icons-tailwind.svg`,
  },
  {
    title: "BOOTSTRAP",
    src: `logo-bootstrap.svg`,
  },
  {
    title: "REACT",
    src: `logo-react.svg`,
  },
  {
    title: "VUE",
    src: `vuejs-icon.svg`,
  },
  {
    title: "GITLAB",
    src: `icon-git.svg`,
  },
  {
    title: "GITHUB",
    src: `icons-github.svg`,
  },
  {
    title: "FIGMA",
    src: `figma-icon.svg`,
  },
  {
    title: "PHOTOSHOP",
    src: `photoshop-logo.svg`,
  },
] as skillsObject[];

export const PROJECTS = [
  {
    id: "1",
    url: `${urlImage}/virgil.png`,
    altImage: "back-virgil",
    title: "VirgilHR - Mobile/Web app project - Online law library solution",
    description: `
                  + Breakout SaaS solution that helps HR teams stay compliant with employment &
                  labor law in real time, reduces risks & liabilities in employment & business overall 
                  <br />
                  + BigIn's Best Product Team - Team Awesome 2022
                `,
  },
  {
    id: "1",
    url: `${urlImage}/agoyu.png`,
    altImage: "back-agoyu",
    title:
      "Agoyu - Mobile/Web app project - Online moving cost estimation solution",
    description: `
    + Innovative online platform using AI to allow accurate cost estimation for
    household goods moving and generates free pricing quotes from top moving
    companies, reducing moving risks & costs for consumers 
    <br />
    + Exceeded 1,000 customers in only 3 months

                `,
  },
  {
    id: "1",
    url: `${urlImage}/onPoint.png`,
    altImage: "back-onpoint",
    title: "OnPoint - Top tier e-commerce enabler in Vietnam",
    description: `
    + Product Recommend Tool Project (01 - 03/2022) - Built end-to-end solutions in a
    single tool that enables user to get customer-product recommendation results
    from Al partner - AiDA on e-commerce platform, to overall improve customer
    experience
     <br />
     + UNA Market (03 - 04/2022) - the pioneer group buying platform in Vietnam that
     revolutionized online grocery shopping with its unique "the more people buy, the
     cheaper the price" model
     
                `,
  },
] as projectObject[];

export const EXPERINCE = [
  {
    id: 1,
    title: "Bigin",
    subTitle: "Frontend Developer",
    descriptionDetail: `
    <p class="exper-desc">
            Experiencing in driving impactful results for global clients,
            especially on complex projects utilizing cutting-edge technologies
            to craft seamless user experiences
          </p>
        <p class="exper-desc fw-600">Key responsibilities:</p>
          <p class="exper-desc">
            - Working with CSS3 and HTML5 to build and maintain the website
            interface
            <br />
            - Using ReactJS, VueJS, Typescript for coding, testing and design
            needs
            <br />
            - Using NuxtJS and NextJS framework for coding
            <br />
            - Troubleshooting processing issues and refining coding to ansure
            better loading times for users
            <br />
            - Using Axios, fetch to interact with the API
            <br />
            - Using MUI, Element UI libraries to develop projects
            <br />
            - Managing CSS responsive frameworks including Bootstrap and
            Tailwind CSS
            <br />
            - Executing exemplary version control using GitLab, ensuring
            accurate record keeping
            <br />
            - Experience with Atlassian JIRA project management platform
          </p>
          <p class="exper-desc fw-600">Achievements:</p>
          <p class="exper-desc">
            - Best Project Team Member in 2022
            <br />
            - BIGINOVATION HACKATHON 2023
          </p>
    
    `,
    date: "01/2022 - Persent",
  },
  {
    id: 2,
    title: "Mobifone NOC",
    subTitle: "Network Operation Technician",
    descriptionDetail: `
    <p class="exper-desc fw-600">Key responsibilities:</p>
    <p class="exper-desc">
      - Monitored and assessed network and server performance using
      advanced monitoring software
      <br />
      - Troubleshot & resolved system issues to maintain reliable IT
      infrastructure support
      <br />
      - Oversaw system maintenance & performed system administration
      tasks
    </p>
    
    `,
    date: "03/2021 - 12/2021",
  },
  {
    id: 3,
    title: "IF Vietnam Co., Ltd.",
    subTitle: "Intership Frontend",
    descriptionDetail: `
    <p class="exper-desc fw-600">Key responsibilities:</p>
                <p class="exper-desc">
                  - Build Test Skill website interface using Reactjs library
                  <br />
                  - Working with CSS3 and HTML5 to build and maintain the
                  website interface
                </p>
    `,
    date: "04/2020 - 07/2020",
  },
] as experienceObject[];
