import React from 'react';
import TimelineItem from './TimelineItem';
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id='timeline'>
        <div className="timelineBox">
            {
                data.projects.map((item, index) => (
                    <TimelineItem
                    heading={item.title}
                    text={item.date}
                    index={index}
                    key={item.title} />
                ))
            }
        </div>
    </div>
  )
}

export default Timeline