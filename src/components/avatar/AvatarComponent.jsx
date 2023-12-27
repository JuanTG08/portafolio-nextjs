"use client";

const AvatarComponent = ({ size }) => {
  return (
    <figure style={{ width: size, height: size }}>
      <span
        tabIndex={-1}
        className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny bg-default text-default-foreground rounded-full w-full h-full"
        style={{ minWidth: size, minHeight: size }}
      >
        <img
          src="/images/my-photo.png"
          className="flex object-cover w-full h-full"
          alt="avatar"
          fetchPriority="high"
          width={size}
          height={size}
        />
      </span>
    </figure>
  );
};

export default AvatarComponent;
