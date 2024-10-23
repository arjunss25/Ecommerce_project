

const Dropdown = ({isOpen,children}) => {
  return (
    <div  className={`absolute w-[15vw] h-[30vh] bg-white rounded-[0.5rem] z-[9999] shadow-lg p-5 transition-all duration-300 
      ${isOpen ? 'min-h-[30vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >{children}</div>
  )
}

export default Dropdown