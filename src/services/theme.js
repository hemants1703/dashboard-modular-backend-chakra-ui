import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const colors = {
  subtleBlue: "#66f",
  subtleRed: "#f66",
}

const theme = extendTheme({ config, colors })

export default theme