import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";


const WhatsAppChat = () => {
  const phoneNumber = 7979729392 ; // Replace with the desired phone number
  const preMessage = 'Hello, I\'d love to chat!'; // Optional pre-filled message

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(preMessage)}`;

  return (
    <>
    <div className='fixed right-7  bottom-7'>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp className='text-green-500 text-4xl' />
    </a>
    </div>
    </>
  );
};

export default WhatsAppChat;