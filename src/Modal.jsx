import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from './Button'

const Modal = ({ buttonCaption, children }, ref) => {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
  )
}

export default forwardRef(Modal)
