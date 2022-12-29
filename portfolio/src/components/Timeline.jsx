import React from 'react';
import TimelineItem from './TimelineItem';
import Title from './Title';
import { useTranslation } from 'react-i18next';

function Timeline() {
   const {t} = useTranslation(["timeline_translation"]);

   var timeline = t('timeline_translation:timeline', { returnObjects: true })

   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>{t("timeline_translation:title")}</Title>
            {timeline &&
            timeline.length > 0 &&
            timeline.map(item => {
               return (
                  <React.Fragment key={item.title}>
                     <TimelineItem 
                     year={item.year}
                     title={item.title} 
                     duration={item.duration} 
                     details={item.details}/>
                  </React.Fragment>
               )
            })}
         </div>
      </div>
   )
}
 
 export default Timeline;