import React from 'react';
import PortfolioItem from './PortfolioItem';
import { useTranslation } from 'react-i18next';

function Portfolio() {

   const {t} = useTranslation(["portfolio_translation"]);

   var portfolio = t('portfolio_translation:portfolio', { returnObjects: true })


   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio &&
            portfolio.length > 0 &&
            portfolio.map(item => {
               return (
                  <React.Fragment key={item.title}>
                  <PortfolioItem 
                     title={item.title}
                     imgUrl={item.imgUrl} 
                     stack={item.stack} 
                     link={item.link}
                     desc={item.desc}/>
                  </React.Fragment>
               )
            })}  
         </div>
      </div>
   )
}


export default Portfolio;