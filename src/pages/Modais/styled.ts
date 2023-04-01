import styled from "styled-components";

export const DivModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 20, 0.5);
  z-index: 1;


  h1{
    color: var(--color-primary-2);
    font-weight: 600;
    font-size: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    background: var(--color-grey-3);
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    width: 310px;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: var(--color-grey-2);
      padding: 1rem;
      border-radius: 4px 4px 0px 0px;

      button {
        font-weight: 400;
        font-size: 16px;
        color: var(--color-grey-1);
        border: none;
        background-color: transparent;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 0;
      color: var(--color-primary-2);
      margin-bottom: 0.3rem;
      align-self: flex-end;
    }

    label {
      font-weight: 400;
      font-size: 14px;
      color: var(--color-grey-0);
    }

    input,
    select {
      height: 48px;
      width: 100%;
      background: var(--color-grey-2);
      border: 1.2182px solid var(--color-grey-2);
      border-radius: 4px;
      padding: 0px 16.2426px;
      font-weight: 400;
      font-size: 14px;
      color: var(--color-grey-1);
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        padding: 0 1rem;
      }
    }
  }

`;
