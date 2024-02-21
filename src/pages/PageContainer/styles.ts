import { motion } from "framer-motion";
import styled from 'styled-components';
import Banner from 'assets/images/banner.jpg';

export const HeaderPage = styled.header`

  .home{
    display: flex;
    background: url(${Banner}) no-repeat center;
    height: 100vh;
    color: var(--text-white);
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
  }

  .home .max-width{
    width: 100%;
    display: flex;
  }

  .home .max-width .row{
    margin-right: 0;
  }

  .home .home-content .text-1{
    font-size: 27px;
  }

  .home .home-content .text-2{
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
  }

  .home .home-content .text-3{
    font-size: 40px;
    margin: 5px 0;
  }

.home .home-content .text-3 span{
    color: ${props => props.theme.colorTheme};
    font-weight: 500;
  }
  
  .home .home-content a{
    display: inline-block;
    background: ${props => props.theme.colorTheme};
    color: var(--text-white);
    padding: 12px 36px;
    font-size: 25px;
    font-weight: 400;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid ${props => props.theme.colorTheme};
    transition: all 0.3s ease;
  }

  .home .home-content a:hover{
    filter: brightness(0.9);
  }

  /* all similar content styling code */

  section {
    padding: 100px 0;
  }

  .about, .services, .skills, .teams, .contact {
    font-family: 'Poppins', sans-serif;
  }

  .about .about-content, 
  .services .services-content, 
  .skills .skills-content, 
  .contact .contact-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  
  section .title {
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
  }

  section .title::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: var(--text-black);
    transform: translateX(-50%);
  }

  section .title::after {
    position: absolute;
    bottom: -16px;
    left: 50%;
    font-size: 20px;
    color: ${props => props.theme.colorTheme};
    padding: 5px;
    background: var(--text-white);
    transform: translateX(-50%);
  }

/* start about e section style */

  .about .title::after {
    content: 'quem eu sou';
  }

  .about .about-content .left {
    width: 45%;
  }

  .about .about-content .left img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 8px;
    border: 0.6px inset rgba(0,0,0,0.1);
  }

  .about .about-content .right {
    width: 55%;
  }

  .about .about-content .right .text {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .about .about-content .right .text span{
    color: ${props => props.theme.colorTheme};
  }

  .about .about-content .right p {
    text-align: justify;
  }

  .about .about-content .right a {
    display: inline-block;
    background: ${props => props.theme.colorTheme};
    color: var(--text-white);
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid ${props => props.theme.colorTheme};
    transition: all 0.3s ease;
  }

  .about .about-content .right a:hover{
    filter: brightness(0.9);
  }

/* services section styling */
.services, .teams {
  color: var(--text-white);
  background: var(--background-services);
}
.services .title::before, 
.teams .title::before{
  background: var(--background);
}
.services .title::after, 
.teams .title::after {
  content: 'o que eu forneço';
  background: var(--background-services);
}
.services .services-content .card {
  width: calc(33% - 20px);
  background: var(--menu-gray);
  text-align: center;
  border-radius: 6px;
  padding: 50px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.services .services-content .card:hover {
  background: ${props => props.theme.colorTheme};
}

.services .services-content .card i{
  font-size: 50px;
  color: ${props => props.theme.colorTheme};
  transition: color 0.3s ease;
}

.services .services-content .card:hover{
    background: ${props => props.theme.colorTheme};
}

.services .services-content .card:hover i{
  color: var(--text-white);
}

.services .services-content .card .box {
  transition: all 0.3s ease;
}
.services .services-content .card:hover .box {
  transform: scale(1.05);
}

.services .services-content .card .text {
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0 7px 0;
}

/* start skills section styling */

.skills .title::after {
  content: 'habilidades';
}

.skills .skills-content .column {
  width: calc(50% - 30px);
}

.skills .skills-content .left .text {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.skills .skills-content .left p {
  text-align: justify;
}

.skills .skills-content .left a {
    display: inline-block;
    background: ${props => props.theme.colorTheme};
    color: var(--text-white);
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid ${props => props.theme.colorTheme};
    transition: all 0.3s ease;
}

.skills .skills-content .left a:hover {
  filter: brightness(0.9);
}

.skills .skills-content .right .bars {
  margin-bottom: 15px;
}

.skills .skills-content .right .info {
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
}

.skills .skills-content .right span{
  font-weight: 500;
  font-size: 18px;
}

.skills .skills-content .right .line {
  height: 5px;
  width: 100%;
  background: lightgrey;
  position: relative;
}

.skills .skills-content .right .line::before{
  content: "";
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  background: ${props => props.theme.colorTheme};
}

.skills-content .right .html::before{
  width: 80%;
}

.skills-content .right .css::before{
  width: 65%;
}

.skills-content .right .javascript::before{
  width: 75%;
}

.skills-content .right .react::before{
  width: 60%;
}

.skills-content .right .electron::before{
  width: 65%;
}

.skills-content .right .node::before{
  width: 50%;
}

/* teams section */
.teams .title::after {
  content: "Web & Desktop";
}

.teams .carousel .card {
  background: var(--background-services);
  margin-top: -1%;
  border-radius: 6px;
  padding: 20px 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.teams .carousel .card:hover {
  background: transparent;
}

.teams .carousel .card .box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

.teams .carousel .card .text {
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0 7px 0;
}

.teams .carousel .card img {
  margin-top: 10px;
  max-height: 350px;
  min-height: 350px;
  width: 100%;
  border-radius: 2%;
  object-fit: fill;
  background-repeat: no-repeat;
  border: 2px solid var(--menu-gray);
  transition: all 0.4s ease;
}


.teams .carousel img {
      max-width: 100%;
      -moz-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
  }

.teams .carousel img:hover{
  border-color: ${props => props.theme.colorTheme};
  -moz-transform: scale(0.98);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.mySwiper {
  margin-top: -40px !important;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: ${props => props.theme.colorTheme} !important;
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  color: ${props => props.theme.colorTheme}  !important;
}

.swiper-button-next:after, .swiper-button-prev:after {
  color: ${props => props.theme.colorTheme}  !important;
}

.desktop {
  display: flex;
  width: 100%;
}

.mobile {
  display: none;
}

/* responsive media query start */
@media (max-width: 1104px) {
      .desktop {
        display: none;
      }
      
        .mobile {
          display: flex;
          justify-content: center; 
          align-items: center;
          width: 100%;
          margin: auto;
          padding: auto;
        }

        .swiper-horizontal>.swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal {
          width: 100% !important;
          margin-top: 6px !important;
        }

      .teams .carousel .card img {
        max-width: 105%;
        max-height: 100%;
        min-height: 300px;
        object-fit: cover !important;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid var(--menu-gray);
      }

      .teams .carousel img:hover{
        border-color: ${props => props.theme.colorTheme};
      }

    .about .about-content .left img{
        height: 350px;
        width: 350px;
    }
}
@media (max-width: 991px) {
    .max-width{
        padding: 0 50px;
    }
}
@media (max-width: 947px){
    .menu-btn{
        display: block;
        z-index: 999;
        top: 0;
        margin-right: -15%;
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
    .home .home-content .text-2{
        font-size: 70px;
    }
    .home .home-content .text-3{
        font-size: 35px;
    }
    .home .home-content a{
        font-size: 23px;
        padding: 10px 30px;
    }
    .max-width{
        max-width: 930px;
    }
    .about .about-content .column{
        width: 100%;
    }
    .about .about-content .left{
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .about-content .right{
        flex: 100%;
    }
    .services .services-content .card{
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }
    .skills .skills-content .column,
    .contact .contact-content .column{
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media (max-width: 690px) {
      .menu-btn{
        margin-right: -13%;
      }

      .max-width{
          padding: 0 23px;
      }
      .home .home-content .text-2{
          font-size: 60px;
      }
      .home .home-content .text-3{
          font-size: 32px;
      }
      .home .home-content a{
          font-size: 20px;
      }
      .services .services-content .card{
          width: 100%;
      }
      .services .title::after {
        font-size: 16px;
      }
  }
  @media (max-width: 600px) {
      .menu-btn{
        margin-right: -20%;
      }
  }
  @media (max-width: 500px) {
    
      .teams .carousel .card img {
        max-width: 100% !important;
        max-height: 220px;
        min-height: 220px;
        object-fit: cover !important;
        background-repeat: no-repeat;
      }
      .menu-btn{
        margin-right: -35%;
      }
      .home .home-content .text-2{
          font-size: 50px;
      }
      .home .home-content .text-3{
          font-size: 27px;
      }
      .about .about-content .right .text,
      .skills .skills-content .left .text{
          font-size: 19px;
      }
      .contact .right form .fields{
          flex-direction: column;
      }
      .contact .right form .name,
      .contact .right form .email{
          margin: 0;
      }
      .right form .error-box{
        width: 150px;
      }
  }
`

export const MotionConstraints = styled(motion.div)`
    display: flex;
    align-items: flex-end;
    width: 180vh;
    height: 75vh;

    @media(max-width: 690px){
    align-items: flex-end;
    width: 35vh;
    height: 70vh;
    }
`;
