import styled from 'styled-components';

export const ContactStyle = styled.section`
/* contact section styling */
.contact .title::after{
  content:"por email";
}

.contact .contact-content .column {
  width: calc(50% - 30px);
}

.contact .contact-content .text {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.contact .contact-content .left p{
  text-align: justify;
}

.contact .contact-content .left .icons {
  margin: 10px 0;
}

.contact .contact-content .row {
  display: flex;
  height: 65px;
  align-items: center;
}

.contact .contact-content .row .info {
  margin-left: 20px;
}

.contact .contact-content .info i{
  font-size: 25px;
  color: ${props => props.theme.colorTheme};
}

.contact .contact-content .info .head{
  font-weight: 500;
}

.contact .contact-content .info .sub-title{
  color: #333;
}

.contact .right form .fields {
  display: flex;
}

.contact .right form .field,
.contact .right form .fields .field {
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
}

.contact .right form .textarea {
  height: 80px;
  width: 100%;
}

.contact .right form .name {
  margin-right: 10px;
}

.contact .right form .email {
  margin-left: 10px;
}

.contact .right form .field input,
.contact .right form .textarea textarea {
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.contact .right form .field input:focus,
.contact .right form .textarea textarea:focus{
    border-color: #b3b3b3;
}

.contact .right form .textarea textarea  {
  padding-top: 10px;
  resize: none;
}

.contact .right form .button {
  height: 47px;
  width: 190px;
}

.contact .right form .button button {
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.theme.colorTheme};
  background: ${props => props.theme.colorTheme};
  color: var(--text-white);
  font-size: 20px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact .right form .button button:hover {
  filter: brightness(0.9);
}
  `