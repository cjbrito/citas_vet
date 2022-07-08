export const CustomLabel = () => {

  return (
    <label
      htmlFor={owner || "propietario"}
      className={lblClassName || "block text-gray-700 font-bold uppercase"}
    >
      {lblName || "Nombre Propietario"}
    </label>
  )
}
