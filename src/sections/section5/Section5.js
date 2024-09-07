import React from "react";

import "./Section5.css";

import { motion } from "framer-motion";
import hackathonData from "../../assets/data/hackathonData";

const Section5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section5"
      id="format"
    >
      <div className="codeutsava__section5-body">
        <div className="codeutsava__section5-title">Our Format</div>
        <div className="codeutsava__section5-content">
          Check out the schedule for the hackathon.
        </div>
        <div className="codeutsava__section5-format-container">
            <div className="codeutsava__section5-format-card format-card1">
                <p className="codeutsava__section5-format-card-date">{hackathonData[0].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[0].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[0].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[0].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card2">
                <p className="codeutsava__section5-format-card-date">{hackathonData[1].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[1].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[1].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[1].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card3">
                <p className="codeutsava__section5-format-card-date">{hackathonData[2].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[2].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[2].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[2].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card4">
                <p className="codeutsava__section5-format-card-date">{hackathonData[3].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[3].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[3].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[3].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card5">
                <p className="codeutsava__section5-format-card-date">{hackathonData[4].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[4].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[4].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[4].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card6">
                <p className="codeutsava__section5-format-card-date">{hackathonData[5].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[5].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[5].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[5].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card7">
                <p className="codeutsava__section5-format-card-date">{hackathonData[6].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[6].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[6].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[6].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card8">
                <p className="codeutsava__section5-format-card-date">{hackathonData[7].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[7].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[7].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[7].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card9">
                <p className="codeutsava__section5-format-card-date">{hackathonData[8].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[8].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[8].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[8].description}</p>
            </div>
            <div className="codeutsava__section5-format-card format-card10">
                <p className="codeutsava__section5-format-card-date">{hackathonData[9].date}</p>
                <div className="codeutsava__section5-format-card-title-container">
                    <div className="codeutsava__section5-format-card-title-number">{hackathonData[9].id}</div>
                    <p className="codeutsava__section5-format-card-title">{hackathonData[9].title}</p>
                </div>
                <p className="codeutsava__section5-format-card-description">{hackathonData[9].description}</p>
            </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Section5;
