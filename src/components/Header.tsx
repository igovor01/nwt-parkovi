import React from "react";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <nav className="header">
        <ul>
          <li><a href="/">Početna</a></li>
          <li>
            <a href="/">Nacionalni parkovi</a>
            <ul className="dropdown">
              <li><a href="">NP Brijuni</a></li>
              <li><a href="">NP Krka</a></li>
              <li><a href="">NP Paklenica</a></li>
              <li><a href="">NP Plitvička jezera</a></li> 
              <li><a href="">NP Kornati</a></li>   
              <li><a href="">NP Mljet</a></li>  
              <li><a href="">NP Risnjak</a></li>  
              <li><a href="">NP Sjeverni Velebit</a></li>     
            </ul>
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
