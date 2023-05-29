// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import AppMain from './AppMain';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const auth = getAuth();
//       await signInWithEmailAndPassword(auth, email, password);
//       // Login successful, you can redirect to another page or show a success message
//       navigate('/app'); // Redirect to the main app page
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <Router>
//       <div>
//         <h2>Login</h2>
//         {error && <div>{error}</div>}
//         <form onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={handleEmailChange} />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>

//       <Routes>
//         <Route path="/AppMain" element={<AppMain />} />
//       </Routes>
//     </Router>
//   );
// };

// export default LoginPage;
