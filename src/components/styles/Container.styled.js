import styled, { css } from 'styled-components';
import { scaleUp, slideDown } from './animations/animations';


export const Container = styled.div`
    background-color: #fff;
    width: ${({ width }) => width || '60%'};
    margin: ${({ mg }) => mg || '1em'} auto;
    border: ${({ border }) => border || '1px solid #999999'};
    border-radius: .5em;
    padding: ${({ pd }) => pd || '1.2em'} 1.2em;

		h2.title {
			color: #000000;
			font-size: 1.1em;
			text-align: left;
		}

    ${({ card }) => 
			card && css`
        width: 300px;

				h1 {
					margin: .5em 0;
				}
    `}
    
		${({ form }) => 
			form && css`				
				width: 60%;
				display: grid;
				justify-self: center;
				border: none;
				position: fixed;
				top: 3.3em;
				z-index: 500;
				transform: translateY(50%, -50%);
				animation-name: ${slideDown};
				animation-duration: 1300ms;
				animation-timing-function: ease-in-out;				
				
				h2 {					
					margin: .3em 0;
				}
    `}
    
    ${({ addToList }) => 
			addToList && css`
				padding: 0;
				display: grid;
				place-items: center;
				border:none;
				background: none;
				color: white;

				.plus {
					cursor: pointer;
				}
    `}

		${({ table }) => 
			table && css`

        width: 100%;
				border-radius: 0;
				display: grid;
				grid-template-columns: minmax(240px, .18fr) repeat(auto-fit, minmax(190px, .2fr));

				h1 {
					margin: .5em 0;
				}
    `}
    
		${({ product }) => 
			product && css`
        width: 300px;
				h1 {
					margin: .5em 0;
				}

				position: relative;
				background-color: #fff;
				margin: .5em auto;
				padding: 1.2em;
				overflow: hidden;
				border: none;
				
				.status {
					margin: 0;
					display: grid;
					justify-items: end;
					align-items: start;
					text-align: center;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 20;
					width: 100%;
					height: 5%;
					color: white;
					
					.banner {
						position: relative;
						top: 20px;
						right: -7%;
						font-size: .7em;
						display: grid;
						align-items: center;
						justify-content: center;
						// border-radius: 50%;
						padding: .2em 0;
						width: 35%;
						// height: 60px;
						background-color: #02641e;
						transform: rotate(45deg) translate(2%, -10%);
					}
				}

				.out {
					background-color: #c40606 !important;
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
					
					
					.trade {
						font-family: Arial, sans-serif;
						width: 100%;
						height: 25%;
						font-weight: 900;
						position: absolute;
						z-index: 5;
						
						img {
							position: absolute;
							left: .4em;
							top: .4em;
							width: 6%;
							height: 80%;
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
							padding: .8em 0 0 1em;
							margin: 0;
							clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 26% 89%);
							width: 12%;
							height: 100%;
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
							transition: border-radius 600ms ease-out 250ms;
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
								/* top: -38px;
								left: -20px; */
							}
							.top10 {
								visibility: hidden;
							}
						}							
						img {
							border-top-left-radius: .5em;
							border-top-right-radius: .5em;
						}
						.front {
							/* bottom: 50px;
							right: 25px;								 */
						}
						.back {
							opacity: 1;
							visibility: visible;
						}
						
						animation: ${scaleUp};
						animation-duration: .3s;
						animation-timing-function: ease-out;
						animation-direction: alternate;
						transform: scale(115%) translateY(-35%);	
						z-index: 2400;
					}
				}
				
        
				
				`}
`;

