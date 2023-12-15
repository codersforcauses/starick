import React from "react";

const ChildSafeItem: React.FC<{ background: string, text: string }> = ({background, text}) => {
    return (
        <p className={`flex h-full w-full items-center px-10 py-2 bg-[--${background}]`} dangerouslySetInnerHTML={{ __html: text }}/>

    );
};
export default ChildSafeItem;
