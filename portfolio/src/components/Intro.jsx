import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">MinimalistPeach</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Information Technology Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a {new Date().getFullYear()-2001} year old Software Information Technology student at the University of Miskolc.
            I'm very passionate about programming, that is the reason this page exists.
            Here you can find all my references and past projects.
         </p>
      </div>
   )
}

export default Intro;