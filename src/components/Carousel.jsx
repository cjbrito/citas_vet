import { useState } from 'react'
import { CarouselControls } from './CarouselControls';

export const Carousel = ({ MinLength, pacientes, setLstPacientes }) => {
  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(MinLength);
  const [len, setLen] = useState(pacientes.length)


  const callbackSetPacientes = prevPacientes => {
    if (index == range) return prevPacientes.slice(0, range - 1);
    return pacientes.slice(index, range)
  }

  useEffect(() => {
    if (pacientes.length > MinLength) {
      index === 0 && setRange(prevRange => {
        return index + MinLength < pacientes.length ? index + MinLength : pacientes.length;
      })
      setLstPacientes(callbackSetPacientes);
      setControls(true)
    }
  }, [index]);

  useEffect(() => {
    setLstPacientes(pacientes)
    setLen(pacientes.length - 1)
    if (len >= MinLength) {
      index !== 0 && setRange(prevRange => {
        return index + MinLength < pacientes.length ? index + MinLength : pacientes.length;
      })
      setControls(true)
      setLstPacientes(callbackSetPacientes);
    }
  }, [pacientes]);


  return len >= MinLength && <CarouselControls fnAnt={ant} fnSig={sig} />

}
