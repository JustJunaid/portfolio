import React from 'react'
import styled from 'styled-components'
import Moon from '../../static/assets/icons/moon'
import Sun from '../../static/assets/icons/sun'

const ToggleContainer = styled.button`
  border-color: black;
  border-radius: 30px;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  z-index: 999;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ darkTheme }) =>
        darkTheme ? 'translateY(0)' : 'translateY(-100px)'};
    }

    &:nth-child(2) {
      transform: ${({ darkTheme }) =>
        darkTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`

export default function ToggleDarkTheme({ state, dispatch }) {
  return (
    <ToggleContainer
      darkTheme={state.darkTheme}
      onClick={() =>
        dispatch({ type: 'toggleDarkTheme', darkTheme: !state.darkTheme })
      }
    >
      <Moon />
      <Sun />
    </ToggleContainer>
  )
}
