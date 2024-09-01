'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const BrandColor = {
  green: {
    900: '#091D00',
    800: '#0B3100',
    700: '#0C4300',
    600: '#0B5400',
    500: '#096400',
    400: '#067302',
    300: '#308620',
    200: '#57983F',
    100: '#7CAA5F',
    50: '#9DBB7F',
    20: '#BBCD9E',
  },
  blue: {
    900: '#040F32',
    800: '#091553',
    700: '#0F1973',
    600: '#171B91',
    500: '#2420AE',
    400: '#3A2BC9',
    300: '#423BD0',
    200: '#4C4ED6',
    100: '#5D65DC',
    50: '#6F7CE1',
    20: '#8092E6',
  },
  purple: {
    900: '#0B0B38',
    800: '#181460',
    700: '#2C1F88',
    600: '#442CAE',
    500: '#603BD1',
    400: '#804BF2',
    300: '#8259F5',
    200: '#8566F8',
    100: '#8A75FA',
    50: '#9083FC',
    20: '#9892FE',
  },
  orange: {
    main: '#EF6507',
    900: '#612400',
    800: '#813000',
    700: '#A03D00',
    600: '#BF4A00',
    500: '#D85700',
    400: '#EF6507',
    300: '#F67A2A',
    200: '#FB9050',
    100: '#FEA777',
    50: '#FFC09F',
    20: '#FFD9C7', 
  },
  yellow: {
    900: '#614100',
    800: '#815500',
    700: '#A06800',
    600: '#C07B00',
    500: '#DA8D00',
    400: '#F29F05',
    300: '#F8AD28',
    200: '#FDBC50',
    100: '#FFCA77',
    50: '#FFD99F',
    20: '#FFE8C7',
  },
  prefeitura: {
    900: '#124C43',
    800: '#196357',
    700: '#22796B',
    600: '#2B8E7E',
    500: '#36A391',
    400: '#41b6a3',
    300: '#5DC4B2',
    200: '#79D0C0',
    100: '#96DCCF',
    50: '#B4E7DD',
    20: '#D3F2EB', 
  }
}



const theme = createTheme({
  palette: {
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    primary: {
      main: '#EF6507',
    },
    secondary: {
      main: '#804BF2'
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
