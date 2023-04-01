import styled from "styled-components";

export const LiCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-3);
  width: 300px;
  padding: 1rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  gap: 1rem;

  h2{
    font-weight: 600;
      	font-size: 18px;
		color: var(--color-primary-2);
  }

  p{
    font-weight: 400;
    font-size: 14px;
	color: var(--color-grey-1);
  }

  span{
    font-weight: 400;
    font-size: 12px;
	color: var(--color-grey-1));
  }

  button{
    height: 24px;
    background: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-grey-0);

    &:hover {
        background-color: var(--color-primary-2);
        border: transparent;
    }

    &:focus {
        background-color: var((--color-primary));
        border: var(--color-grey-0);
    }
  }

  
	@media (max-width: 400px) {
        width: 90%;
        gap: 0.5rem;
	}	
`;
