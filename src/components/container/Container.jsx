"use client";

const Container = ({ children, id, className = "" }) => {
  return (
    <section className={`flex flex-col ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Container;
