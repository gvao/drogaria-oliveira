import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { ReactNode } from "react"

interface LinkProps extends NextLinkProps {
    children: ReactNode
}

export const Link = ({ href, children }: LinkProps) => (
    <NextLink
        href={href}
    >
        {children}
    </NextLink>
)