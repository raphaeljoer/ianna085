import Icon from "@/shared/components/Icon/icon"
import {Stack, Typography} from "@mui/material"

export const NavigationTopBar = () => {
  return (
    <Stack sx={{ bgcolor: 'secondary.main', px: 2, borderBottom: '4px solid', borderColor: '#F8AD28' }}>
      <Stack direction="row" sx={{ maxWidth: 1140, width: '100%', height: 48, mx: 'auto', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row"  spacing={1} alignItems="center" height="100%" color="white">
          <Icon name="message-circle-heart" size={20} strokeWidth={2} /> 
          <Typography variant="body1" fontWeight={700} fontSize={16}>
            (085) 9152.5983
          </Typography>
        </Stack>
        <Stack direction="row"  spacing={1} alignItems="center" height="100%" color="white">
          <Icon name="instagram" size={20} strokeWidth={2} /> 
          <Icon name="facebook" size={20} strokeWidth={2} />  
        </Stack>
      </Stack>
    </Stack>
  )
}