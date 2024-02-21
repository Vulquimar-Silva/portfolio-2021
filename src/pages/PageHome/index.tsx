import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import $ from 'jquery';

import { MotionConstraints, PaletteColor } from './styles';
import { changeTheme } from '../../App'

import PaletteIcon from '@mui/icons-material/Palette';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));



export default function PageHome() {

  const [direction] = useState<SpeedDialProps['direction']>('up');

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  function refreshPage() {
    window.location.reload();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const constraintsRef = useRef(null);

  return (
    <>
      <section className="home" id='home'>
        <div className="max-width">

          <MotionConstraints ref={constraintsRef} >
            <motion.div
              className="home-content"
              dragConstraints={constraintsRef}
              drag
            >
              <div className="text-1">
                Olá, meu nome é
              </div>
              <div className="text-2">
                Vulquimar Silva
              </div>
              <div className="text-3">
                sou desenvolvedor  <Typed
                  className="typing"
                  strings={["full stack", "front end", "desktop", "mobile", "freelancer"]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />

              </div>
              <Link to="contact" smooth={true} duration={300} className="button-contact">Entrar em contato</Link>
            </motion.div>
          </MotionConstraints>
        </div>
      </section>

      <PaletteColor>
        <Box sx={{ position: 'fixed', m: 0, p: 0, right: '3px', zIndex: 999, bottom: '3px' }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial"
            icon={<PaletteIcon className='colorPalette' />}
            direction={direction}
          >

            <SpeedDialAction
              icon={<FormatPaintIcon color='error' />}
              tooltipTitle="vermelho"
              onClick={() => {
                changeTheme("red");
                refreshPage();
              }}
            />

            <SpeedDialAction
              icon={<FormatPaintIcon color='success' />}
              tooltipTitle="verde"
              onClick={() => {
                changeTheme("green");
                refreshPage();
              }} />

            <SpeedDialAction
              icon={<FormatPaintIcon color='primary' />}
              tooltipTitle="azul"
              onClick={() => {
                changeTheme("blue");
                refreshPage();
              }} />

            <SpeedDialAction
              icon={<FormatPaintIcon style={{ color: '#6959CD' }} />}
              tooltipTitle="roxo"
              onClick={() => {
                changeTheme("purple");
                refreshPage();
              }} />

            <SpeedDialAction
              icon={<FormatPaintIcon style={{ color: '#FFA500' }} />}
              tooltipTitle="laranja"
              onClick={() => {
                changeTheme("orange");
                refreshPage();
              }} />

            <SpeedDialAction
              icon={<FormatPaintIcon style={{ color: '#FF69B4' }} />}
              tooltipTitle="rosa"
              onClick={() => {
                changeTheme("pink");
                refreshPage();
              }} />
          </StyledSpeedDial>
        </Box>
      </PaletteColor>
    </>
  )
}
