import React from 'react'

export type userType = {
    id: string
    name: string
    description: string
}

export type userNodeType = {
    node: userType
}

export type componentSearchType = {
    onChange ?: (value: string) => void
}

export type ThemeType = {
    children: React.ReactNode
}

export interface SearchInputIconProps {
    readonly onLight ?: boolean;
}