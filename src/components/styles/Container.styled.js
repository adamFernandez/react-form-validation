import styled, { css } from 'styled-components';


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
					
					.trade {
						font-family: Arial, sans-serif;
						width: 100%;
						height: 5vh;
						font-weight: 900;
						position: absolute;
						
						img {
							position: absolute;
							z-index: 5;
							left: .4em;
							top: .4em;
							width: 6%;
							height: 3vh;
						}
						
						.top10 {
							font-size: .4em;
							font-weight: bold;
							line-height: 1.48em;
							color: #fff;
							position: absolute;
							z-index: 5;
							right: 0;
							text-align: center;
							padding: .3em 0 0 1em;
							margin: 0;
							clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 26% 89%);
							width: 12%;
							height: 4vh;
							background-color: red;

							.number {
								margin: 0;
								padding: 0;
								font-size: 2em;
							}
						}
					}				

					.front {						
						position: relative;
						
						img {
							width: 100%;
							border: none;
							padding: 0;
							margin: 0; 
							
							transition: border-radius 600ms ease-out 250ms;
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
            background-color: #333;
            color: #fff;
            width: 100%;
            height: 150px;
						padding: .7em;
            border-bottom-left-radius: .5em;
            border-bottom-right-radius: .5em;
            display: grid;
            grid-template-columns: 1fr;
            opacity: 0;
						visibility: hidden;
            transition: opacity 0.3s ease;

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
								padding-top: .25em;
								/* background-color: #444; */
								border: .15em solid #888;
								border-radius: 50%;

								&:hover {
									border-color: #ddd;
								}
										
							}

							.play {
								color: black;
								border: none;
								padding-top: .37em;
								padding-left: .15em;
								background-color: #fff;
							}

							.sub_menu {
								padding-top: .35em;
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
							.trade {
								img {
									z-index: 40;
									top: -38px;
									left: -20px;
									width: 8%;
									height: 5vh;
								}
								.top10 {
									z-index: 0;
									left: 0;
								}
							}							
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
								visibility: visible;
								right: 25px;
								bottom: 55px;
							}

							z-index: 40;
							width: 350px;
					}
				}
				
        
				
				`}
				`;

