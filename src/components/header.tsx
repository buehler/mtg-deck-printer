import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className="p-4 bg-gray-800 text-orange-500 print-hidden">
    <div className="flex">
      <div className="flex-1">MTG Deck Printer</div>
      <div>
        <Link to="/">Deck Selection</Link>
      </div>
    </div>
  </div>
);
