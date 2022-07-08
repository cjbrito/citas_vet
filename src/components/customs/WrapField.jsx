import { useEffect } from 'react'

export const WrapField = ({ children }) => {
  return (
    <div className="flex">
      {children}
    </div>
  )
}
