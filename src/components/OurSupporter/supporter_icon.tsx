interface IconProps {
  name: string;
  src: string;
}

export default function Icon({ name, src }: IconProps) {
  return (
    <>
      <div className={`${name === "move" ? "flex justify-center" : ""}`}>
        <p className="hidden">{name}</p>
        <img
          className={`w-100 h-40 ${name === "move" ? "ml-20" : ""}`}
          src={src}
          alt=""
        />
      </div>
    </>
  );
}
