import { forwardRef } from 'react'

const Input = ({ label, textarea, type }, ref) => {
  let cssStyles = 'rounded-md w-[20rem] text-stone-900 outline-none bg-stone-200  focus:border-4 focus:border-cyan-600'
  return (
    <div className="py-4">
      <label htmlFor="">{label}</label>
      <p>
        {textarea ? (
          <textarea ref={ref} className={cssStyles} />
        ) : (
          <input ref={ref} className={cssStyles} type={type} />
        )}{' '}
      </p>
    </div>
  )
}

export default forwardRef(Input)
