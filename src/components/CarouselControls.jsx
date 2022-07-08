
export const CarouselControls = ({ len, step, infinite }) => {


  const [index, setIndex] = useState(0);
  const [range, setRange] = useState(MinLength);
  const [len, setLen] = useState(pacientes.length - 1)
  const [controls, setControls] = useState(false)

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
  }, [index, len]);

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

  const CarouselControls = () => {
    return (
      <div className="flex gap-4 text-center justify-center p-2">
        <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={ant}>{"<"}</button>
        <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={sig}>{">"}</button>
      </div>
    )
  }

  const callbackIndex = (prevIndex) => {
    const newIndex = prevIndex < len
  }

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
  const selectNewItem = (next = true) => {
    debugger
    if (next) {
      // setIndex(nextIndex => {
      //   return nextIndex < len ? nextIndex + 1 : 0
      // });
    } else {
      // setIndex(nextIndex => nextIndex > 0 ? nextIndex - 1 : len);
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


  return (
    <div className="flex gap-4 text-center justify-center p-2">
      <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={ant}>{"<"}</button>
      <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={sig}>{">"}</button>
    </div>
  )
}
