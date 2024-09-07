// import React from 'react'
// export default function Footer() {
//   return (
   
  


// <footer class="bg-sky-400 text-white py-6">
//    <div className="container mx-auto flex justify-between items-center">
//     <p class="text-sm mb-2">© 2024 Your Company. All rights reserved.</p>
//     <p class="text-sm mb-4">
//       <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a> | 
//       <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
//     </p>
//     <div class="flex justify-center space-x-4">
      
//       <a href="mailto:email@example.com" className="text-gray-200 hover:text-white">
//              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                <path d="M12 12.713l11.985-7.162a.5.5 0 00-.007-.85L12 0 .022 4.701a.5.5 0 00-.015.864L12 12.713zM0 8.222v11.309a.5.5 0 00.763.429l6.737-3.853 4.5 2.684 4.5-2.684 6.737 3.853a.5.5 0 00.763-.429V8.222l-11.985 7.164L0 8.222z" />
//              </svg>
//              <span className="sr-only">Email</span>
//            </a>
//       <a href="#" class="text-gray-400 hover:text-white">
//         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5"></path></svg>
//         <span class="sr-only">Twitter</span>
//       </a>
//       <a href="#" class="text-gray-400 hover:text-white">
//         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5"></path></svg>
//         <span class="sr-only">Instagram</span>
//       </a>
//     </div>
//     <a href="/contact" className="bg-white text-sky-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded">
//           Contact Us
//         </a>
//   </div>
// </footer>
//   );
// }


import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sky-400 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Contact Us button */}
        <a href="/contact" className="bg-white text-sky-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded">
          Contact Us
        </a>

        {/* Center content: Privacy policy and social links */}
        <div className="text-center">
          <p className="text-sm mb-2">© 2024 Your Company. All rights reserved.</p>
          <p className="text-sm mb-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:email@example.com" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12.713l11.985-7.162a.5.5 0 00-.007-.85L12 0 .022 4.701a.5.5 0 00-.015.864L12 12.713zM0 8.222v11.309a.5.5 0 00.763.429l6.737-3.853 4.5 2.684 4.5-2.684 6.737 3.853a.5.5 0 00.763-.429V8.222l-11.985 7.164L0 8.222z" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5"></path>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Empty div for right-side alignment */}
        <div></div>
      </div>
    </footer>
  );
}
