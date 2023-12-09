export function List({ items }: {items: string[]}) {
    return (<ul>
        {items.map((text, index) => <li className="list-disc list-inside" key={index}>{text}</li>)}
        </ul>
    );
}