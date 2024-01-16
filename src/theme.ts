// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import cirrusTokens from "./tokens/output.json"
import { error } from "console"

// 2. Call `extendTheme` and pass your custom values
export const myTheme = extendTheme({
  config: {
    cssVarPrefix: "cirrus",
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      secondary: {
        default: 'red.800',
        _dark: 'red.700',
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ["24px", "32px"],
    },
    h2: {
      fontSize: ["18px", "24px"],
      fontWeight: "semibold"
    },
  },
  layerStyles: {
    greyContainer: {
      bg: "#ECECEC",
      padding: "16px",
      borderRadius: "4px",
    }
  },
  colors: {
    brand: {
      0: cirrusTokens.color.fushcia[0].value,
      10: cirrusTokens.color.fushcia[10].value,
      20: cirrusTokens.color.fushcia[20].value,
      30: cirrusTokens.color.fushcia[30].value,
      40: cirrusTokens.color.fushcia[40].value,
      50: cirrusTokens.color.fushcia[50].value,
      60: cirrusTokens.color.fushcia[60].value,
      70: cirrusTokens.color.fushcia[70].value,
      80: cirrusTokens.color.fushcia[80].value,
      90: cirrusTokens.color.fushcia[90].value,
    },
    chakra: {
      body: {
        text: cirrusTokens.color.grey[80].value,
      }
    }
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        letterSpacing: "0.02rem",
        padding: "4px",
        borderRadius: "0px",
        fontSize: "12px",
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'ghost-unstyled': {
          color: cirrusTokens.color.grey[85].value,
        },
        // 4. We can override existing variants
        solid: {
          bg: cirrusTokens.color.blue[60].value,
        },
        outline: {
          color: cirrusTokens.color.blue[60].value,
        },
        ghost: {
          color: cirrusTokens.color.blue[60].value,
        },
        link: {
          color: cirrusTokens.color.blue[60].value,
        },
        // 5. We can add responsive variants
        sm: {
          // bg: 'teal.500',
          // fontSize: 'md',
        },
      },
      colorSchemes: {
        // 5. We can add responsive variants
        blue: {
          bg: cirrusTokens.color.blue[70].value,
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'sm', // default is md
        colorScheme: 'blue', // default is gray
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "12px",
        fontWeight: "normal",
        marginBottom: "4px"
      },
      defaultProps: {
      },
    },
    Input: {
      baseStyle: {
        field: {
          paddingLeft: "8px",
        }
      },
      variants: {
        flushed: {
          field: {
            bg: cirrusTokens.color.grey[15].value,
            color: cirrusTokens.color.grey[85].value,
            borderColor: cirrusTokens.color.grey[70].value,
            py: "4px",
          }
        },
      },
      defaultProps: {
        size: 'sm', // default is md
        variant: 'flushed',
      },
    },
  },
})