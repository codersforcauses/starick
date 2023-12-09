import React, {ChangeEvent,KeyboardEvent, MouseEvent, useState} from "react";

import {SearchProps} from "@/components/searchBar/types";

const Search = (props: SearchProps) => {

    const {onSearch} = props;
    const [value, setValue] = useState('Enter search...')
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {target} = event;
        setValue(target.value);
    }

    const handleClick = () => {
        onSearch(value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    }

    return (
        <div className="relative text-gray-600 w-1/2 my-10 mx-auto">
            <input
                type="search"
                name="search"
                placeholder={value}
                onChange={searchHandler}
                onKeyDown={handleKeyDown}
                className="bg-gray-300 h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"/>
            <button onClick={handleClick} className="absolute right-0 top-0 mt-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                     viewBox="0 0 512 512">
                    <path
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
            </button>

        </div>
    )
}

export default Search;