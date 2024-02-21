import { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-scroll';


import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import IconButton from '@mui/material/IconButton';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ForwardIcon from '@mui/icons-material/Forward';


const drawerWidth = 163;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function PageNavBar() {


  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  const handleDrawerClose = () => {
    setOpenMenu(false);
  };


  return (
    <>
      <Container>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <Link to="home" smooth={true} duration={300}>Portfo<span>lio.</span></Link>
            </div>
            <ul className="menu">
              <li><Link to="home" smooth={true} duration={300} className="menu-btn">Home</Link></li>
              <li><Link to="about" smooth={true} duration={300} className="menu-btn">Sobre</Link></li>
              <li><Link to="services" smooth={true} duration={300} className="menu-btn">Serviços</Link></li>
              <li><Link to="skills" smooth={true} duration={300} className="menu-btn">Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={300} className="menu-btn">Projetos</Link></li>
              <li><Link to="contact" smooth={true} duration={300} className="menu-btn">Contato</Link></li>
            </ul>

            <div className='menu-btn'>
              <Box
                role="presentation"
              >

                <CssBaseline />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(openMenu && { display: 'none', }) }}
                >
                  <MenuIcon sx={{ fontSize: 45, color: 'white', width: '100%' }} />
                </IconButton>

                <Drawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                    },
                  }}
                  variant="persistent"
                  anchor="right"
                  open={openMenu}
                >
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronLeftIcon sx={{ fontSize: 20, margin: "10px" }} /> : <ForwardIcon sx={{ fontSize: 30, marginLeft: "50px" }} />}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <HomeTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="home" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Home</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InfoTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="about" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Sobre</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <CodeTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="services" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Serviços</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <PsychologyTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="skills" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Skills</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ComputerTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="projects" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Projetos</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ContactPhoneTwoToneIcon sx={{ fontSize: 20, margin: "10px" }} /><Link to="contact" smooth={true} duration={300} className="menu-btn" onClick={handleDrawerClose}>
                            <span className='colorMenu'>Contato</span>
                          </Link>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />

                </Drawer>
              </Box>

            </div>
          </div>
        </nav>
      </Container>
    </>
  )
}