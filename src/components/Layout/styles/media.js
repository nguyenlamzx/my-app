import { css } from 'styled-components'

import { sizes } from './font';

export const breakpoints = {
  small: 480,
  medium: 768,
  large: 1025
}

export const padding = {
  small: `15px`,
  medium: `20px`,
  large: `30px`
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / sizes.base}em) {
      ${css(...args)}
    }
  `
  acc[label].padding = padding[label]
  return acc
}, {})

export default media;
