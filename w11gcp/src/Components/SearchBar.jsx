import React from "react";

const SearchBar = () => {
    return (
        <>

            <form role="search">
                <div>
                    <input type="search" id="mySearch" name="q"
                        placeholder="Search Term"
                        aria-label="Search through site content" minlength="4" maxlength="8" />
                    <button>Search</button>
                </div>
            </form>
        </>
    );
}

export default SearchBar;