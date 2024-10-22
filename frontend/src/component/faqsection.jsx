// FaqSection.jsx
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Import Header and Footer components
import Header from './header';  // Adjust the path based on your folder structure
import Footer from './footer';

const FaqSection = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main FAQ Section */}
      <div style={{ margin: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>

        {/* First FAQ */}
        <Accordion>
          <AccordionSummary>
            <Typography>What is this project about?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This project is a driver dashboard application that allows drivers to track rides, accept/reject ride requests, and provide real-time updates.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Second FAQ */}
        <Accordion>
          <AccordionSummary>
            <Typography>How do I track my ride?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Drivers can track their rides using the in-built map feature, which shows pickup and dropoff locations with real-time updates.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Third FAQ */}
        <Accordion>
          <AccordionSummary>
            <Typography>How to accept or reject a ride request?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When a new ride request comes in, the driver will see accept/reject buttons on the dashboard. Simply click the desired button to proceed.
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
