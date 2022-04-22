// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  colors: Array<RGB | HSL>
}

interface ColorBase {
  id: number
}

interface RGB extends ColorBase {
  type: 'rgb'
  r: number
  g: number
  b: number
}

interface HSL extends ColorBase {
  type: 'hsl'
  h: number
  s: number
  l: number
}

function randomRGB(): RGB {
  return {
    id: Math.random() + Date.now(),
    type: 'rgb',
    r: Math.round(Math.random() * 255),
    g: Math.round(Math.random() * 255),
    b: Math.round(Math.random() * 255),
  }
}

function randomHsl(): HSL {
  return {
    id: Math.random() + Date.now(),
    type: 'hsl',
    h: Math.floor(Math.random() * 360),
    s: Math.floor(Math.random() * 100),
    l: Math.floor(Math.random() * 100),
  }
}

function randomColor() {
  return Math.random() > 0.5 ? randomHsl() : randomRGB()
}

let moreSwatches: Array<RGB | HSL> = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const colors = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    ...moreSwatches,
  ]

  res.status(200).json({colors})
}

export type {RGB, HSL}
