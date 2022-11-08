import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
import { WEEK_DAYS } from "../../constants/constants";



const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek - WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data?.list?.splice(0, 7)?.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather" className="small-icon" src={`icons/${item.weather[0].icon}.png`}/>
                        <label className="day">{forecastDays[idx]}</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
