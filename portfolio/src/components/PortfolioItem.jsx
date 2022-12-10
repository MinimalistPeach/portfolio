import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, desc }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
      <div className="group">
         <img
            src={imgUrl}
            alt={title}
            className="transition ease-in-out delay-100 duration-300 w-full h-76 md:h-86 object-cover cursor-pointer blur-none group-hover:blur-sm"
         />
         <p class="transition ease-in-out delay-100 duration-300 text-center text-xs md:text-sm dark:text-white opacity-0 group-hover:opacity-100 duration-100 text-black font-semibold">
            {desc}</p>
           
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