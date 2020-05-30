import styled from "styled-components"
import { SearchInputIconProps } from 'typings';

export const Input = styled.input`
    height: 50px;
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`

export const ButtonIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 20px;
    border: 0;
    background: none;
    width: 50px;
    height: 50px;
`



export const InputIcon = styled.div<SearchInputIconProps>`
    display: flex;
    width: 600px;
    max-width: calc(100% - 30px);
    border: solid 1px rgba(0,0,0,.1);
    transition: all .2 ease;

    ${Input} {
        flex: 1;
        min-width: 0;
        border: 0;
    }

    ${ButtonIcon} {
        flex: 0 0 50px;
    }

    ${({ onLight }) => onLight && `
        border-color: #000;
    `}
`