"use client";

const SubTitle = ({ text, icon }) => {
  return (
    <h2 className="text-description-3 text-primary-400/90 font-semibold flex gap-x-3 items-center">
      {icon}
      <span>{text}</span>
    </h2>
  );
};

export default SubTitle;
