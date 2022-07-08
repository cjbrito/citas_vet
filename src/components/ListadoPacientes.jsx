import { useState, useEffect } from "react"

import { Paciente } from "./Paciente"
const MinLength = 2;

export const ListadoPacientes = ({ pacientes, setPaciente, setPacientes, deletePaciente, customCss }) => {
  // const [lstPacientes, setLstPacientes] = useState(pacientes)
  // const [index, setIndex] = useState(0);
  // const [range, setRange] = useState(MinLength);
  // const [len, setLen] = useState(pacientes.length - 1)
  // const [controls, setControls] = useState(false)

  // const callbackSetPacientes = prevPacientes => {
  //   if (index == range) return prevPacientes.slice(0, range - 1);
  //   return pacientes.slice(index, range)
  // }

  // useEffect(() => {

  //   if (pacientes.length > MinLength) {
  //     index === 0 && setRange(prevRange => {
  //       return index + MinLength < pacientes.length ? index + MinLength : pacientes.length;
  //     })
  //     setLstPacientes(callbackSetPacientes);
  //     setControls(true)
  //   }
  // }, [index, len]);

  // useEffect(() => {


  //   setLstPacientes(pacientes)
  //   setLen(pacientes.length - 1)
  //   if (len >= MinLength) {
  //     index !== 0 && setRange(prevRange => {
  //       return index + MinLength < pacientes.length ? index + MinLength : pacientes.length;
  //     })
  //     setControls(true)
  //     setLstPacientes(callbackSetPacientes);
  //   }
  // }, [pacientes]);

  // const CarouselControls = () => {
  //   return (
  //     <div className="flex gap-4 text-center justify-center p-2">
  //       <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={ant}>{"<"}</button>
  //       <button className="bottom-3 bg-orange-400 text-4xl pb-2" onClick={sig}>{">"}</button>
  //     </div>
  //   )
  // }

  // const callbackIndex = (prevIndex) => {
  //   const newIndex = prevIndex < len
  // }

  // const selectNewItem = (next = true) => {
  //   debugger
  //   if (len >= MinLength) {
  //     if (next) {
  //       setIndex(nextIndex => {
  //         return nextIndex < len ? nextIndex + 1 : 0
  //       });
  //     } else {
  //       setIndex(nextIndex => nextIndex > 0 ? nextIndex - 1 : len);
  //     }

  //   }
  // };

  // const ant = () => {
  //   console.log("anterior")
  //   selectNewItem(false);
  // };

  // const sig = () => {
  //   console.log("siguiente")
  //   selectNewItem();
  // };

  const HeaderListPacientes = ({ title = "Listado Pacientes", pText = "Administra y Edita", spanText = "Pacientes y Citas" }) => {
    return (
      <>
        <h2 className="font-black text-3xl text-center">
          {title}
        </h2>
        <p className="text-lg mt-5 text-center mb-5">
          {pText + ' '}
          <span className="text-indigo-500 font-semibold">{spanText}</span>
        </p>
      </>
    )
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 h-screen overflow-y-scroll">
      {pacientes.length > 0 ?
        (<>
          <HeaderListPacientes />
          <div>
            {/* {controls && <CarouselControls />} */}
            {
              pacientes.map(item =>
                <Paciente
                  key={item.id}
                  paciente={item}
                  css={customCss}
                  setPacientes={setPacientes}
                  setPaciente={setPaciente}
                  deletePaciente={deletePaciente}
                />
              )
            }
          </div>
        </>)
        : (
          <HeaderListPacientes
            title="No hay pacientes"
            pText="Añade nuevos pacientes"
            spanText="y apareceran en esta area."
          />
        )
      }



    </div>
  )
}
