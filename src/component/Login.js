import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';
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

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
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
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;