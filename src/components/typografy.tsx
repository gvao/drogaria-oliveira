import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface TypografyProps extends HTMLAttributes<HTMLHeadingElement> { }

export const Title = ({ children, className }: TypografyProps) => (
    <h1 className={twMerge("text-center text-4xl font-bold", className)} >
        {children}
    </h1>
)



export const Subtitle = ({ children, className }: TypografyProps) => {

    const twClassName = twMerge("text-center text-2xl font-semibold", className)

    return (
        <h2 className={twClassName} >{children}</h2>
    )
}