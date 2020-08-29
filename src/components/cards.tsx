import * as React from 'react';

export const Cards = ({
  cards,
}: {
  cards: {
    title: string;
    count: number;
  }[];
}) => {
  const allCards = [] as string[];
  for (const { title, count } of cards) {
    for (let x = 0; x < count; x++) {
      allCards.push(title);
    }
  }

  function chunk(arr: any, chunkSize: number): string[][] {
    return [].concat.apply(
      [],
      arr.map(function (elem: any, i: any) {
        return i % chunkSize ? [] : [arr.slice(i, i + chunkSize)];
      })
    );
  }

  const chunks = chunk(allCards, 9);

  return (
    <>
      <div className="print-hidden" style={{ pageBreakAfter: 'always' }}>
        {cards.length} different cards
      </div>
      {chunks.map((c, ci) => (
        <div key={`chunk_${ci}`} className="grid grid-cols-3 col-gap-2 row-gap-2 mb-2 card-page">
          {c.map((title, i) => (
            <div key={i} className="card">
              <img
                className="card-img"
                src={`https://www.mtg-forum.de/db/picture.php?utf8=1&lng=en&card=${encodeURI(title)}`}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
