import React, { useState, useEffect } from 'react'
import useDebounce from 'helps/useDebounce'
import { componentSearchType } from 'types'

export default function Search({ onChange }: componentSearchType) {
    const [term, setTerm] = useState('')
    const debounceSearchTerm = useDebounce(term, 500)

    useEffect(
        () => {
            if(debounceSearchTerm) {    
                if(onChange) onChange(debounceSearchTerm)
            }
        },
        [debounceSearchTerm, onChange]
    )

    return <div>
        <input type="search" value={term} onChange={(event) => setTerm(event.target.value)} />
    </div>
}