import styled, { css } from 'styled-components';
import { scaleUp, slideDown } from './animations/animations';

export const Container = styled.div`
  background-color: #fff;
  border: ${({ border }) => border || '1px solid #999999'};
  border-radius: 0.5em;
  margin: ${({ mg }) => mg || '1em'} auto;
  padding: ${({ pd }) => pd || '1.2em'} 1.2em;
  width: ${({ width }) => width || '60%'};

  h2.title {
    color: #000000;
    font-size: 1.1em;
    text-align: left;
  }

  ${({ card }) =>
	card &&
	css`
      width: 300px;

      h1 {
        margin: 0.5em 0;
      }
    `}

  ${({ form }) =>
	form &&
	css`
      animation-duration: 1300ms;
      animation-name: ${slideDown};
      animation-timing-function: ease-in-out;
      border: none;
      display: grid;
      justify-self: center;
      position: fixed;
      top: 3.3em;
      transform: translateY(50%, -50%);
      width: 60%;
      z-index: 500;

      h2 {
        margin: 0.3em 0;
      }
    `}
    
    ${({ addToList }) =>
	addToList &&
	css`
      background: none;
      border: none;
      color: white;
      display: grid;
      padding: 0;
      place-items: center;

      .plus {
        cursor: pointer;
      }
    `}

		${({ table }) =>
	table &&
	css`
      border-radius: 0;
      display: grid;
      grid-template-columns: minmax(240px, 0.18fr) repeat(
          auto-fit,
          minmax(190px, 0.2fr)
        );
      width: 100%;

      h1 {
        margin: 0.5em 0;
      }
    `}
    
		${({ product }) =>
	product &&
	css`
      width: 300px;
      h1 {
        margin: 0.5em 0;
      }

      position: relative;
      background-color: #fff;
      margin: 0.5em auto;
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
          font-size: 0.7em;
          display: grid;
          align-items: center;
          justify-content: center;
          // border-radius: 50%;
          padding: 0.2em 0;
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
	movie &&
	css`
      background-color: transparent;
      border: none;
      border-radius: 0;
      font-size: 1em;
      padding: 0;
      width: 300px;

      .movie {
        border: none;
        height: 150px;
        position: relative;

        .trade {
          font-family: Arial, sans-serif;
          font-weight: 900;
          height: 25%;
          position: absolute;
          width: 100%;
          z-index: 5;

          img {
            height: 80%;
            left: 0.4em;
            position: absolute;
            top: 0.4em;
            width: 6%;
          }

          .top10 {
            background-color: red;
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 26% 89%);
            color: #fff;
            font-size: 0.4em;
            font-weight: bold;
            height: 100%;
            line-height: 1.48em;
            margin: 0;
            padding: 0.8em 0 0 1em;
            position: absolute;
            right: 0;
            text-align: center;
            width: 12%;
            z-index: 5;

            .number {
              font-size: 2em;
              margin: 0;
              padding: 0;
            }
          }
        }

        .front {
          position: relative;

          img {
            border: none;
            margin: 0;
            padding: 0;
            transition: border-radius 600ms ease-out 250ms;
            width: 100%;
          }

          .info {
            bottom: 0.5em;
            color: #fff;
            position: absolute;
            width: 100%;

            h3 {
              margin: 0 0.5em;
            }

            p {
              margin: 0;
            }
          }
        }

        .back {
          background-color: #333;
          border-bottom-left-radius: 0.5em;
          border-bottom-right-radius: 0.5em;
          bottom: 5px;
          color: #fff;
          display: grid;
          grid-template-columns: 1fr;
          height: 150px;
          opacity: 0;
          padding: 0.7em;
          position: relative;
          transition: opacity 0.3s ease;
          visibility: hidden;
          width: 100%;

          .options {
            align-items: center;
            display: grid;
            font-size: 1em;
            grid-template-columns: repeat(7, 1fr);
            justify-items: center;
            text-align: center;

            p {
              border: 0.15em solid #888;
              border-radius: 50%;
              height: 2em;
              /* background-color: #444; */
              padding-top: 0.25em;
              width: 2em;

              &:hover {
                border-color: #ddd;
              }
            }

            .play {
              background-color: #fff;
              border: none;
              color: black;
              padding-left: 0.15em;
              padding-top: 0.37em;
            }

            .sub_menu {
              grid-column-start: 7;
              padding-top: 0.35em;
            }
          }

          .info {
            align-content: center;
            display: flex;
            gap: 10px;
            margin: 1em 0 1em 0.7em;

            .age {
              background-color: #990000;
              border: 1px solid #fff;
              border-radius: 50%;
              font-size: 0.7em;
              height: 2em;
              padding-top: 0.3em;
              text-align: center;
              width: 2em;
            }
          }

          .tags {
            margin: 0.5em;
          }

          p {
            font-size: 1em;
            margin-top: 0;
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
            border-top-left-radius: 0.5em;
            border-top-right-radius: 0.5em;
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
          animation-direction: alternate;
          animation-duration: 0.3s;
          animation-timing-function: ease-in;
          transform: scale(115%) translateY(-35%);
          z-index: 2400;
        }
      }
    `}
`;
