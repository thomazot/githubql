import React, { useState, useEffect } from 'react'
import useDebounce from 'helps/useDebounce'
import { componentSearchType } from 'typings'
import * as S from './style'
import { MdSearch } from "react-icons/md"

export default function Search({ onChange }: componentSearchType) {
    const [term, setTerm] = useState('')
    const [focusInput, setFocusInput] = useState(false)
    const debounceSearchTerm = useDebounce(term, 500)

    useEffect(
        () => {
            if(debounceSearchTerm) {    
                if(onChange) onChange(debounceSearchTerm)
            }
        },
        [debounceSearchTerm, onChange]
    )

    return (
    <S.Container>
        <S.InputIcon onLight={focusInput}>
            <S.Input type="text" onFocus={() => setFocusInput(true)} onBlur={() => setFocusInput(false)} value={term} onChange={(event) => setTerm(event.target.value)} />
            <S.ButtonIcon><MdSearch /></S.ButtonIcon>
        </S.InputIcon>
    </S.Container>
    )
}