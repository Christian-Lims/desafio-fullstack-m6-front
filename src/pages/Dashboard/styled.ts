import styled from "styled-components";

export const DivDash = styled.div`
	display: flex;
	flex-direction: column;
	width: 95vw;
	padding: 1rem;
	top: 0;
	left: 0;
	position: absolute;

	ul{
		border-top: var(--color-grey-3) solid 6px;
		border-radius: 8px;
		padding: 1rem;
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		justify-content: space-around;
		max-width:100%
	}

	@media (max-width: 700px) {
			ul{
				flex-direction: column;
			}
		}	

`;

export const DivPerfil = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 10;
	
	h1{
		font-weight: 600;
      	font-size: 24px;
		color: var(--color-primary);
	}

	p{
		color: var(--color-grey-1);
		font-size: 14px;
		font-weight: 400;
	}

	@media (max-width: 500px) {
		
		p{
			font-size: 12px;
		}
	}	

`;


export const Nav = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	gap: 1rem;
	align-items: center;
	justify-content: space-around;

	div:nth-child(2) {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	@media (max-width: 700px) {
		
		div:nth-child(2) {
			flex-direction: column;
			
			button{
				height: 38px;
			}
		}
	}	

`;

