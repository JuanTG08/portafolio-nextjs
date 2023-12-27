"use client";
import { Timeline } from "keep-react";
import CalenderIcon from "../icons/CalenderIcon";

const TimeLineComponent = ({ items }) => {
  return (
    <Timeline timelineBarType="dashed" className="p-0 m-4">
      {items.map((item, i) => (
        <Timeline.Item key={i}>
          <Timeline.Point icon={<CalenderIcon size={16} />} />
          <Timeline.Content>
            <Timeline.Time>{item.time}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <ol className="list-disc pl-5">
              {item.list.map((data, ind) => (
                <li key={ind}>
                  <Timeline.Body>{data}</Timeline.Body>
                </li>
              ))}
            </ol>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default TimeLineComponent;
