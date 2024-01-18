import axios from "axios";
import { auth } from "../firebase";
export const API = axios.create();

API.interceptors.request.use(function (config) {
    // Do something before request is sent
// const token =sessionStorage.getItem("Authorization-Key");
// config.headers ={
//     "Authorization-Key":`Bearer ${token}`,
// }
const currentToken = localStorage.getItem('accessToken');
console.log("token", currentToken);
console.log('Request interceptor:',currentToken);
config.headers.Authorization = `Bearer ${currentToken}`;

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// API.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     console.log('response interceptor:');
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });
//   export default API;

API.interceptors.response.use(function (response) {
    console.log('response interceptor:');
    return response;
}, async function (error) {
    const originalRequest = error.config;

    // If the error is due to a 401 status code and the request hasn't been retried already
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
            // Refresh the access token using Firebase Authentication
            const newToken = (await auth.currentUser.getIdTokenResult()).token;

            // Set the new access token
            localStorage.setItem('accessToken', newToken);
            console.log("response:",newToken);
            // Modify the original request with the new access token
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            // Retry the original request with the new access token
            return API(originalRequest);
        } catch (refreshError) {
            // Handle the error when unable to refresh the access token
            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error);
});