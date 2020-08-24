import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

function convertTime(datetime) {
var dd = ' AM';

var hour = datetime.getUTCHours();
hour = hour - 7;
if (hour < 0) {
    hour = hour + 24;
}
var h = hour;
if (h >= 12) {
    hour = h - 12;
    dd = ' PM';
}
if (hour === 0) {
    hour = 12;
}

var minutes = datetime.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;

return hour + ':' + minutes + dd;
}

function formatDate(datetime) {
const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

var month = monthArr[datetime.getMonth()];

var day = datetime.getDate().toString();
var year = datetime.getFullYear();
day = day.length > 1 ? day : '0' + day;

var time = convertTime(datetime);
return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
}

function formatDates(start, end) {
var startDate = new Date(start);
var endDate = new Date(end);

if (
    startDate.getDay() == endDate.getDay() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDay() === endDate.getDay() &&
    startDate.getFullYear() === endDate.getFullYear()
) {
    return formatDate(startDate) + ' - ' + convertTime(endDate) + ' PT';
} else {
    return formatDate(startDate) + ' - ' + formatDate(endDate) + ' PT';
}
}
function EventAccord(props) {
    const accordList = props.data.events.map((event, i) =>
    <Accordion className="accordion-club" allowZeroExpanded key={i}>
        <AccordionItem key={event.time} className="accordion-group">
            <div className="event-flex-container">
                <div className="event-flex-left">
                    {event.name}
                    <a target="_blank" rel="noopener noreferrer" href={event.link} key={i}>
                        <img
                        className="res-img"
                        src={require('./assets/linkImages/resLink.png')}
                        alt="resource"
                        />
                    </a>
                </div>
                <div className="event-flex-right">{formatDates(event.event_start, event.event_end)}</div>
            </div>
            <AccordionItemHeading className="accordion__heading-club">

                    <AccordionItemButton className="accordion__button-club">   
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel-event">
                {event.description}
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>)
    
    return(
        accordList
    )
}
export default EventAccord
