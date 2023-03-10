import { extendTheme } from "@chakra-ui/react";

import { black } from './colors/black'

import { green } from './colors/green'
import { gray } from './colors/gray'
import { primary } from './colors/primary'
import { red } from './colors/red'

import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { Checkbox } from "./components/Checkbox";

export const theme = extendTheme({
  colors: {
    primary,
    black,
    gray,
    green,
    red,
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  fontSizes: {
    't-xs': '0.75rem',
    't-sm': '0.875rem',
    't-md': '1rem',
    't-lg': '1.125rem',
    't-xl': '1.25rem',
    'h-xs': '1rem',
    'h-sm': '1.25rem',
    'h-md': '1.5rem',
    'h-lg': '2rem',
    'h-xl': '2.5rem',
  },
  space: {
    s1: '4px',
    s2: '8px',
    s3: '12px',
    s4: '16px',
    s5: '20px',
    s6: '24px',

    m1: '8px',
    m2: '16px',
    m3: '24px',
    m4: '32px',
    m5: '40px',
    m6: '48px',
    m7: '56px',
    m8: '64px',

    l1: '20px',
    l2: '40px',
    l3: '60px',
    l4: '80px',
    l5: '100px',
    l6: '120px',
    l7: '140px',
    l8: '160px',
    l9: '180px',
    l10: '200px',
  },

  components: {
    Container,
    Button,
    Text,
    Checkbox
  },
  styles: {
    global: () => ({
      body: {
        overflowX: 'hidden',
      },
    }),
  },
});
