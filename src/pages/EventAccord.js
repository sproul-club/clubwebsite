import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

function EventAccord(props) {
    const accordList = props.data.events.map((event) =>
    <Accordion className="accordion-test" allowZeroExpanded >
        <AccordionItem key={event.time}>
                <AccordionItemHeading>
                        <AccordionItemButton> 
                            <div className="event-flex-container">
                                <div className="event-flex-left">{event.name}</div>
                                <div className="event-flex-right">{event.time}</div>
                            </div>
                        </AccordionItemButton>
                </AccordionItemHeading>
            <AccordionItemPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ipsum urna, at ullamcorper leo tincidunt vitae. Integer laoreet accumsan neque, et placerat turpis hendrerit nec. Sed id auctor ligula. Morbi ac convallis massa, sit amet finibus urna. Morbi sollicitudin leo eget elit mollis ultrices. Vestibulum faucibus dolor ac lacinia iaculis. In at velit tincidunt, tempus quam eget, suscipit massa. Ut porta purus nec ante mollis, id viverra purus efficitur. Nam rhoncus ligula purus, id tristique enim finibus sed. Suspendisse ultricies finibus purus, et volutpat tortor ultrices quis. Nam tempor, nisi eget congue tempus, ligula urna placerat massa, ac condimentum tortor ligula non mauris.
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>)
    
    return(
        accordList
    )
}
export default EventAccord