import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  sizes: {
    lg: {
      fontSize: 't-lg',
    },
    md: {
      fontSize: 't-md',
    },
    sm: {
      fontSize: 't-sm',
    },
    xs: {
      fontSize: 't-xs',
    },
  },
  baseStyle: {
    color: 'gray.900',
  },
  defaultProps: {
    size: 'md',
  },
}
