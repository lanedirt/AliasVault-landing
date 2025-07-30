"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 300,
      easing: 'ease-out-cubic',
      mirror: false,
      offset: 50,
      delay: 0,
    });
  }, []);

  return null;
};

export default AOSInit;