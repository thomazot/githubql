import React from "react"
import { GoMarkGithub } from "react-icons/go"
import * as S from './style';

export default function Logo() {
    return (
        <S.Logo>
            <a href="/" title="GitHub Search">
                <GoMarkGithub />
            </a>
        </S.Logo>
    )
}
