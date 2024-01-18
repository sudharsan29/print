// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API } from '../interceptor/Interceptorapi';

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await API.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <strong>{post.title}</strong>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;
// import React, { useEffect, useState } from 'react';
// import { API } from '../interceptor/Interceptorapi';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const [formattedTasks, setFormattedTasks] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Assuming interactions is an array received from an API or elsewhere
//         const response = await API.post('https://prayojana-api-staging.slashdr.com/rest/interactions', {
//           // Add any data you need to send with the POST request
//         });
        
//         // Assuming the API response contains an array of interactions
//         const interactions = response.data.data;

//         const formattedTasks = interactions.map((interaction) => ({
//           title: interaction.title,
          
//         }));
//         setFormattedTasks(formattedTasks);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, []);
//   const handleButtonClick = () => {
//     // Navigate to the "/home" route when the button is clicked
//     navigate('/main');
//   };

//   return (
//     <div>
//       <h2 className=''>Formatted Tasks</h2>
      
//       {formattedTasks.length > 0 ? (
//         <ul>
//           {formattedTasks.map((task, index) => (
//             <li key={index}>
//              <span className='relative text-lime-600'>{task.title}</span>
//               {/* Add other elements based on the properties of your formatted task */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No formatted tasks available</p>
//       )}
//       {error && <p>{error}</p>}
//       <button onClick={handleButtonClick}>click</button>
//     </div>
//   );
// }

// export default Home;




