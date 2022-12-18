import React from 'react';
import { useTranslation } from 'react-i18next';

function TimelineItem({ year, title, duration, details }) {

   const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);
    
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };
    
    const observer = new IntersectionObserver(callback);
    
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    const {t} = useTranslation();
   
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
         <li className="js-show-on-scroll mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {t('year')}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {t('title')}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  Duration: {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;