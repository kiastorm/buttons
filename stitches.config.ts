import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

const sizeIncrements5px: { [key: number]: string } = {}

for (let i = 0; i < 20; i++) {
  const multiplier = i + 1
  sizeIncrements5px[multiplier] = `${multiplier * 5}px`
}

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  config,
} = createStitches({
  theme: {
    colors: {
      cyan800: '#0081D7',
      cyan900: '#00408F',
      purple200: '#F9EDFF',
      purple400: '#ECC7FF',
      purple800: '#AA00FF',
      purple900: '#8800CC',
      neutral300: '#E6E5EA',
      neutral500: '#C2C1C7',
      neutral800: '#4C4A57',
      whiteA1: 'rgba(255, 255, 255, 0.1)',
      whiteA2: 'rgba(255, 255, 255, 0.2)',
    },
    space: sizeIncrements5px,
    sizes: sizeIncrements5px,
    fontSizes: {
      1: '16px',
      2: '18px',
      3: '20px',
    },
    radii: {
      1: '4px',
      2: '5px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>
