import {Navigation} from "@/shared/modules/Navigation";
import {Stack} from "@mui/material"; 
import {Slider} from '@/shared/components/Slider/slider';

export default function Home() {
  return (
    <Stack>
      <Navigation.Root>
        <Navigation.TopBar />
        <Navigation.Main />
      </Navigation.Root>
      <Slider />
    </Stack>
  );
}
