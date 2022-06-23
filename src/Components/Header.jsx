import { React, useState } from "react";
import TextField from "@mui/material/TextField";

function Header() {
    return (
        <div className="Header">
          <h1> Search</h1>
          <div className="Search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          </div>
    )
}
export default Header;