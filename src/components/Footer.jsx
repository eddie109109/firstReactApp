import React from "react";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>&copy; Copyright {currentYear} eddieprogramming</footer>

  );

}

export default Footer;
