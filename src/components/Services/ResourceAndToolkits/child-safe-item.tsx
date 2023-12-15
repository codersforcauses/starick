import React from "react";

export default function ChildSafeItem({backgroundColor, text}) {
    return (
        <p className={`flex h-full w-full items-center px-10 py-2 bg-[--starick-${backgroundColor}]`} dangerouslySetInnerHTML={{ __html: text }}/>
    );
}

