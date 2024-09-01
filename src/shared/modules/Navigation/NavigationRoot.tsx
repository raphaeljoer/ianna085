import {Stack} from "@mui/material"

interface Props {
  children: React.ReactNode
}

export const NavigationRoot = ({ children }: Props) => {
  return (
    <Stack>
      {children}
    </Stack>
  )
}