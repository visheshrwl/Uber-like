// FaqSection.jsx

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import the arrow icon


// Import Header and Footer components
import Header from "./header"; // Adjust the path based on your folder structure
import Footer from "./footer";

const FaqSection = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main FAQ Section */}
      <div
        style={{
          padding: "40px",
          paddingTop: "10px",
          backgroundColor: "#f3f3f3",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2e2e2e",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* First FAQ */}

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{
            marginBottom: "15px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            borderRadius: "8px",
            backgroundColor: "#eaeaea",
            transform: expanded === "panel1" ? "scale(1.02)" : "scale(1)",
          }}
          className="accordion-hover"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform =
              expanded === "panel1" ? "scale(1.02)" : "scale(1)")
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{
              backgroundColor: "#d5d5d5",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              What is this project about?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#fdfdfd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography style={{ color: "#666" }}>
              This project is a driver dashboard application that allows drivers
              to track rides, accept/reject ride requests, and provide real-time
              updates.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Second FAQ */}

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={{
            marginBottom: "15px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            borderRadius: "8px",
            backgroundColor: "#eaeaea",
            transform: expanded === "panel2" ? "scale(1.02)" : "scale(1)",
          }}
          className="accordion-hover"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform =
              expanded === "panel2" ? "scale(1.02)" : "scale(1)")
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{
              backgroundColor: "#d5d5d5",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              How do I track my ride?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#fdfdfd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography style={{ color: "#666" }}>
              Drivers can track their rides using the in-built map feature,
              which shows pickup and dropoff locations with real-time updates.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Third FAQ */}

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={{
            marginBottom: "15px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            borderRadius: "8px",
            backgroundColor: "#eaeaea",
            transform: expanded === "panel3" ? "scale(1.02)" : "scale(1)",
          }}
          className="accordion-hover"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform =
              expanded === "panel3" ? "scale(1.02)" : "scale(1)")
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{
              backgroundColor: "#d5d5d5",
              borderRadius: "8px",
              padding: "10px 20px",
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", color: "#333" }}
            >
              How to accept or reject a ride request?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#fdfdfd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography style={{ color: "#666" }}>
              When a new ride request comes in, the driver will see
              accept/reject buttons on the dashboard. Simply click the desired
              button to proceed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more FAQs if needed */}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default FaqSection;
