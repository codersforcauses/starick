interface NavbarItemProp {
  href: string;
  key: string;
  text: string;
}

export default function NavbarItem({ href, key, text }: NavbarItemProp) {
  return (
    <div className=" w-full rounded-lg bg-[--starick-white] px-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300">
      <a href={`#${href}`} className="">
        {text}
      </a>
    </div>
  );
}
