import styled from 'styled-components';

export const Container = styled.div`
/* navbar styling */
.navbar {
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 30px 0;
  font-family: 'Ubuntu', sans-serif;
  transition: all 0.3s ease;
}

.navbar.sticky{
  padding: 15px 0;
  background: ${props => props.theme.colorTheme};
}

.navbar .max-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.navbar .logo a{
  color: var(--text-white);
  font-size: 35px;
  font-weight: 600;
}

.navbar .logo a span{
  color: ${props => props.theme.colorTheme};
  transition: all 0.3s ease;
}

.navbar.sticky .logo a span{
  color: var(--text-white);
}

.navbar .menu li{
  list-style: none;
  display: inline-block;
}

.navbar .menu li a{
  display: block;
  color: var(--text-white);
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease
}

.navbar .menu li a:hover{
  color: ${props => props.theme.colorTheme};
}

.navbar.sticky .menu li a:hover{
  color: var(--text-white);
}

.menu-btn{
  color: var(--text-white);
  font-size: 24px;
  cursor: pointer;
  display: none;
}


/* responsive - inicio*/

@media(max-width: 947px){

  .menu-btn{
      display: block;
      z-index: 999;
      font-size: 24;
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

}

`