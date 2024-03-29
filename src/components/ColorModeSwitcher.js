import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}