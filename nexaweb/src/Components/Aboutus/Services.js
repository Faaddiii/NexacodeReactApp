import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Services() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    // Initialize AOS animations on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="services">
            <Box
                sx={{
                    py: 12,
                    px: 4,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'blur(10px)',
                    color: 'white'
                }}
            >
                <Box maxWidth="lg" mx="auto">
                    <Box>
                        <Typography
                            variant="h4"
                            color="primary"
                            gutterBottom
                            align={isSmallScreen ? "center" : "left"}
                            fontWeight="bold"
                            data-aos="fade-up"  // Apply AOS animation here
                        >
                            <h1 className="animated-text">Our Services & Solutions</h1>
                        </Typography>
                        <p className="animated-subtext" data-aos="fade-up">
                            At Nexacode Solutions, we offer a comprehensive suite of services,
                            including custom software development, mobile app solutions, and web design.
                            Our innovative, tailored approaches ensure your business stays ahead in the competitive digital landscape.
                        </p>

                        {/* Grid for Cards */}
                        <Grid container spacing={4} sx={{ mt: 3 }}>
                            <Grid item xs={12} sm={6} data-aos="fade-right"> {/* First Box with fade-right animation */}
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            Web Design and Web Development
                                        </Typography>
                                        <div><img src="/Images/7.png" height={300} width={300} alt="Web Design" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Transform your online presence with our cutting-edge web design and development solutions
                                            tailored to meet your unique business needs.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            We create responsive, user-friendly websites that not only captivate visitors but also drive engagement and conversions.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} data-aos="fade-left"> {/* Second Box with fade-left animation */}
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            Mobile Application Development
                                        </Typography>
                                        <div><img src="/Images/2.png" height={300} width={300} alt="Mobile App Development" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Bring your ideas to life with our innovative mobile application development services.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Designed for both iOS and Android platforms.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            We deliver intuitive, high-performance apps that enhance user experience and drive business growth.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        {/* Repeat for remaining boxes */}
                        <Grid container spacing={4} sx={{ mt: 3 }}>
                            {/* Digital Marketing Section */}
                            <Grid item xs={12} sm={6} data-aos="fade-right">
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            Digital Marketing
                                        </Typography>
                                        <div><img src="/Images/4.png" height={300} width={300} alt="Digital Marketing" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Boost your online presence with targeted digital marketing strategies.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Engage customers through social media, email campaigns, and personalized content.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Leverage data analytics to understand user behavior and optimize campaigns.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Grow your brand and increase conversions with our expert marketing services.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* SEO Optimization Section */}
                            <Grid item xs={12} sm={6} data-aos="fade-left">
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            SEO Optimization
                                        </Typography>
                                        <div><img src="/Images/3.png" height={300} width={300} alt="SEO Optimization" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Improve your website’s visibility with advanced SEO techniques.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Achieve higher rankings on search engines through on-page and off-page optimization.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Increase organic traffic with keyword research, link building, and content strategy.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Stay ahead of competitors with our cutting-edge SEO tools and expertise.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        {/* Repeat for remaining boxes */}
                        <Grid container spacing={4} sx={{ mt: 3 }}>
                            <Grid item xs={12} sm={6} data-aos="fade-right">
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            ERP Systems
                                        </Typography>
                                        <div><img src="/Images/5.png" height={300} width={300} alt="ERP Systems" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Streamline operations and cut costs with AI-powered ERP solutions.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Predict equipment failures and avoid downtime with AI-powered maintenance.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Optimize your supply chain with AI-powered forecasting and management.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Automate tasks and free up your team for more strategic work.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6} data-aos="fade-left">
                                <Card variant="outlined" sx={{ p: 3, transition: "0.7s", '&:hover': { transform: 'scale(1.03)', transition: '0.3s ease-in-out' } }}>
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>
                                            Custom Software Development
                                        </Typography>
                                        <div><img src="/Images/6.png" height={300} width={300} alt="Custom Software Development" /></div>
                                        <Typography variant="body2" color="textSecondary">
                                            Build amazing mobile apps for iOS and Android that your users will love.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Create powerful web apps that are easy to use and scale with your business.
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Integrate our AI solutions seamlessly with your existing systems and tools.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Services;
