import { useEffect, useState } from 'react';
import classnames from 'classnames';

const fontFamilies = [
  'robotoCondensed',
  'pacifico',
  'caveat',
  'outfit',
  'krona',
  'caveat',
  'ranga',
  'pacifico',
  'bangers',
  'robotoCondensed',
  'pacifico',
  'bangers',
  'caveat',
  'robotoCondensed',
];

let interval: number | null = null;

const HomeLogo = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      if (index + 1 > fontFamilies.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 750);
  }, [setIndex, index]);
  // Force tailwind to generete classes
  // className="font-robotoCondensed font-outfit font-krona font-ranga font-pacifico font-bangers font-caveats"

  return (
    <div>
      <div
        className={classnames(
          'text-4xl font-medium text-white opacity-20 md:text-6xl',
          `font-${fontFamilies[index]}`,
        )}
      >
        <span className="p-1">sragia</span>
        <span className="relative z-10 -ml-1 -mr-1 font-bangers text-4xl">.</span>
        <span
          className={`z-0 bg-red p-1 text-white transition-all font-${
            fontFamilies[index + 1 > fontFamilies.length ? 0 : index + 1]
          }`}
        >
          com
        </span>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center font-outfit text-xl font-medium text-white">
        <span className="bg-red p-1 font-krona text-white">sragia</span>
        <span className="-ml-1 -mr-1 font-bangers text-4xl">.</span>
        <span className="p-1">com</span>
      </div>
    </div>
  );
};

export default HomeLogo;
