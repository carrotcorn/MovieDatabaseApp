import React from "react";

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();

  return (
    <footer className='text-center'>
      <p>&copy; {y} Eric Bourne </p>
    </footer>
  );
};

export default Footer;
