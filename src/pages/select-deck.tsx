import * as React from 'react';
import { Link } from 'react-router-dom';

const makeUrl = (input: string): string =>
  encodeURIComponent(input.replace('http://', '').replace('https://', '').replace('.', '~'));

export const SelectDeck = () => {
  const [url, setUrl] = React.useState('');

  return (
    <>
      <label className="block">Enter url from a deck</label>
      <input
        className="block w-full px-4 py-2 rounded border border-orange-500"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
      />
      <div className="text-gray-500 mb-8">
        supported are:
        <ul>
          <li>https://tappedout.net/</li>
          <li>https://deckstats.net/</li>
        </ul>
      </div>
      <Link className="px-4 py-2 rounded bg-orange-500" to={`/overview/${makeUrl(url)}`}>
        go fetch.
      </Link>
    </>
  );
};
