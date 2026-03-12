import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria, #f9f5e7);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal, #a7727d);
  border: 1px solid var(--cor-principal, #a7727d);
  height: 40px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal, #a7727d);
  border: 1px solid var(--cor-principal, #a7727d);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria, #f9f5e7);
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-secundaria, #f9f5e7);
    color: var(--cor-principal, #a7727d);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`
