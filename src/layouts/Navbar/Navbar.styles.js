import styled from 'styled-components'

export const StyledNavBackground = styled.div`
  background: ${({ darkTheme }) => !darkTheme && 'rgb(135, 206, 250)'};
`

export const LinkStyle = {
  background: '#50a1ff',
  borderRadius: '10rem',
  padding: '10px 38px 10px',
  fontSize: 13,
  color: '#fff',
  border: '2px solid yellowgreen',
  display: 'inline-block',
  fontWeight: 600,
  textAlign: 'center',
  verticalAlign: 'middle',
  margin: '1rem',
  boxShadow:
    '0 8px 16px 0 rgba(154, 205, 50, 0.2), 0 6px 20px 0 rgba(154, 205, 50, 0.19)',
}

export const ActiveLinkStyle = {
  ...LinkStyle,
  pointerEvents: 'none',
  transform: 'none',
  background: 'none',
}
