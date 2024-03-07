interface IconProps {
    name: string;
    src: string;
}

export default function Icon({name, src}: IconProps) {
    return (
        <>
        <div>
            <p className = "hidden">
                {name}
            </p>
            <img className = "h-40 w-80"src={src}/>
        </div>
        </>
    )
}