import React, { useState, useEffect } from 'react';

export const SelfDestructComponent = ({ seconds, children }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, seconds * 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {children}
    </div>
  );
};