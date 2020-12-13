import React from "react"
import { header, paragraph } from "../css/text.module.css"

type HeaderProps = {
    content: string,
}

export const Header = ({ content }: HeaderProps) => (
    <div className={header}>
        {content}
    </div>
)

type ParagraphProps = {
    children: string,
}

export const Paragraph = ({ children }: ParagraphProps) => (
    <div className={paragraph}>
        {children}
    </div>
)
