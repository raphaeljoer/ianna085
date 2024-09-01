import {Button, Stack} from "@mui/material"
import {Logo} from '@/shared/components/Logo/logo'

export const NavigationMain = () => {
  return (
    <Stack sx={{ bgcolor: '#41b6a3', height: 104, px: 2 }}> 
      <Stack direction="row" sx={{ maxWidth: 1140, width: '100%', height: 120, mx: 'auto', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />
        <Stack direction="row" spacing={1} alignItems="center" height="100%">
          <Button variant="text" sx={{ color: 'white', fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
            Minha História
          </Button>
          <Button variant="text" sx={{ color: 'white', fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
            O que já fiz
          </Button>
          <Button variant="text" sx={{ color: 'white', fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
            Proposta 2024
          </Button>
          <Button variant="text" sx={{ color: 'white', fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
            Seja Voluntário
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}