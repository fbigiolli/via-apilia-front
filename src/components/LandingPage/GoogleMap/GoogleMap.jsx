import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6644263988874!2d-58.4592676234129!3d-34.562050955300435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3849d6dbb%3A0x34a17e7f13a06d16!2sAv.%20Cabildo%20%26%20Av.%20Juramento%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718569818066!5m2!1ses-419!2sar"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
