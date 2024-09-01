'use client'

import {Button, IconButton, Stack} from "@mui/material"
import {Logo} from '@/shared/components/Logo/logo'
import Icon from "@/shared/components/Icon/icon"
import {useIsMobile} from "@/shared/hooks/use-is-mobile"

export const NavigationMain = () => {
  const isMobile = useIsMobile()

  return (
    <Stack sx={{ bgcolor: '#EF6507', height: 104, px: 2 }}> 
      <Stack direction="row" sx={{ maxWidth: 1140, width: '100%', height: 120, mx: 'auto', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo />
        {isMobile && (
          <IconButton>
            <Icon name="menu" size={48} strokeWidth={2.5} color="white" />
          </IconButton>
        )}
        {!isMobile && (
          <Stack direction="row" spacing={1} alignItems="center" height="100%" color="white">  
            <Button color="inherit" variant="text" sx={{ fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
              Minha História
            </Button>
            <Button  color="inherit" variant="text" sx={{ fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
              O que já fiz
            </Button>
            <Button color="inherit" variant="text" sx={{ fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
              Proposta 2024
            </Button>
            <Button color="inherit" variant="text" sx={{ fontSize: 16, fontWeight: 700, height: 48, px: 3, borderRadius: 4 }}>
              Seja Voluntário
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}