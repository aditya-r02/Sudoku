// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 absolute bottom-0 left-0 right-0">
      <p className="text-sm">
        Made by Aditya Rana | View on{' '}
        <a
          href="https://github.com/aditya-r02/Sudoku"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>{' '}
        | Connect on{' '}
        <a
          href="https://www.linkedin.com/in/adityarana2003/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
