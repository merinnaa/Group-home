import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-sky-400 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Contact Us button */}
        <a href="/contact" className="bg-white text-sky-400 hover:bg-gray-100 font-semibold py-2 px-4 rounded">
          Contact Us
        </a>

        {/* Center content: Social links on top, Privacy policy and terms below */}
        <div className="text-center">
          {/* Social media links with LinkedIn and Facebook */}
          <div className="flex justify-center space-x-4 mb-4">
            <a href="mailto:email@example.com" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12.713l11.985-7.162a.5.5 0 00-.007-.85L12 0 .022 4.701a.5.5 0 00-.015.864L12 12.713zM0 8.222v11.309a.5.5 0 00.763.429l6.737-3.853 4.5 2.684 4.5-2.684 6.737 3.853a.5.5 0 00.763-.429V8.222l-11.985 7.164L0 8.222z" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.722 0-4.928 2.206-4.928 4.928 0 .39.044.765.127 1.124-4.094-.205-7.725-2.164-10.155-5.144-.424.722-.667 1.561-.667 2.457 0 1.696.865 3.19 2.18 4.069-.803-.026-1.56-.247-2.22-.616v.062c0 2.364 1.684 4.337 3.918 4.782-.41.111-.841.171-1.287.171-.315 0-.623-.031-.923-.088.624 1.949 2.434 3.372 4.576 3.413-1.68 1.316-3.8 2.103-6.104 2.103-.396 0-.788-.023-1.174-.069 2.179 1.397 4.768 2.211 7.548 2.211 9.051 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.961-.695 1.8-1.562 2.462-2.549z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            
            {/* LinkedIn icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 2.12 6.09 1 7.48 1s2.5 1.12 2.5 2.5S8.87 6 7.48 6C6.09 6 4.98 4.88 4.98 3.5zM.5 8h6v12h-6V8zM16 8c-3.22 0-4.44 1.78-4.44 3.72V20h6V13.5s-.02-1.72 1.47-1.72C20.5 11.78 21 13.22 21 14V20h6v-7.5c0-4.5-2.44-6.5-6-6.5-2.81 0-4.22 1.44-5 2.5V8h-6z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            
            {/* Facebook icon */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.785v-3.622h3.035V8.413c0-3.007 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.95h-1.512c-1.492 0-1.955.927-1.955 1.875v2.277h3.321l-.531 3.622h-2.79V24h5.47C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
          </div>

          {/* Privacy policy and terms moved to the bottom */}
          <p className="text-sm mb-2">© 2024 Your Company. All rights reserved.</p>
          <p className="text-sm mb-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </p>
        </div>

        {/* Empty div for right-side alignment */}
        <div></div>
      </div>
    </footer>
  );
}

