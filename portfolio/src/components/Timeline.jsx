import React from 'react';
import timelineen from '../data/en/timeline';
import timelinehu from '../data/hu/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function TimelineEN() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>My biggest milestones</Title>
            {timelineen.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

const TimelineHU = () => {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>A legnagyobb mérföldköveim</Title>
            {timelinehu.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
 };
 
 export {TimelineEN, TimelineHU};