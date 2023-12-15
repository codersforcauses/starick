import React from "react";

const ChildSafeItem: React.FC<{ backgroundColor: string, text: string }> = ({backgroundColor, text}) => {
    return (
        <p className={`flex h-full w-full items-center px-10 py-2 bg-[--starick-${backgroundColor}]`} dangerouslySetInnerHTML={{ __html: text }}/>

    );
};
export default ChildSafeItem;
