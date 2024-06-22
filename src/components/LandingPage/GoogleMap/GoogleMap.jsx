import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4020.6730086911366!2d-58.440156024381885!3d-34.585953220180905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58d0f8f232d%3A0xfd8c909692175ba1!2sMakena%20Cantina%20Club!5e0!3m2!1ses-419!2sar!4v1718592400515!5m2!1ses-419!2sar"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
