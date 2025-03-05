import React, {useState} from 'react'

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("email is", email);
    // console.log("password is", password);
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e) =>{
            setEmail(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email' />
          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder='Enter password' />
          <button className='mt-6 bg-emerald-600 text-white text-lg py-3 px-7 rounded-full hover:bg-emerald-700 transition duration-300 shadow-md w-full' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login




// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form has submitted");
//   };

//   return (
//     <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
//       <div className='bg-white shadow-xl rounded-2xl p-10 w-96 border border-gray-200'>
//         <h2 className='text-2xl font-semibold text-center text-emerald-600 mb-6'>Login</h2>
//         <form onSubmit={submitHandler} className='flex flex-col'>
//           <input
//             type='email'
//             placeholder='Enter your email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className='outline-none bg-gray-100 border border-gray-300 text-black text-lg py-3 px-5 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200'
//           />
//           <input
//             type='password'
//             placeholder='Enter password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className='outline-none bg-gray-100 border border-gray-300 text-black text-lg py-3 px-5 rounded-lg mt-4 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200'
//           />
//           <button
//             type='submit'
//             className='mt-6 bg-emerald-600 text-white text-lg py-3 px-7 rounded-lg hover:bg-emerald-700 transition duration-300 shadow-md w-full'
//           >
//             Log in
//           </button>
//         </form>
//         <p className='text-gray-500 text-sm text-center mt-4'>Don't have an account? <a href='#' className='text-emerald-600 hover:underline'>Sign up</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;

