import React from 'react';
import portfolioen from '../data/en/portfolio';
import portfoliohu from '../data/hu/portfolio';
import PortfolioItem from './PortfolioItem';

function PortfolioEN() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioen.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  desc={project.desc}
               />
            ))}
         </div>
      </div>
   )
}

const PortfolioHU = () => {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfoliohu.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  desc={project.desc}
               />
            ))}
         </div>
      </div>
   )
 };

export {PortfolioEN, PortfolioHU};