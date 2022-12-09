import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
         
      <div className="w-64 bg-red-100 relative group">
      <div class="opacity-0 group-hover:opacity-100 duration-100 absolute inset-x-0 text-center flex justify-center items-end bg-gray-200 text-black font-semibold">{title}</div>
         <img
            src={imgUrl}
            alt={title}
            className="w-full h-36 md:h-48 object-cover cursor-pointer blur-none hover:blur-sm"
         />
         </div>
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
}

export default PortfolioItem;