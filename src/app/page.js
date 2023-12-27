"use client";
import Job from "@/components/icons/Job";
import CubeIcon from "@/components/icons/CubeIcon";
import NextJSIcon from "@/components/icons/NextJSIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import TailwindCSS from "@/components/icons/TailwindCSS";
import TypeScript from "@/components/icons/TypeScript";
import AzureIcon from "@/components/icons/AzureIcon";
import PhpIcon from "@/components/icons/PhpIcon";
import WordPressIcon from "@/components/icons/WordPressIcon";
import CodeIcon from "@/components/icons/CodeIcon";
import SubTitle from "@/components/typography/SubTitle";
import TimeLineComponent from "@/components/timeline/TimeLineComponent";
import CardProjects from "@/components/cards/CardProjects";
import Container from "@/components/container/Container";
import CardStacks from "@/components/cards/CardStacks";
import CSharp from "@/components/icons/CSharp";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import NodeJSIcon from "@/components/icons/NodeJSIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import NetIcon from "@/components/icons/NetIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import AngularIcon from "@/components/icons/AngularIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import ReactNativeIcon from "@/components/icons/ReactNativeIcon";
import MySQLIcon from "@/components/icons/MySQLIcon";
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import GitIcon from "@/components/icons/GitIcon";
import DockerIcon from "@/components/icons/DockerIcon";
import LinuxIcon from "@/components/icons/LinuxIcon";
import DevicePhoneIcon from "@/components/icons/DevicePhoneIcon";
import FooterComponent from "@/components/footer/FooterComponent";
import HeaderComponent from "@/components/header/HeaderComponent";
import ContactComponent from "@/components/contact/ContactComponent";
import { Divider } from "@nextui-org/react";

const listStack = [
  {
    name: "C#",
    icon: <CSharp />,
  },
  {
    name: "PHP",
    icon: <PhpIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Node.js",
    icon: <NodeJSIcon />,
  },
  {
    name: "Python",
    icon: <PythonIcon />,
  },
  {
    name: ".NET",
    icon: <NetIcon />,
  },
  {
    name: "Express.js",
    icon: <ExpressIcon />,
  },
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "Angular",
    icon: <AngularIcon />,
  },
  {
    name: "Next.js",
    icon: <NextJSIcon />,
  },
  {
    name: "Java",
    icon: <JavaIcon />,
  },
  {
    name: "React Native",
    icon: <ReactNativeIcon />,
  },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon />,
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
  },
  {
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    name: "Azure",
    icon: <AzureIcon />,
  },
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
  },
  {
    name: "Linux",
    icon: <LinuxIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />,
  },
];

const listTimeLine = [
  {
    time: "Actualmente...",
    title: "Lansanet SAS - Junior Full Stack Developer",
    list: [
      "Desarrollo de un sistema de gestión de usuarios utilizando Next.js y Express para Lansanet SAS, una empresa dedicada a proporcionar servicios de Internet WISP y fibra óptica.",
      "Implementación de un dashboard para el control eficiente de usuarios, facilitando la administración de la red y mejorando la experiencia del cliente en el acceso a los servicios de Internet.",
    ],
  },
  {
    time: "Enero 2023 - Junio 2023",
    title: "Catedra SAS - Junior Full Stack Developer",
    list: [
      "Contribución de manera activa en un proyecto significativo de e-learning para colegios públicos en Medellín, Colombia.",
      "Desarrollo de un Sistema de Gestión del Aprendizaje (LMS) utilizando tecnologías avanzadas como Java Faces, PrimeFaces, JSX, Spring Boot y Hibernate.",
      "Desempeñé un papel clave en la implementación exitosa de metodologías ágiles, especialmente Scrum, liderando reuniones diarias, participando en la planificación de sprints y contribuyendo a la entrega iterativa de funcionalidades.",
    ],
  },
  {
    time: "Junio 2022 - Enero 2023",
    title: "SETI SAS - Junior Full Stack Developer",
    list: [
      "Diseño y desarrollo de interfaces de usuario para aplicativos de gestión de empleados y seguros médicos.",
      "Mejora continua de la experiencia del usuario (UX) en aplicativos existentes utilizando Angular y NestJS.",
      "Contribución activa en dos proyectos clave: Aplicativo de gestión de empleados y sistema de gestión de seguros médicos SURA (OIPA).",
    ],
  },
  {
    time: "Enero 2022 - Junio 2022",
    title: "SENA - Full Stack Developer",
    list: [
      "Desarrollo de una aplicación móvil con enfoque turístico utilizando React Native, complementada con una API creada mediante Express para gestionar eficientemente microservicios asociados.",
      "Desarrollo de una aplicación web en Java destinada a la gestión administrativa del proyecto, brindando a los administradores la capacidad de gestionar y actualizar el contenido de la aplicación móvil.",
    ],
  },
];

const listProjects = [
  {
    image: "/images/aviv-page.png",
    name: "Aviv",
    description:
      "Gestión, administración y comunicación de propiedades horizontales.",
    icons: [
      {
        icon: <NextJSIcon />,
        name: "Next.js",
      },
      {
        icon: <TailwindCSS />,
        name: "Tailwind CSS",
      },
      {
        icon: <ExpressIcon />,
        name: "Express",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <AzureIcon />,
        name: "Azure",
      },
    ],
    url: "https://aviv.connectics.co/",
  },
  {
    image: "/images/hablemos-de-inmuebles-page.png",
    name: "Hablemos de inmuebles",
    description:
      "Sitio web relacionado con información legal sobre los inmuebles.",
    icons: [
      {
        icon: <PhpIcon />,
        name: "PHP",
      },
      {
        icon: <WordPressIcon />,
        name: "WordPress",
      },
    ],
    url: "https://www.hablemosdeinmuebles.com/",
  },
];

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Divider />
      <main className="p-5 flex flex-col gap-8">
        <Container>
          <SubTitle text="Experiencia laboral" icon={<Job />} />
          <TimeLineComponent items={listTimeLine} />
        </Container>
        <Container className="gap-3">
          <SubTitle text="Proyectos" icon={<CubeIcon />} />
          <CardProjects projects={listProjects} />
        </Container>
        <Container>
          <SubTitle text="Stack" icon={<CodeIcon />} />
          <CardStacks stacks={listStack} />
        </Container>
        <Container>
          <SubTitle text="Contacto" icon={<DevicePhoneIcon />} />
          <ContactComponent />
        </Container>
        <Container>
          <FooterComponent />
        </Container>
      </main>
    </>
  );
}
