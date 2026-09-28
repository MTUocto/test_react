import React from "react";
import { Link } from "react-router";

function Header() {

  return (
    <header className="header">

      <div className="header-inner">

        <Link
          to="/"
          className="logo"
        >
          React Board
        </Link>

        <nav>

          <Link
            to="/"
            className="nav-link"
          >
            게시판
          </Link>

          <Link
            to="/write"
            className="nav-link"
          >
            글쓰기
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Header;