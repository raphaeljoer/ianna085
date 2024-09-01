'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {Stack} from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

export const Slider = () => {
  return (
    <Stack sx={{ bgcolor: 'primary.main', height: 460, width: '100%', position: 'relative' }}>
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
          <Stack sx={{ height: '100%', width: '100%', position: 'relative' }}>
            <Stack sx={{ position: 'absolute', top: 32, right: 80, width: 470, height: 360 }}>
              <Image src="/slogan.png" width={470} height={360} alt="Ianna 12 085" quality={100} />
            </Stack>
            <Image src="/photos/photo-1.jpg" width={1140} height={400} alt="Ianna 12 085" quality={100} />  
          </Stack>
        </SwiperSlide>
      </Swiper>
  </Stack>
  )
}