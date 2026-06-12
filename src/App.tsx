import classnames from 'classnames';

import HomeLogo from './components/logo/HomeLogo';
import Socials from './components/socials/Socials';
import { useRandomColorShift } from './hooks/useRandomColorShift';

const interval = 2000;

export default function App() {
  const { color, color2, deg, oldColors, activeState } = useRandomColorShift({
    interval,
  });
  return (
    <div
      className="flex h-[100svh] w-[100svw] flex-col items-center overflow-hidden transition-all"
      style={{
        background: color || '#000',
      }}
    >
      <div
        className={classnames(
          'absolute top-0 left-0 h-full w-full transition-opacity duration-1000',
          {
            'opacity-0': activeState,
            'opacity-100': !activeState,
          },
        )}
        style={{
          background: `linear-gradient(${!activeState ? deg : oldColors[2]}deg, ${
            !activeState ? color : oldColors[1]
          }, ${!activeState ? color2 : oldColors[2]})`,
        }}
      ></div>
      <div
        className={classnames(
          'absolute top-0 left-0 h-full w-full transition-opacity duration-1000',
          {
            'opacity-0': !activeState,
            'opacity-100': activeState,
          },
        )}
        style={{
          background: `linear-gradient(${activeState ? deg : oldColors[2]}deg, ${
            activeState ? color : oldColors[1]
          }, ${activeState ? color2 : oldColors[2]})`,
        }}
      ></div>
      <div className="noise"></div>
      <div className="relative top-1/2 z-10 -translate-y-1/2">
        <HomeLogo />
      </div>
      <div className="absolute right-2 bottom-2">
        <Socials />
      </div>
    </div>
  );
}
