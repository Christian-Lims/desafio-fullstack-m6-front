import styled from "styled-components";

export const LoadingDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 20, 0.5);
  z-index: 3;

  div {
    border: 16px solid var(--color-grey-1);
    width: 130px;
    height: 130px;
    border-top: 16px solid var(--color-primary);
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
