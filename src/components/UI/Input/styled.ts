import styled from 'styled-components';

export const InputStyled = styled.input`
    font-style: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    &:focus {
    outline: none;
    border-color: #4f005f;
    }
`;

export const LabelStyled = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;