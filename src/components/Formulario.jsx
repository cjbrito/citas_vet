import { useState, useEffect } from "react";

import { Error } from "./messages/Error";
import { WrapField } from "./customs/WrapField";
import { CustomInput } from "./Customs/CustomInput";
import { genId } from "../helpers/functions";
import { CustomButton } from "./Customs/CustomButton";

export const Formulario = ({ customCss, setPacientes, paciente, setPaciente, initialData }) => {

  const [dataForm, setDataForm] = useState(initialData)
  const { id, name, propietario, email, alta, sintomas } = dataForm;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2500)
    }
  }, [error]);

  useEffect(() => {
    if (paciente.id)
      setDataForm(paciente)
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (modo == "edit") {
    //   editar()
    // } else {
    //   agregar()
    // }
    (paciente.id) ? editar() : agregar();
    // objModo[modo]();
  }
  const del = () => console.log("delete")

  const agregar = () => {
    const errFlag = Object.values(dataForm).some(data => !data);
    if (!errFlag) {
      const obj = { id: genId(), name, propietario, email, alta, sintomas };
      setPacientes(prevPacientes => [obj, ...prevPacientes])
      setDataForm(initialData)
    }
    setError(errFlag);
  }

  const editar = () => {
    const errFlag = Object.values(dataForm).some(data => !data);
    if (!errFlag) {
      const obj = { id: paciente.id, name, propietario, email, alta, sintomas };
      setPacientes(prevPacientes => {
        const data = prevPacientes.map((el) => {
          return el.id === id ? obj : el
        })
        return (data)
      })

      // [obj, ...prevPacientes.filter(el => el.id != id)]})
      setPaciente({})
      setDataForm(initialData)
    }
    setError(errFlag);
  }


  const valueOrNothing = (val) => val === '' ? null : val;
  const handleInputChange = e => {
    // setDataForm({ ...dataForm, [e.target.id]: e.target.value })
    setDataForm(prevDataForm => ({ ...prevDataForm, [e.target.id]: e.target.value }))
  }

  const handleInputBlur = e => {
    setDataForm({ ...dataForm, [e.target.id]: valueOrNothing(e.target.value.trim()) })
  }

  const handleClose = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  const labelClass = "block text-gray-700 font-bold uppercase";
  const customClass = "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm";

  const formFields = {
    fields: [
      {
        options: {
          name: "name",
          type: "text",
          value: name,
          placeholder: "Nombre de la Mascota",
        },
        label: {
          name: "Nombre de la Mascota",
          labelClass
        }
      },
      {
        options: {
          name: "propietario",
          type: "text",
          value: propietario,
          placeholder: "Nombre del Propietario"
        },
        label: {
          name: "Propietario",
          labelClass
        }
      },
      {
        options: {
          name: "email",
          type: "email",
          value: email,
          placeholder: "Correo Electronico"
        },
        label: {
          name: "Correo Electronico",
          labelClass
        }
      },
      {
        options: {
          name: "alta",
          type: "date",
          value: alta,
        },
        label: {
          name: "Fecha de alta",
          labelClass
        }
      },
      {
        options: {
          name: "sintomas",
          type: "textarea",
          value: sintomas,
          placeholder: "Describe los sintomas"
        },
        label: {
          name: "Sintomas",
          labelClass
        }
      }
    ],
    actions: {
      click: () => setError(false),
      blur: handleInputBlur,
      change: handleInputChange
    },
    css: {
      thema: "",
      customClass
    },
    message: {
      error: "requerido",
      exito: ""
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      {/* <p className={`font-bold text-2xl ${cssCustom}`}> {contador}</p> */}

      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {''}
        <span className="text-indigo-700 font-semibold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="shadow-md py-10 px-5 bg-white rounded-sm"
      >
        {error ?? "hay error"}
        {error && <Error > Todos los campos son requeridos </Error>}

        {
          formFields.fields.map(({ options, label }, i) => {
            return (
              <div className="mb-5" key={options.name}>
                <label
                  htmlFor={options.name}
                  className={label.labelClass}
                >{label.name}
                </label>
                <WrapField>
                  {/* <CustomButton callToAction={handleClose} value="()" /> */}
                  <CustomInput
                    options={options}
                    layout={formFields.css}
                    actions={formFields.actions}
                  />

                  {/* <CustomButton callToAction={handleSearch} value="Search" /> */}
                </WrapField>
                {options.value === null && <Error>{label.name} requerido</Error>}
              </div>
            );
          })
        }

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-shadow"
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div >
  )
}
