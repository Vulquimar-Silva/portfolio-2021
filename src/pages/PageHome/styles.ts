import styled from 'styled-components'
import { motion } from "framer-motion";

export const MotionConstraints = styled(motion.div)`
    display: flex;
    align-items: flex-end;
    width: 170vh;
    height: 75vh;

    @media(max-width: 690px){
    align-items: flex-end;
    width: 35vh;
    height: 60vh;
    }

    .button-contact {
        cursor: pointer;
    }

`;

export const PaletteColor = styled(motion.div)`
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
        border-radius: 50px  !important;
    }

     .css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab {
        background: ${props => props.theme.colorTheme || '#DC143C'} !important;
     }

     .MuiSpeedDial-fab {
        background-color:  ${props => props.theme.colorTheme || '#DC143C'} !important;
    }
`;
