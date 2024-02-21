import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*  import google fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

  :root {
    --global-color:#DC143C; 
    --background: #f0f2f5;
    --background-services: #222;
    --red: #DC143C;
    --green: #33CC95;

    --text-black: #111;
    --text-white: #fff;
    --menu-gray: #333;

  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

html{
    scroll-behavior: smooth;
}


/* custom scroll bar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    background-repeat: no-repeat;
    object-fit: cover;
  }

  .max-width{
    max-width: 1300px;
    padding: 0 50px;
    margin: auto;
  }

@media(max-width: 947px){

.styleButton {
  background: none;
  border: none;
}

.menu-btn{
    display: block;
    z-index: 999;
}
.menu-btn i.active:before{
    content: "\f00d";
}
.navbar .menu{
    position: fixed;
    height: 100vh;
    width: 100%;
    left: -100%;
    top: 0;
    background: #111;
    text-align: center;
    padding-top: 80px;
    transition: all 0.3s ease;
}
.navbar .menu.active{
    left: 0;
}
.navbar .menu li{
    display: block;
}
.navbar .menu li a{
    display: inline-block;
    margin: 20px 0;
    font-size: 25px;
}

.colorMenu {
  color: #222;
}
}

.css-d5qmmo-MuiSpeedDial-root .MuiSpeedDial-actions {
  position: fixed !important;
  right: 0 !important;
  bottom: 85px !important;
  z-index: 999 !important;
  padding: 20px !important;
  border-radius: 50px !important;
}
.css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab {
  position: fixed !important;
  right: 20px !important;
  bottom: 10px !important;
  z-index: 999 !important;
  padding: 20px !important;
  border-radius: 50px !important;
}

.css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab {
  background: ${props => props.theme.colorTheme || '#DC143C'} !important;
}

.MuiSpeedDial-fab {
    background:  ${props => props.theme.colorTheme || '#DC143C'} !important;
}
`