import React, { useState } from 'react';



// FUNCTION OtpLogin
//   INITIALIZE state otp as an array of 4 empty strings
//   INITIALIZE state isError as false
//   INITIALIZE state isSuccess as false
//   INITIALIZE state resend as false

//   FUNCTION handleChange(element, index)
//     IF element value is not a number THEN RETURN
//     CREATE newOtp as a copy of otp
//     SET newOtp[index] to element value
//     UPDATE otp state to newOtp
//     IF next input exists AND element value is not empty THEN
//       FOCUS next input
//     END IF
//   END FUNCTION

//   FUNCTION handleSubmit(event)
//     PREVENT default form submission
//     IF length of otp joined is equal to 4 THEN
//       SET isSuccess to true
//       SET isError to false
//       LOG "OTP Submitted" with joined otp
//     ELSE
//       SET isError to true
//       SET isSuccess to false
//     END IF
//   END FUNCTION

//   FUNCTION handleResend
//     SET resend to true
//     WAIT for 3 seconds
//     SET resend to false
//   END FUNCTION

//   RETURN:
//     A div containing:
//       - A header for "OTP Login"
//       - A form with:
//         - Inputs for each digit of the OTP
//         - Error message (if isError is true)
//         - Success message (if isSuccess is true)
//         - Submit button
//         - Resend OTP button
// END FUNCTION

// OTP Login Component
const OtpLogin = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resend, setResend] = useState(false);

  // Handle OTP input
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Allow only numeric values

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus the next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  // Submit OTP handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length === 4) {
      setIsSuccess(true);
      setIsError(false);
      // Simulate a login request
      console.log('OTP Submitted:', otp.join(''));
    } else {
      setIsError(true);
      setIsSuccess(false);
    }
  };

  // Resend OTP handler
  const handleResend = () => {
    setResend(true);
    setTimeout(() => setResend(false), 3000); // Simulate resend delay
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">OTP Login</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          {otp.map((data, index) => (
            <input
              className="w-12 h-12 m-1 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        {/* Error message */}
        {isError && <p className="text-red-500 mb-4">Please enter a valid 4-digit OTP.</p>}

        {/* Success message */}
        {isSuccess && <p className="text-green-500 mb-4">OTP Verified Successfully!</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit OTP
        </button>

        {/* Resend OTP */}
        <button
          type="button"
          onClick={handleResend}
          disabled={resend}
          className={`mt-4 ${resend ? 'bg-gray-400' : 'bg-gray-500'} text-white py-2 rounded hover:bg-gray-600 transition-colors w-full`}
        >
          {resend ? 'Resending...' : 'Resend OTP'}
        </button>
      </form>
    </div>
  );
};

export default OtpLogin;
