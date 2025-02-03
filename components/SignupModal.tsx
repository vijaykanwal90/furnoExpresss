import React, { useState } from "react";
import SignupForm from "./SignupForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full mx-4 sm:mx-auto">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <SignupForm
          isSignup={isSignup}
          onSwitchToSignup={() => setIsSignup(true)}
          onSwitchToSignin={() => setIsSignup(false)}
        />
      </div>
    </div>
  );
};

export default SignupModal;
