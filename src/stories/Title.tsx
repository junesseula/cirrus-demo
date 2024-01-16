import React from 'react';

import { Button, chakra } from '@chakra-ui/react'
import '../App.css';

interface TitleProps {
  device?: "desktop" | "mobile" ;
  hierarchy: "pageTitle" | "subHeading" | "sectionTitle";
}

export const ciTitle = ({ device, hierarchy }: TitleProps) => (
  <chakra.h2 textStyle={hierarchy}>Title Text</chakra.h2>
);