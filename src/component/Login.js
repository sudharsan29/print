import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';
import './Login.css';
const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
  
    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }
  
    try {
      // Check if the phone number exists in Firebase (replace this with your actual check)
      const isPhoneNumberRegistered = await checkIfPhoneNumberExistsInFirebase(number);
  
      if (isPhoneNumberRegistered) {
        // If the phone number is registered, proceed to set up reCAPTCHA and send OTP
        const response = await setUpRecaptha(number);
        // const accessToken = response.user.accessToken;
        // console.log("accessToken:", accessToken);
        console.log("Response", response);

        // console.log("accessToken:", response.User.accessToken);

        setResult(response);
        setFlag(true);
      } else {
        setError("Phone number not registered. Please sign up first.");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  
  // Function to check if the phone number exists in Firebase (replace this with your actual implementation)
//  const checkIfPhoneNumberExistsInFirebase = async (number) => {
//   try {
//     // Make a request to JSONPlaceholder to check if the phone number exists
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,
//     {
//       number
//     });
//     const data = await response.json();

//     // Log the response to the console
//     // console.log("API Response:", data);

//     // Check if any posts are returned for the given user ID (phone number)
//     return Array.isArray(data) && data.length > 0;
//   } catch (error) {
//     console.error("Error checking phone number:", error);
//     return false; // Assume the phone number doesn't exist in case of an error
//   }
// };
  
const checkIfPhoneNumberExistsInFirebase = async (number) => {
  try {
    // Make a request to JSONPlaceholder to check if the phone number exists
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        number: number
      }
    });
    
    const data = response.data;

    // Log the response to the console
    // console.log("API Response:", data);

    // Check if any posts are returned for the given user ID (phone number)
    return Array.isArray(data) && data.length > 0;
  } catch (error) {
    console.error("Error checking phone number:", error);
    return false; // Assume the phone number doesn't exist in case of an error
  }
};


  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      const response = await result.confirm(otp);
      const accessToken = response.user.accessToken;
      console.log(accessToken);
      localStorage.setItem("accessToken", accessToken);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const resetInputData = () => {
    setNumber("");
    setOtp("");
    setError("");
    setFlag(false);
  };

  return (
    <div className="relative w-[1535px] h-[700px] bg-blue-200">
      <div className="p-4 box">
       
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="relative left-[490px] top-[200px] w-[600px]">
        <h2 className="relative mb-3 text-3xl font-bold left-[200px] text-blue-500">LOGIN</h2>
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              className="relative w-[400px] left-[30px] top-[70px]"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="relative top-[70px] left-[120px]">
            <Link to="/">
              <Button  onClick={resetInputData} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300 
             user-select-none'>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit"className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300 
             user-select-none'>
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              className="relative w-[400px] left-[30px] top-[30px]"
            />
          </Form.Group>
          <div className="relative top-[10px] left-[130px]">
            <Link to="/">
              <Button  onClick={resetInputData} className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300 
             user-select-none'>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit"className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300 
             user-select-none'>
              Verify
            </Button>
          </div>
        </Form>
        </div>
      </div>
    </div>
  );
};

export default PhoneSignUp;