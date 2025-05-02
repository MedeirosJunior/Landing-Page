"use client";

import React from 'react';
import BootstrapClient from './BootStrapClient';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BootstrapClient />
      {children}
    </>
  );
};

export default ClientWrapper;