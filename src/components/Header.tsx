import React from "react";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <nav className="header">
        <ul>
          <li>
            <a href="/">Početna</a>
          </li>
          <li>
            <a href="/">Nacionalni parkovi</a>
            <div className="dropdown">
              <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a>
            </div>
          </li>
          <li>
            <a href="/">Komentari</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
