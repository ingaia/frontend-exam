import { createGlobalStyle } from "styled-components";

import BackgroundLogin from "./../../assets/img/background.png";

const Style = createGlobalStyle`
  .page-login{
    background: url(${BackgroundLogin});
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .area-login{
      width: 100%;
      max-width: 285px;

   

      img{
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        animation-name: animationLogo;
        animation-duration: 5s;
        animation-timing-function: ease;
        animation-delay: 1s;

      }

      .area-login__form{
        width: 100%;
        margin-top: 2rem;

        .error-login {
          font-size: 14px;
          color: #f03434;
          text-align: center;
          text-shadow: 0px 2px 8px #A99E7E;
          margin-bottom: 1rem;
        }

        input{
          width: 100%;
          margin-bottom: 1rem;
          background: transparent;
          border: 0;
          border-bottom: 1px solid #A99E7E;
          padding:15px 5px ;
          color: #fff;
          caret-color: #A99E7E;

          &::-webkit-input-placeholder {
            color: #A99E7E;
          }
        }

             

        button{
          width: 106px;
          margin: 0 auto;
          border: 2px solid #A99E7E;
          display: block;
          padding: 11px 29px;
          margin-top: 2rem;
          text-transform: uppercase;
          color: #A99E7E;
          background: transparent;
          cursor: pointer;

          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px transparent;
          position: relative;
          -webkit-transition-property: color;
          transition-property: color;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;

          &:before{
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #A99E7E;
            -webkit-transform: scale(0);
            transform: scale(0);
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
          }

          &:hover, &:focus, &:active {
            color: white;
            box-shadow: 0px 2px 8px #A99E7E;

            &:before{
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
        }
      }
    }
  }
`;

export default Style;
