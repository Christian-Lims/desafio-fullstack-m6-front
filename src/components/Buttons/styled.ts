import styled from "styled-components";

export const ButtonPrimary = styled.button`
  height: 48px;
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-grey-0);
  padding: 0 1rem;

  &:hover {
    background-color: var(--color-primary-2);
    border: transparent;
  }

  &:focus {
    background-color: var(--color-primary-focus);
    border: var(--color-grey-0);
  }
`;

export const ButtonSecundary = styled.button`
  height: 32px;
  background: var(--color-primary-2);
  border: 1px solid var(--color-primary-focus);
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: var(--color-grey-0);
  padding: 0 1rem;

  &:hover {
    background-color: var(--color-primary);
    border: transparent;
  }

  &:focus {
    background-color: var((--color-primary-focus));
    border: var(--color-grey-0);
  }
`;


export const ButtonDelete = styled.button`
  height: 32px;
  background: var(--color-primary-focus);
  border: 1px solid var(--color-primary-focus);
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-grey-0);
  margin: 0 1rem 1rem 1rem;

  &:hover {
    background-color: var(--color-primary-2);
    border: transparent;
  }

  &:focus {
    background-color: var((--color-primary));
    border: var(--color-grey-0);
  }
`;
