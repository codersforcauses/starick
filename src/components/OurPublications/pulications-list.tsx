export default function PublicationList({ items } : {items: Array<{text: string, link: string}>}) {
    const colour1 = "starick-olive";
    const colour2 = "starick-white";
    return (
        <div>
          {items.map((item, index) => (
            <p
            className={`flex h-full w-full items-center px-10 py-2 bg-${index%2 ? colour2 : colour1}`}><a className="underline" href={item.link}>{item.text}</a></p>
          ))}
        </div>
    )
}