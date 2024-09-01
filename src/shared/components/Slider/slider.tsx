'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Stack } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import {useIsMobile} from '@/shared/hooks/use-is-mobile';

export const Slider = () => {
  const isMobile = useIsMobile()
  
  return (
    <Stack sx={{ height: 'fit-content', width: '100vw', position: 'relative' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Stack sx={{ display: 'block', position: 'relative', width: '100vw', height: isMobile ? '48vh' : '40vw' }}> 
            <Image 
              src={isMobile ? "/banner/slide-1-mob.jpg" : "/banner/slide-1.jpg"}  
              alt="Ianna 12 085"
              quality={100}
              fill
              objectFit='cover'
              objectPosition='center'
            />    
          </Stack>
        </SwiperSlide>
      </Swiper>
  </Stack>
  )
}