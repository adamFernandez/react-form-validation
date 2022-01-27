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
				border: none;

				.movie {
					position: relative;
					z-index: 10;
					border: none;
					height: 150px;

					transition: width 150ms ease-in-out 250ms;

					
					.front {						
						position: relative;
						
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
							
							h3 {
								margin: 0 .5em;
								
							}
							
							p {
								margin: 0;
							}            
						}
					}
					
					.back {
						position: relative;
						bottom: 5px;
            background-color: #222;
            color: #fff;
            width: 100%;
            height: 150px;
            border-bottom-left-radius: .5em;
            border-bottom-right-radius: .5em;
            display: grid;
            grid-template-columns: 1fr;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;

						.options {
							margin: .5em;
							display: grid;
							grid-template-columns: repeat(8, 1fr);
							justify-items: center;

							.sub_menu {
								grid-column-start: 8;
							}
						}

						.info {
							.age {
								width: 1.5em;
								height: 1.5em;
								padding-top: .1em;
								text-align: center;
								border: 1px solid #fff;
								border-radius: 50%;
								background-color: #990000;
							}
							display: flex;
							align-content: center;
							margin: .5em;
						}

						.tags {
							margin: .5em;
						}

            p {
							margin-top: 0;
							font-size: 1em;
            }
					}

					&:hover {
							img {
								border-top-left-radius: .5em;
								border-top-right-radius: .5em;
							}
							.front {
								bottom: 50px;
								right: 25px;
							}
							.back {
								opacity: 1;
								right: 25px;
								bottom: 55px;
							}
							width: 350px;
					}
				}
				
        
				
				`}
				`;

