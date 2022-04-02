import React from 'react'
export default function Button({ children, className, ...props }: { children?: any, className?: string }) {

  return (
    <div className={"button " + className} {...props} >
      {children}
    </div>
  )
}
