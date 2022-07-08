import { useEffect, useState } from 'react'

export const CustomButton = ({ callToAction, value, customClass }) => {
  return (
    <button onClick={callToAction} className={customClass}>{value}</button>
  )
}
