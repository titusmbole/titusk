import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink-line py-8">
      <div className="page flex flex-col justify-between gap-3 text-sm text-ink-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Titus Mbole. Nairobi, Kenya.</p>
        <p>Built with React, Tailwind and Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
