"use client";
import PressKitEN from './PressKitEN';
import PressKitNL from './PressKitNL';

const PressKit = ({ locale }: { locale: string }) => {

  if (locale === 'nl') {
    return <PressKitNL />;
  }

  return <PressKitEN />;
};

export default PressKit;