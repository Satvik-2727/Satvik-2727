import React, { useEffect, useRef } from 'react';

const TitleChangeHandler = () => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'A front end developer';
      } else {
        document.title = defaultTitle.current;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TitleChangeHandler;
