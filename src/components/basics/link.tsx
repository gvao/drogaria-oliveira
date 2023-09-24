import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { ReactNode } from "react"

interface LinkProps extends NextLinkProps {
    children: ReactNode
    className?: string
}

export const Link = ({ href, children, ...props }: LinkProps) => (
    <NextLink
        href={href}
        {...props}
    >
        {children}
    </NextLink>
)