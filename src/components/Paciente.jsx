export const Paciente = ({
  paciente,
  setPacientes,
  setPaciente,
  deletePaciente,
  css: { buttonCss }

}) => {
  const handleDelete = () => {
    const isDel = confirm(`Realmente desea eliminar este paciente, ${paciente.id}`)
    if (isDel) {
      deletePaciente(paciente.id);
      //setPacientes(prev => prev.filter((el) => el.id !== paciente.id))
    }
  }

  return (
    <div className="container-cards bg-white m-4 p-4">
      <p className="uppercase font-bold p-2 ">
        Nombre: <span className=" normal-case font-normal ">{paciente.name}</span>
      </p>
      <p className="uppercase font-bold p-2 ">
        Proprietario: <span className=" normal-case font-normal ">{paciente.propietario}</span>
      </p>
      <p className="uppercase font-bold p-2 ">
        Email: <span className=" normal-case font-normal ">{paciente.email}</span>
      </p>
      <p className="uppercase font-bold p-2 ">
        Fecha de alta: <span className=" normal-case font-normal ">{paciente.alta}</span>
      </p>
      <p className="uppercase font-bold p-2 ">
        Sintomas: <span className=" normal-case font-normal ">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-start gap-4 p-2">
        <button className={buttonCss} onClick={() => {
          setPaciente(paciente);
        }}>Editar</button>
        <button className={buttonCss} onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}
