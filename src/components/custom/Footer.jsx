/* eslint-disable no-unused-vars */

import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Footer() {
  const openInstagram = () => {
    window.open('https://github.com/Musaddique2404', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer w-full flex text-muted-foreground items-center justify-center p-4 mt-auto">
      <h1>
        <Link to="https://github.com/Musaddique2404" target="_blank" rel="noreferrer">
          <Button variant="link" onClick={openInstagram}>
            <p className="sm:font-semibold sm:text-lg text-muted-foreground border-b-2">
              Made by Musaddique Haidar Khan
            </p>
          </Button>
        </Link>
      </h1>
    </div>
  );
}

export default Footer;
