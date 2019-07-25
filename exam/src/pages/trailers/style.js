import { createGlobalStyle } from "styled-components";

import BackgroundLogin from "./../../assets/img/background.png";

const Style = createGlobalStyle`
  .page-trailers{
    background: url(${BackgroundLogin}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;

    position: absolute;
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    padding: 50px;
  
    .page-trailers__left{
      width: 100%;
      left: 0;
      margin-top: 4rem;

      img{
        margin: 0 auto;
        max-width: 100%;
        height: auto;
        display: block;
        animation-name: animationLogo;
        animation-duration: 5s;
        animation-timing-function: ease;
        animation-delay: 1s;
      }

      .menu-trailers{
        margin-top: 2rem;
        width: 100%;
        text-align: center;

        button{
          width: 106px;
          margin: 0 auto;
          
          display: inline-block;
          margin: 10px;
          margin-top: 2rem;
          text-transform: uppercase;
          color: #fff;
          padding: 10px 15px;
          background: transparent;
          cursor: pointer;
          border: 2px solid transparent;

          &.active{
            border: 2px solid #A99E7E;
            color: #A99E7E;

            
          }

          &.logout{
            &:hover{
              border: 2px solid #A99E7E;
              color: #fff;
            }

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
          }

          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px transparent;
          position: relative;
          -webkit-transition-property: color;
          transition-property: color;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;

          

          &:hover, &:focus, &:active {
           

            &:before{
              -webkit-transform: scale(1);
              transform: scale(1);
              box-shadow: 0px 2px 8px #A99E7E;
            }
          }
        }
      }
    }

    .page-trailers__right{
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .video__item {
        width: 100%;
        height: 250px;
        margin: 15px 40px;
        overflow: hidden;
        position: relative;
        border: 2px solid #a99e7e;
        cursor: pointer;

       

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          user-select: none;  
          transition: all .2s ease-in-out;
        }

        .video__item--title {
          width: 100%;
          background: rgba(0,0,0,0.7);
          color: #fff;
          z-index: 2;
          position: absolute;
          bottom: 0;
          text-align: center;
          padding: 20px 0;
          transition: .3s ease-in;
        }

        &:hover {
          .video__item--title {
          background: rgba(169,158,126,0.7);
          }
        }
      }

      .btn__load {
        width: 100%;
        max-width: 250px;
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

    @media(min-width: 768px){
      padding: 0;

      .page-trailers__left{
        width: 40%;
        position: fixed;
        z-index: 2;
        

        .menu-trailers{
          margin-top: 8rem;
          button{
            width: 254px;
            display: block;
            margin: 0 auto;
            margin-bottom: 2rem;
          }
        }
      }

      .page-trailers__right{
        width: 60%;
        padding-top: 4rem;
        border-left: 1px solid #4C4C4C;
        background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 98.3%);
      }
    }

    @media(min-width: 992px){
      .page-trailers__left{
        width: 30%;
      }

      .page-trailers__right{
        width: 70%;
        padding-bottom: 3rem;
        
        .video__item {
         width: calc(50% - 80px);
        }
      }
    }
  }

  .ReactModal__Overlay {
    z-index: 3;
    background-color: rgba(0,0,0,0.75)!important;
  }
  

  .ReactModal__Content--after-open {
    background-color: #000!important;
    border: 2px solid #a99e7e!important;
    max-width: 925.58px;
    max-height: 557.75px;
    left:0;
    right:0;
    margin:auto;
    top: auto;
    bottom: auto;



    .class-modal{
      width: 100%;
      height: 100%;
      
    }

    .embed-responsive {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      overflow: hidden;
    }

    .embed-responsive-item {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    iframe {
      margin: 0 auto;
      display: block;
    }

    .close-modal {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      background: transparent;
      border: 0;
      font-size: 17px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: .7;
      }
    }
`;

export default Style;
