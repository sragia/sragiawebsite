import { useEffect, useState } from 'react';
import { getRandomColor } from '../util/colors';

const INITIAL_COLOR = '#F1F2ED';

type UseRandomColorShift = {
  initialColor?: string;
  isRandomInitial?: boolean;
  interval?: number;
};

export const useRandomColorShift = ({
  initialColor,
  isRandomInitial,
  interval,
}: UseRandomColorShift = {}) => {
  const initial = initialColor || (isRandomInitial && getRandomColor()) || INITIAL_COLOR;
  const [color, setColor] = useState(initial);
  const [color2, setColor2] = useState(initial);
  const [deg, setDeg] = useState(Math.random() * 360)
  const [oldColors, setOldColors] = useState([initial, initial, Math.random() * 360])
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setOldColors([color, color2, deg]);
      setColor(getRandomColor());
      setColor2(getRandomColor());
      setDeg(Math.random() * 360);
      setActiveState(!activeState);
    }, interval || 1000);
    setColor(getRandomColor());

    return () => {
        clearInterval(intervalHandler);
    }
  }, [interval, activeState]);

  return {
    color,
    color2,
    deg,
    activeState,
    oldColors
  };
};
