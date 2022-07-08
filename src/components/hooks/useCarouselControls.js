import { useState } from 'react'

export const useCarouselControls = (step = 2, len) => {
  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(step);
  const [len, setLen] = useState(len)
  const [viewControls, setViewControls] = useState(false)

  const selectNewItem = (next = true) => {
    debugger
    if (len >= MinLength) {
      if (next) {
        setIndex(nextIndex => {
          return nextIndex < len ? nextIndex + 1 : 0
        });
      } else {
        setIndex(nextIndex => nextIndex > 0 ? nextIndex - 1 : len);
      }

    }
  };

  const ant = () => {
    console.log("anterior")
    selectNewItem(false);
  };

  const sig = () => {
    console.log("siguiente")
    selectNewItem();
  };
  return []
}
