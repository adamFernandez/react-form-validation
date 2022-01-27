import styled, { css, keyframes } from 'styled-components';

const showInfo = keyframes`
    from {
        transform: scale(100%);
    }

    to {
        transform: scale(150%);
    }
`

export const Container = styled.div`
    background-color: #fff;
    width: ${({ width }) => width || '60%'};
    margin: ${({ mg }) => mg || '1em'} auto;
    border: ${({ border }) => border || '1px solid #999999'};
    border-radius: .5em;
    padding: ${({ pd }) => pd || '1.2em'} 1.2em;

    ${({ card }) => 
			card && css`
        width: 300px;
    `}
    ${({ movie }) => 
			movie && css`
			padding: 0;
			font-size: 1em;
			background-color: transparent;
			border-radius: 0;
			border: none;
			
			.movieCard {
					width: 300px;
					height: 100%;
					position: relative;
					transition: width 150ms ease 150ms;

					.front{
						position: relative;
						height: 100%;

						img {
							width: 100%;
							border: none;
							padding: 0;
							margin: 0;       									
						}

						.info {
							width: 100%;
							color: #fff;
							position: absolute;
							bottom: .5em;
							left: .5em;
	
							h1 {
								margin: 0;
							}
	
							p {
								margin: 0;
							}
						}           
					}        

					.back {
						border: 1px solid #blue;
						position: absolute;
						z-index: 10;
						visibility: hidden;
						background-color: #222;
						color: #fff;
						width: 100%;
						height: 200px;
						border-bottom-left-radius: .5em;
						border-bottom-right-radius: .5em;
						display: grid;
						grid-template-columns: repeat(4, 1fr);
						justify-content: center;
						justify-items: center;
						align-content: center;
						opacity: 0;
						transition: opacity 0.5s ease-in-out;    
						        

						h1 {
							margin-top: 0;
							font-size: 1em;
						}
					}
	
					
	
					&:hover {
						
						.back {
							opacity: 1;
							visibility: visible;							
							
						}
						.front {
							
						}
						
 						width: 400px;
						z-index: 10;
					}
        }

    `}
`;

