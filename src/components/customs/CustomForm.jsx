import { useEffect, useState } from 'react'

export const CustomForm = (children) => {
  const [dataForm, setDataForm] = useState({});

  return (
    <form>
      <div className="flex">
        {children}
      </div>
    </form>
  )
}
