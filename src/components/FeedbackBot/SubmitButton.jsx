// src/components/FeedbackBot/SubmitButton.jsx
import React, { useState, useRef, useEffect } from 'react';
import sharefeedback from '../../assets/sharefeedback.svg';
import ShareModal from './ShareModal';
import RatingModal from './RatingModal';
import RatingDisplay from './RatingDisplay';

const SubmitButton = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (showShareModal) setShowShareModal(false);
        if (showRating && !isSubmitted) setShowRating(false);
        if (isSubmitted) setIsSubmitted(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareModal, showRating, isSubmitted]);

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const shareText = "Check out my feedback!";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setShowShareModal(false);
    setTimeout(() => {
      setShowRating(true);
    }, 500);
  };

  const handleSubmitRating = () => {
    if (rating === 0) return;
    setIsSubmitted(true);
  };

  const renderModal = () => {
    if (showShareModal) {
      return <ShareModal onShare={handleShare} />;
    }

    if (showRating && !isSubmitted) {
      return (
        <RatingModal
          rating={rating}
          onRatingChange={setRating}
          feedback={feedback}
          onFeedbackChange={setFeedback}
          userName={userName}
          onUserNameChange={setUserName}
          onSubmit={handleSubmitRating}
          hover={hover}
          onHoverChange={setHover}
        />
      );
    }

    if (isSubmitted) {
      return (
        <RatingDisplay
          rating={rating}
          feedback={feedback}
          userName={userName}
        />
      );
    }

    return null;
  };

  return (
    <div className="relative">
      <div className="flex justify-center mt-8 mb-6">
        <button 
          onClick={() => setShowShareModal(!showShareModal)}
          className="hover:opacity-90 transition-opacity relative"
        >
          <img 
            src={sharefeedback} 
            alt="Share feedback" 
            className="h-8 sm:h-10 md:h-12 w-auto" 
          />
        </button>
      </div>

      {/* Modal Container */}
      {(showShareModal || showRating || isSubmitted) && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4" ref={modalRef}>
          {renderModal()}
        </div>
      )}
    </div>
  );
};

export default SubmitButton;