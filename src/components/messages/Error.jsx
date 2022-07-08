
export const Error = ({ children, timeClose }) => {
  const customClass = ['mb-2', 'bg-red-700', 'text-center', 'uppercase', 'p-2',
    'text-white', 'font-bold', 'rounded-md'].join(' ');

  return (
    <div className={customClass}>
      {children}
    </div>
  );
}
