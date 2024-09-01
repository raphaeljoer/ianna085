import {Stack} from '@mui/material'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Stack sx={{ display: 'block', position: 'relative', width: 160, height: 80 }}>
      <Image src="/ianna-logo-white.png" fill alt="Ianna 12 085" />
    </Stack>
  )
}