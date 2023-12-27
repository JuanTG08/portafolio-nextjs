"use client";
import { Button, Card, CardBody, Image, Tooltip } from "@nextui-org/react";
import TitleCardProject from "../typography/TitleCardProject";
import ParagraphCardProject from "../typography/ParagraphCardProject";
import Link from "next/link";
import LinkIcon from "../icons/LinkIcon";

const CardProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <article key={index}>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <figure className="relative col-span-6 md:col-span-7">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src={project.image}
                    width="100%"
                    isZoomed
                  />
                </figure>
                <div className="flex flex-col col-span-6 md:col-span-5">
                  <div className="w-full h-full">
                    <header className="w-full">
                      <TitleCardProject text={project.name} />
                    </header>
                    <ParagraphCardProject text={project.description} />
                    <div className="flex gap-2 my-3">
                      <ul className="flex gap-2 my-3 list-none p-0 m-0">
                        {project.icons.map((icon, i) => (
                          <li key={i} style={{ maxHeight: "25px" }}>
                            <Tooltip showArrow={true} content={icon.name}>
                              <span style={{ height: "25px" }}>
                                {icon.icon}
                              </span>
                            </Tooltip>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <footer>
                      <Button
                        size="md"
                        as={Link}
                        href={project.url}
                        target="_blank"
                        endContent={<LinkIcon />}
                        variant="solid"
                        color="primary"
                      >
                        Visitar
                      </Button>
                    </footer>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </article>
      ))}
    </>
  );
};

export default CardProjects;
