"use client";
import { Card, CardBody, Tooltip } from "@nextui-org/react";

const CardStacks = ({ stacks }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 pt-3">
      {stacks.map((stack, index) => (
        <li key={index}>
          <Tooltip
            key={index}
            showArrow={true}
            content={stack.name}
            color="foreground"
          >
            <Card shadow="sm" isPressable>
              <CardBody className="p-5">
                <span
                  style={{ height: "35px", width: "35px", overflow: "hidden" }}
                  aria-label={stack.name}
                >
                  {stack.icon}
                </span>
              </CardBody>
            </Card>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};

export default CardStacks;
