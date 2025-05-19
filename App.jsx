import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RobloxLink = () => {
  const profileUrl = 'https://www.robiox.com.sb/users/315227642253/profile';
  const [sparkActive, setSparkActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSparkActive(true);
    setTimeout(() => {
      window.open(profileUrl, '_blank', 'noopener noreferrer');
      setSparkActive(false);
    }, 400);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      padding: '1rem',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <AnimatePresence>
        {sparkActive && (
          <motion.div
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: 'red',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
      <motion.a
        onClick={handleClick}
        style={{
          color: '#1a0dab',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'inline-block',
          fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
          textDecoration: 'none',
          borderBottom: '2px solid transparent',
          paddingBottom: '2px',
        }}
        whileHover={{ borderBottomColor: '#1a0dab' }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        ROBLOX.COM/USERS/12343212344954/ADD/DARKSTAR
      </motion.a>
    </div>
  );
};

export default RobloxLink;
