import React from 'react';
import ShareReddit from '../../assets/ShareReddit.svg';
import ShareFacebook from '../../assets/ShareFacebook.svg';
import ShareTwitter from '../../assets/ShareTwitter.svg';
import ShareLinkedin from '../../assets/ShareLinkedin.svg';
import ShareWhatsapp from '../../assets/ShareWhatsApp.svg';

const ShareModal = ({ onShare }) => {
  const socialPlatforms = [
    { id: 'facebook', icon: ShareFacebook, alt: 'Facebook' },
    { id: 'twitter', icon: ShareTwitter, alt: 'Twitter' },
    { id: 'linkedin', icon: ShareLinkedin, alt: 'LinkedIn' },
    { id: 'whatsapp', icon: ShareWhatsapp, alt: 'WhatsApp' },
    { id: 'reddit', icon: ShareReddit, alt: 'Reddit' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-72 sm:w-80 md:w-96">
      <h3 className="text-center text-lg font-semibold mb-4">Share in your social media</h3>
      
      <div className="flex flex-wrap justify-center items-center gap-4">
        {socialPlatforms.map(platform => (
          <button 
            key={platform.id}
            onClick={() => onShare(platform.id)} 
            className="hover:opacity-80 transition-opacity"
          >
            <img src={platform.icon} alt={platform.alt} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShareModal;
