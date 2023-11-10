import { HTMLAttributes, ReactNode } from "react";

export type ChildrenProps = { children: ReactNode } & HTMLAttributes<HTMLDivElement>;
export type PopupCardProps = { closeButton: boolean } & ChildrenProps;
