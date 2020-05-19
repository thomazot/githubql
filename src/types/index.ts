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