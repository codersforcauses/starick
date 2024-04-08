import { ChangeEvent, KeyboardEvent, useState } from "react";
import React from "react";

export default function Search({ prompt }: { prompt: string }) {
  const [value, setValue] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Function to handle the redirection to Google with site search
  const redirectToGoogleSearch = () => {
    // Trim the search value and check if it's not empty
    const trimmedValue = value.trim();
    if (trimmedValue) {
      // Encode the search query and construct the Google search URL
      const searchQuery = encodeURIComponent(trimmedValue);
      const googleSearchUrl = `https://www.google.com/search?q=site:starick.org.au ${searchQuery}`;
      // Redirect to the Google search page
      window.location.href = googleSearchUrl;
    }
  };

  // Event handler for the Enter key
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();  // Prevent form submission
      redirectToGoogleSearch();
    }
  };

  // Event handler for the search button click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();  // Prevent form submission
    redirectToGoogleSearch();
  };

  return (
    <div className="relative top-16 mx-auto mb-5 mt-8 w-1/2 text-gray-600">
      <input
        type="search"
        name="search"
        value={value} // Bind input to the state value
        placeholder={prompt}
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
        className="h-10 w-full rounded-full bg-gray-300 px-5 pr-10 text-sm focus:outline-none"
      />
      <button
      onClick={handleClick}
      className="absolute right-0 top-0 mt-3 mr-4"
      type="submit"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
      </button>
    </div>
  );
}
