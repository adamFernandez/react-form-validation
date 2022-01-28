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
					border: none;
					height: 150px;

					transition: width 150ms ease-in-out 250ms;
					
					img {
						position: relative;
						z-index: 2;
						border: 1px solid red;
					}

					.trade {
						font-family: Arial, sans-serif;
						font-weight: 900;
						position: absolute;
						z-index: 5;
						left: .4em;
						top: .3em
					}

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
						padding: .7em;
            border-bottom-left-radius: .5em;
            border-bottom-right-radius: .5em;
            display: grid;
            grid-template-columns: 1fr;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;

						.options {
							font-size: 1em;
							display: grid;
							grid-template-columns: repeat(7, 1fr);
							justify-items: center;
							text-align: center;
							align-items: center;
							
							p {
								height: 2em;
								width: 2em;
								padding-top: .3em;
								background-color: #444;
								border: 2px solid #666;
								border-radius: 50%;
										
							}

							.play {
								color: black;
								border: none;
								padding-top: .4em;
								padding-left: .2em;
								background-color: #fff;
							}

							.sub_menu {
								grid-column-start: 7;
							}
						}

						.info {
							display: flex;
							gap: 10px;
							align-content: center;
							margin: 1em 0 1em .7em;

							.age {
								font-size: .7em;
								width: 2em;
								height: 2em;
								padding-top: .3em;
								text-align: center;
								border: 1px solid #fff;
								border-radius: 50%;
								background-color: #990000;
							}							
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

							z-index: 10;
							width: 350px;
					}
				}
				
        
				
				`}
				`;

