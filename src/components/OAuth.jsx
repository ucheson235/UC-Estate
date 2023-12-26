// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import React from 'react'
// import { FcGoogle } from "react-icons/fc";
// import {toast} from 'react-toastify';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// export default function OAuth() {
//    async function onGoogleClick() {
//     try{
//       const auth = getAuth();
//       const provider = new GoogleAuthProvider()
//       const result =  await signInWithPopup(auth, provider)
//       const user =  result.user
//       console.log(user);

//     } catch (error) {
//       toast.error("could not authorize with Google")
//       console.log(error);

//     }

    
//   }
//   return (
//     <button type="button"  onClick={onGoogleClick}  className='flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'>
//         <FcGoogle  className='text-2xl bg-white rounded-full mr-2'/>

//          continue with Google

//     </button>
//   )
// }

// import React from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { toast } from 'react-toastify';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

// export default function OAuth() {
//   async function onGoogleClick() {
//     try {
//       const auth = getAuth();
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       //check for the user
//       const docRef = doc(db, 'user', user.uid);
//       const docsnap = await getDoc(docRef)

//     if(!docsnap.exists()){
//        await setDoc(docRef, {
//         name: user.displayName,
//         email: user.email,
//         timestamp: serverTimestamp(),

//        })
//     }

      
//     } catch (error) {
//       toast.error("Could not authorize with Google");
      
//     }
//   }

//   return (
//     <button
//       type="button"
//       onClick={onGoogleClick}
//       className='flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'
//     >
//       <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
//       Continue with Google
//     </button>
//   );
// }

// import React from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { toast } from 'react-toastify';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore'; // Add the 'doc' import
// import { db } from '../firebase';
// import { useNavigate } from 'react-router';

// export default function OAuth() {
//   const navigate = useNavigate();
//   async function onGoogleClick() {
//     try {
//       const auth = getAuth();
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Check for the user
//       const docRef = doc(db, 'user', user.uid); // Assuming 'db' is your Firestore database instance
//       const docSnap = await getDoc(docRef);

//       if (!docSnap.exists()) {
//         await setDoc(docRef, {
//           name: user.displayName,
//           email: user.email,
//           timestamp: serverTimestamp(),
//         });
//       }
//       navigate("/");
//     } catch(error){
    
//       toast.error("Could not authorize with Google");
//     }

//     }
    
 

//   return (
//     <button
//       type="button"
//       onClick={onGoogleClick}
//       className='flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'
//     >
//       <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
//       Continue with Google
//     </button>
//   );
// }

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

export default function OAuth() {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, 'user', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {
      toast.error("Could not authorize with Google");
    } finally {
      navigate("/");
    }
  }

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className='flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'
    >
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
      Continue with Google
    </button>
  );
}
