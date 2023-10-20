import VisibilitySensor from 'react-visibility-sensor';
import { Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const Animation = ({ children, Ftimeout, Gtimeout, delay }: any) => {
  const [checked, setChecked] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation once the component is mounted.
    setIsVisible(true);
  }, []);

  const handleVisibilityChange = (visible: boolean) => {
    if (visible && !checked) {
      setTimeout(() => {
        setChecked(true);
      }, delay || 0);
    }
  };

  return (
    <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
      {() => (
        <Box
          style={{
            opacity: isVisible ? 1 : 0, // Control the opacity for the fade-in effect
            transform: isVisible ? 'scale(1)' : 'scale(0)', // Control the scale for the grow-in effect
            transition: `opacity ${Ftimeout || 0}s, transform ${Gtimeout || 0}s`, // Set transition properties
          }}
        >
          {children}
        </Box>
      )}
    </VisibilitySensor>
  );
};

export default Animation;
