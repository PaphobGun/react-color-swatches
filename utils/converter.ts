import type {RGB, HSL} from 'pages/api/get-colors'

function getColor(swatch: RGB | HSL) {
  switch (swatch.type) {
    case 'rgb':
      return `rgb(${swatch.r}, ${swatch.g}, ${swatch.b})`
    case 'hsl':
      return `hsl(${swatch.h}, ${swatch.s}%, ${swatch.l}%)`
    default:
      throw new Error('Not supported type')
  }
}

export {getColor}
