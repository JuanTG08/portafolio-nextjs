"use client";
import { Button, Snippet, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";

const ContactComponent = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center p-3">
      <Tooltip showArrow={true} content="LinkedIn">
        <Button
          as={Link}
          href="https://www.linkedin.com/in/juan-david-triana"
          target="_blank"
          color="primary"
          className="mr-1"
          size="lg"
          variant="ghost"
          startContent={<LinkedIn />}
          aria-label="LinkedIn Perfil de Juan David Triana"
        >
          LinkedIn
        </Button>
      </Tooltip>

      <Tooltip showArrow={true} content="GitHub">
        <Button
          as={Link}
          href="https://github.com/JuanTG08"
          target="_blank"
          color="primary"
          className="mr-1"
          size="lg"
          variant="ghost"
          startContent={<GitHub />}
          aria-label="GitHub Repositorio de JuanTG08"
        >
          GitHub
        </Button>
      </Tooltip>

      <Tooltip showArrow={true} content="trianajuan970@gmail.com">
        <Snippet
          symbol=""
          variant="bordered"
          size="md"
          color="secondary"
          tooltipProps={{
            content: "Copiar email",
          }}
          aria-label="Correo electrónico de Juan David Triana"
        >
          <a href="mailto:trianajuan970@gmail.com">trianajuan970@gmail.com</a>
        </Snippet>
      </Tooltip>
    </div>
  );
};

export default ContactComponent;
