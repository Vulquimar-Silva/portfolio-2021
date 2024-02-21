import styled from 'styled-components'

export const ButtonContainer = styled.div`
.button {
  height: 47px;
  width: 190px;
}

.button button {
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

.button button:hover {
  filter: brightness(0.9);
}
`
