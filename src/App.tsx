import { useEffect, useState } from 'react';
import HomeLogo from './components/logo/HomeLogo';
import { useRandomColorShift } from './hooks/useRandomColorShift';
import classnames from 'classnames';
import Socials from './components/socials/Socials';

const interval = 2000;
let oldColors = [];

export default function App() {
  const { color: color1 } = useRandomColorShift({ interval });
  const { color: color2 } = useRandomColorShift({ interval });
  const [deg, setDeg] = useState(Math.random() * 360);
  const [activeState, setActiveState] = useState(0);
  const [oldState, setOldState] = useState([color1, color2, deg]);
  useEffect(() => {
    setActiveState(activeState === 0 ? 1 : 0);
    setTimeout(() => {
      setOldState([color1, color2, deg]);
      setDeg(Math.random() * 360);
    }, interval);
  }, [color1]);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-black transition-all">
      <div
        className={classnames(
          'absolute left-0 top-0 h-full w-full transition-opacity duration-1000',
          {
            'opacity-0': activeState,
            'opacity-100': !activeState,
          },
        )}
        style={{
          background: `linear-gradient(${!activeState ? deg : oldState[2]}deg, ${!activeState ? color1 : oldState[1]
            }, ${!activeState ? color2 : oldState[2]})`,
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
          background: `linear-gradient(${activeState ? deg : oldState[2]}deg, ${activeState ? color1 : oldState[1]
            }, ${activeState ? color2 : oldState[2]})`,
        }}
      ></div>
      <div className="pointer-events-none z-10">
        <HomeLogo />
      </div>
      <div className="absolute bottom-2 right-2">
        <Socials />
      </div>
    </div>
  );
}
