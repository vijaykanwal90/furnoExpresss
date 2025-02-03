import React from "react";

interface SignupFormProps {
  isSignup: boolean;
  onSwitchToSignup: () => void;
  onSwitchToSignin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ isSignup, onSwitchToSignup, onSwitchToSignin }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">{isSignup ? "Sign Up" : "Sign In"}</h2>
      <form>
        {isSignup && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        {isSignup && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Confirm your password"
            />
          </div>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <div className="mt-4 text-center">
          {isSignup ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignin}
                className="text-blue-500 underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-blue-500 underline"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
