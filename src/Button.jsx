const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="rounded-md bg-stone-800 text-stone-50 py-2 px-2 mr-2 hover:bg-stone-700">
      {children}
    </button>
  )
}

export default Button
