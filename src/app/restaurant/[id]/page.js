"use client"
import React, { useState } from 'react';
import AuthScreen from "@/components/components-presentiel/AuthScreen";
import PresentielRestau from '@/components/components-presentiel/PresentielRestau';

export default function HomePresentiel() {
  const [nextStep, setNextStep] = useState('');
  return (
    <div className="flex flex-col justify-center">

{nextStep===""?<AuthScreen nextStep={nextStep} setNextStep={setNextStep}/>:<PresentielRestau/>}
    </div>
  );
}
