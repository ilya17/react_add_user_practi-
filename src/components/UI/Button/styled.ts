import styled from 'styled-components';

export const ButtonStyled = styled.button`
    font-style: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
    transition: .3s all;

    &:hover,
    &:active {
        background: #741188;  
        border-color: #741188;
        transition: .3s all;
    }

    &:focus {
        outline: none;
        transition: .3s all;
    }

    &:disabled {
        background: #ccc;
        border-color: #ccc;
        pointer-events: none;
    }
`;