import React from "react";

function SearchBar({ handleSearch }) {
return (
    <>
        <div>
            <a href="http://localhost:3000/FilmsPage">
                <button id="Button">Search</button>
                <script type="text/javascript"></script>
            </a>

            <input placeholder="Search Term" type="text" onChange={handleSearch} />

        </div>
    </>
)

}

export default SearchBar;
// onClick = {handleSearch}>Search</button>