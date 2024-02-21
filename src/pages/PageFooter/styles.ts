import styled from 'styled-components';


export const StyleFooter = styled.footer`

    footer{
        background: #111;
        padding: 15px 23px;
        color: #fff;
        text-align: center;
    }
    footer span a{
        color: crimson;
        text-decoration: none;
    }
    footer span a:hover{
        text-decoration: underline;
    }

    .text-footer {
        color: ${props => props.theme.colorTheme};
    }
`