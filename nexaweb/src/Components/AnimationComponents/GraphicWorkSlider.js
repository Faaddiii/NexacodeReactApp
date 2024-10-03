import React, { useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    SentimentSatisfiedAlt,
    AssignmentTurnedIn,
    People,
    AccessTime
} from "@mui/icons-material";

function GraphicWorkSlider() {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // Array of icons and titles to display
    const graphicWorks = [
        { icon: <SentimentSatisfiedAlt sx={{ fontSize: "60px", color: "white" }} />, title: "20 Plus Happy Clients" },
        { icon: <AssignmentTurnedIn sx={{ fontSize: "60px", color: "white" }} />, title: "25 Plus Projects Completed" },
        { icon: <People sx={{ fontSize: "60px", color: "white" }} />, title: "50 Plus Employees" },
        { icon: <AccessTime sx={{ fontSize: "60px", color: "white" }} />, title: "5 Plus Years Of Experience" }
    ];

    return (
        <Card
            sx={{
                backgroundColor: "transparent",
                maxWidth: "80%",
                margin: "auto",
                mt: 5,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white"
            }}
        >
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2} // Adjusts space between icons
            >
                {graphicWorks.map((work, index) => (
                    <Box 
                        key={index} 
                        textAlign="center" 
                        data-aos="fade-up" 
                        sx={{ mb: 2 }} // Adds margin below each icon
                    >
                        <Box sx={{ mb: 1 }}>
                            {work.icon}
                        </Box>
                        
                        <Typography variant="h6">
                           | {work.title} |
                        </Typography> 
                    </Box>
                ))}
            </Box>
        </Card>
    );
}

export default GraphicWorkSlider;
