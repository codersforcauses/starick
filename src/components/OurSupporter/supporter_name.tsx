interface Nameprops {
  name: string;
}

export default function Name({ name }: Nameprops) {
  return (
    <>
      <div>
        <p className="text-center">{name}</p>
      </div>
    </>
  );
}
