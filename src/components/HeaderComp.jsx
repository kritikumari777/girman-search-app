import React from 'react'

const HeaderComp = () => {
  return (
        <header className="flex justify-between p-4 bg-gray-100">
          <h1 className="text-xl font-bold">Girman Technologies</h1>
          <nav className="flex gap-4">
            <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://linkedin.com/company/girman-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:contact@girmantech.com">Contact</a>
          </nav>
        </header>
      );
}

export default HeaderComp