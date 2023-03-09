import { ComponentStyleConfig } from '@chakra-ui/react'

const solidExceptions = ['secondary', 'green', 'red']
const outlineExceptions = ['primary', 'green', 'cyan']

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontsize: 't-sm',
    borderRadius: '8px',
  },
  defaultProps: { size: 'sm' },
  sizes: {
    lg: {
      padding: '16px 24px',
      fontSize: '18px',
    },
    md: {
      padding: '12px 20px',
      fontSize: '16px',
    },
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
    },
    xs: {
      padding: '6px 12px',
      fontSize: '12px',
    },
  },
  variants: {
    outline: ({ colorScheme }) => ({
      color: outlineExceptions.includes(colorScheme)
        ? 'black.500'
        : `${colorScheme}.500`,
      borderColor: `${colorScheme}.500`,
      path: {
        fill: `${colorScheme}.500`,
      },
    }),
    solid: ({ colorScheme }) => ({
      color: solidExceptions.includes(colorScheme) ? 'white' : 'black.600',
      path: {
        fill: solidExceptions.includes(colorScheme) ? 'white' : 'black.600',
      },
    }),
    ghost: ({ colorScheme }) => ({
      path: {
        fill: `${colorScheme}.500`,
      },
    }),
  },
}
