import { css } from '../stitches.config'

export const container = css({
  flexShrink: 0,

  ml: 'auto',
  mr: 'auto',
  px: '$5',
  maxWidth: '1145px',
})

export const flex = css({
  display: 'flex',

  variants: {
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
    },
  },
})
