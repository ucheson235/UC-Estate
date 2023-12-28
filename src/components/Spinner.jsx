// import React from 'react'
// import Spinner from "../assest/svg/spinner.svg";

// export default function Spinner() {
//   return (
//     <div>
//        <div> 
//           <img src={Spinner} alt='Loading...' className='h-24'/>

//        </div>
//     </div>
//   )
// }

import React from 'react';
import SpinnerSvg from "../assest/svg/spinner.svg";

export default function SpinnerComponent() {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50'>
       <div> 
          <img src={SpinnerSvg} alt='Loading...' className='h-24'/>
       </div>
    </div>
  );
}

