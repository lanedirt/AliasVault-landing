"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 450,
      easing: 'ease-out-sine',
      mirror: false,
    });
  }, []);

  return null;
};

export default AOSInit;