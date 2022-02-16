import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	align-content: center;
	justify-content: space-evenly;

	.title {
		width: 100%;
		text-align: center;
		font-size: 2em;
		color: #fff;
		border-bottom: 3px solid #fff;
	}

    ${({ auto }) => 
			auto && 
			css`
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		`}
		
		${({ row }) => 
			row && 
			css`
				// grid-template-rows: 1fr;

		`}
`;