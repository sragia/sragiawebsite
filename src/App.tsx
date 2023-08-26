import { useEffect, useState } from 'react';
import HomeLogo from './components/logo/HomeLogo';
import { useRandomColorShift } from './hooks/useRandomColorShift';
import classnames from 'classnames';
import Socials from './components/socials/Socials';

const interval = 2000;

export default function App() {
  const { color, color2, deg, oldColors, activeState } = useRandomColorShift({ interval });
  return (
    <div className="flex h-[100vh] flex-col items-center bg-black transition-all">
      <div
        className={classnames(
          'absolute left-0 top-0 h-full w-full transition-opacity duration-1000',
          {
            'opacity-0': activeState,
            'opacity-100': !activeState,
          },
        )}
        style={{
          background: `linear-gradient(${!activeState ? deg : oldColors[2]}deg, ${!activeState ? color : oldColors[1]
            }, ${!activeState ? color2 : oldColors[2]})`,
        }}
      ></div>
      <div
        className={classnames(
          'absolute left-0 top-0 h-full w-full transition-opacity duration-1000',
          {
            'opacity-0': !activeState,
            'opacity-100': activeState,
          },
        )}
        style={{
          background: `linear-gradient(${activeState ? deg : oldColors[2]}deg, ${activeState ? color : oldColors[1]
            }, ${activeState ? color2 : oldColors[2]})`,
        }}
      ></div>
      <div className="noise"></div>
      <div className="pointer-events-none z-10 relative top-1/2 -translate-y-1/2">
        <HomeLogo />
      </div>
      <div className="absolute bottom-2 right-2">
        <Socials />
      </div>
    </div>
  );
}
