import { useEffect, useState } from 'react'

export const CustomInput = ({ options, actions, layout }) => {
  const TypeInput = (options.type === 'textarea') ? 'textarea' : 'input';

  return (

    <TypeInput
      autoComplete="off"
      id={options.name}
      name={options.name}
      className={layout.customClass}
      type={options.type}
      placeholder={options?.placeholder}
      value={options.value ?? ''}
      onClick={actions.click}
      onBlur={actions.blur}
      onChange={actions.change}
    />
  )
}
