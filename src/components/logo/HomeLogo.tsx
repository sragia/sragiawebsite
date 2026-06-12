import classnames from 'classnames';
import { useEffect, useState } from 'react';

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

let interval: ReturnType<typeof setInterval> | null = null;

const HomeLogo = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
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
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  // Force tailwind to generete classes
  // className="font-robotoCondensed font-outfit font-krona font-ranga font-pacifico font-bangers font-caveats"

  return (
    <div
      className={classnames('transition-all duration-1000', {
        'scale-100 opacity-100': show,
        'scale-90 opacity-0': !show,
      })}
    >
      <div
        className={classnames(
          'text-4xl font-medium text-white opacity-20 md:text-6xl',
          `font-${fontFamilies[index]}`,
        )}
      >
        <span className="p-1">sragia</span>
        <span className="font-bangers relative z-10 -mr-1 -ml-1 text-4xl">.</span>
        <span
          className={`bg-red z-0 p-1 text-white transition-all font-${
            fontFamilies[index + 1 > fontFamilies.length ? 0 : index + 1]
          }`}
        >
          com
        </span>
      </div>
      <div className="font-outfit absolute top-0 left-0 flex h-full w-full items-center justify-center text-xl font-medium text-white">
        <span className="bg-red font-krona p-1 text-white">sragia</span>
        <span className="font-bangers -mr-1 -ml-1 text-4xl">.</span>
        <span className="p-1">com</span>
      </div>
    </div>
  );
};

export default HomeLogo;
