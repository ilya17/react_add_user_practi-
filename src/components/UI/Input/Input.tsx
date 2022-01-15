import React, { ChangeEvent } from "react";
import { InputProps } from "./interfaces";
import { InputStyled, LabelStyled } from "./styled";

export const Input = ({
    htmlFor,
    label,
    id,
    type = 'text',
    pattern,
    value,
    onChange
}: InputProps) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <>
            {label && <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>}
            <InputStyled id={id} type={type} pattern={pattern} value={value} onChange={inputHandler} />
        </>
    )
}