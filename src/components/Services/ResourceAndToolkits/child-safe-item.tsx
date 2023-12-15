import React from "react";

const ChildSafeItem: React.FC<{ backgroundColor: string, text: string }> = ({background, text}) => {
    return (
        <p className={`flex h-full w-full items-center px-10 py-2 bg-[--starick-${background}]`} dangerouslySetInnerHTML={{ __html: text }}/>

    );
};
export default ChildSafeItem;
