import React, {FC } from 'react'

type ButtonProps = {
    link?: string
    children?: React.ReactNode
    className: string
    onClick?: () => void
}

const Button:FC<ButtonProps> = ({link, className, children, onClick}) => {
  return (
    <a href={link}  className={`${className} flex items-center justify-center md:gap-[10px] md:rounded-[10px]`} onClick={onClick} >
        {children}
    </a>
  )
}

export default Button;

// export const LoginBtn:FC<>= ({onClick}) => {
//   return (
//     <a
//      onClick={onClick}
//       href="http://app.joinrenda.com/login"
//       className="login-btn"
//     >
//       Login
//     </a>
//   );
// };
