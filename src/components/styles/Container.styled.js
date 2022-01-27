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
				
				h1 {
					margin: .5em 0;
				}
    `}
    ${({ movie }) => 
			movie && css`
        width: 300px;
        padding: 0;
        font-size: 1em;				
				border-radius: 0;
				background-color: transparent;

				.movie {
					position: relative;
					z-index: 10;
					border: none;
				}
               
        img {
            width: 100%;
            border: none;
            padding: 0;
            margin: 0; 
						
						transition: border-radius 300ms ease-in;
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

        .hiddenCard {
            position: absolute;
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

        transition: width 150ms ease-in-out 250ms;

        &:hover {
						img {
							border-top-left-radius: .5em;
							border-top-right-radius: .5em;
						}
            .hiddenCard {
              opacity: 1;
            }
            width: 450px;
        }

    `}
`;

