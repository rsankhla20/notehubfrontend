import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header(props) {
  const handleclick = () => {
    props.onLogout();
  };

  return (
    <header>
      <h1>
        <HighlightIcon />
        NoteHub<p className="tagline">NoteHub: Your Canvas for Ideas</p>
      </h1>
      <p className="userName">Welcome {props.name}</p>
      <button className="logoutbtn" onClick={handleclick}>
        LOGOUT
      </button>
    </header>
  );
}

export default Header;
