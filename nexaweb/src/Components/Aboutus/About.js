import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="about">
            <Box maxWidth="lg" mx="auto">
                <Box>
                    {/* Title Section */}
                    <Typography
                        variant="h4"
                        color="primary"
                        gutterBottom
                        align={isSmallScreen ? "center" : "left"}
                        fontWeight="bold"
                        data-aos="fade-up" // Animation for title
                    >
                        <h1 className="animated-text">About</h1>
                    </Typography>

                    {/* Grid for Image and Content */}
                    <Grid container spacing={4} sx={{ mt: 3, width: "100%" }}>
                        {/* Image Column */}
                        <Grid item xs={12} sm={6} data-aos="fade-right"> {/* Animation for image */}
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    src="/Images/9.png"
                                    alt="About Nexacode"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        transition: "0.7s",
                                        "&:hover": { transform: "scale(1.05)", transition: "0.3s ease-in-out" },
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* Content Column */}
                        <Grid item xs={12} sm={6} data-aos="fade-left"> {/* Animation for content */}
                            <Card variant="outlined" className="div-inherti-opacity" sx={{ p: 3, transition: "0.7s", "&:hover": { transform: "scale(1.03)", transition: "0.3s ease-in-out" } }}>
                                <CardContent>
                                    <Typography variant="h6" color="inherit" gutterBottom>
                                        #1 Digital Solution With <b>5+</b> Years Of Experience.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" paragraph>
                                        At Nexacode Solutions, we have been at the forefront of digital innovation for over a decade, providing top-tier solutions that empower businesses to thrive in today’s fast-paced digital landscape. With 10 years of experience in delivering cutting-edge software, mobile apps, web development, and UI/UX design, we are your trusted partner in achieving digital success.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default About;
