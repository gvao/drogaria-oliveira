import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
} 

export const Button = ({ children, className, ...props }: ButtonProps) => {
    
    const twClassName = twMerge(`items-center py-2 px-4 bg-cyan-200 hover:bg-cyan-300 cursor-pointer rounded font-bold`, className)

    return (
        <button className={twClassName} {...props}>{children}</button>
    )
}