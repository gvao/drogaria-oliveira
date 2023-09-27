import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ChildrenProps = { children: ReactNode } & HTMLAttributes<HTMLDivElement>

const Card = ({ children, ...props }: ChildrenProps) => {
    return (
        <div className="container bg-cyan-100 p-4 rounded" {...props}>
            {children}
        </div>
    )
}

export const PopupCard = ({ children, ...props }: ChildrenProps) => (
    <Card
        {...props}
    >
        {children}
    </Card>
)