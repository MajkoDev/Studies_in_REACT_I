import React, {useEffect, useRef} from 'react'

// ! we want input to be focused on page load

// ? USEREF
// ? access DOM nodes directly within functional components

function FocusInput() {

    const inputRef = useRef(null)
    
    useEffect(() => {
        // focus input element with method
        inputRef.current.focus()
    }, [])

  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput