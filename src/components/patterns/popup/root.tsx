import { ReactNode } from "react"

type RootProps = {
    children: ReactNode,
}

export const Root = ({ children }: RootProps) => (
    <section
     id="popup-area"
     className="absolute top-0 left-0 z-50 bg-black bg-opacity-60 w-full h-screen flex justify-center items-center px-4"
    >
        {children}
    </section>
)