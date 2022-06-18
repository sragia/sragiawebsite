import { useEffect, useState } from 'react';
import { getRandomColor } from '../helpers/color';

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
  const initial =
    initialColor || (isRandomInitial && getRandomColor()) || INITIAL_COLOR;
  const [color, setColor] = useState(initial);

  useEffect(() => {
    setInterval(() => {
      setColor(getRandomColor());
    }, interval || 1000);
  }, [interval]);

  return {
    color,
  };
};
