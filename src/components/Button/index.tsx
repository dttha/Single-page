import React from 'react'

function Button({ children, className, ...props }: { children?: any, className?: string }) {
  return (
    <div className={"button " + className} {...props} >
      {children}
    </div>
  )
}
export default React.memo(Button)
