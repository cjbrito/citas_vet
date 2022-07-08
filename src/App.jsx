import { useState, useEffect } from "react";

import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes';

// import dbpacientes from '../db.json';

const initialData = {
  name: "",
  propietario: "",
  email: "",
  alta: "",
  sintomas: ""
}

export const App = () => {
  const [pacientes, setPacientes] = useState([])
  const [lstPacientes, setLstPacientes] = useState([])
  const [paciente, setPaciente] = useState(initialData)
  const [count, setCount] = useState(0);
  const dbpacientes = []
  const modifyCss = "text-red-600";

  const deletePaciente = id => {
    // const newPacientes = pacientes.filter(el => el.id !== id)
    setPacientes(prev => prev.filter(el => el.id !== id));
  }

  useEffect(() => {
    const dataLs = JSON.parse(localStorage.getItem('pacientes')) || []
    setPacientes(dataLs)
    console.log(dataLs)
    //   if (localStorage.getItem('pacientes')) {
    //     setPacientes(localStorage.getItem('pacientes'))
    //   }
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const increment = () => {
    setCount(count + 1);
    // setCount(count + 1);
    setCount(ant => ant + 1);
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);
    // setCount
  }

  const customCss = {
    buttonCss: "px-10 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer transition-shadow rounded-md"
  }

  return (
    <div className="container mx-auto mt-20">
      <button onClick={increment}
      >contador:{count}</button>
      <Header />

      <main className="mt-10 flex">
        <Formulario
          cssCustom={modifyCss}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          initialData={initialData}
        />
        {/* todo Crear componente que maneje la logica de los elementos a mostrar en el Listado que muestre las flechas de desplazamiento */}
        <ListadoPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
          customCss={customCss}
        />

      </main>
      <footer />
    </div>
  )
};
