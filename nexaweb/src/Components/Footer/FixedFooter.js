import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Link, Typography, Card } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaWhatsapp, FaPinterest, FaTwitter } from "react-icons/fa"; // Import all icons
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "./Footer.css"

function FixedFooter() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // LinkGroup Component
    const LinkGroup = ({ header, children }) => (
        <Grid item xs={12} sm={6} lg={3}>
            <Box mb={2} textAlign="center" data-aos="fade-up"> {/* Add animation to each LinkGroup */}
                <Typography variant="h6" color="inherit" gutterBottom>
                    {header}
                </Typography>
                <Box component="ul" p={0} m={0} style={{ listStyle: "none" }}>
                    {children}
                </Box>
            </Box>
        </Grid>
    );

    // NavLink Component
    const NavLink = ({ link, label }) => (
        <Box component="li" mb={1}>
            <Link href={link} variant="body2" color="inherit" underline="hover">
                {label}
            </Link>
        </Box>
    );

    return (
       
        <Card
            sx={{
                py: 6,
                px: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark background for footer
                color: 'white',
                width: '100%',
            }}
            data-aos="fade-in" // Animation for the entire footer
        >
            <Box maxWidth="lg" mx="auto">
                <Grid container spacing={4}>
                    {/* Nexacode App Section */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box mb={2} textAlign="center" data-aos="fade-up"> {/* Add fade-up animation */}
                            <Link href="/#" underline="none">
                                <img src="Images/logo.png" height={130} width={130}></img>
                            </Link>
                            <Typography variant="body2" color="inherit" paragraph>
                                #1 Digital Solution With <b>5+</b> Years Of Experience.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Link Groups Section */}
                    <LinkGroup header="Resources">
                        <NavLink link="/#" label="SaaS Development" />
                        <NavLink link="/#" label="Our Products" />
                        <NavLink link="/#" label="User Flow" />
                        <NavLink link="/#" label="User Strategy" />
                    </LinkGroup>

                    <LinkGroup header="Company">
                        <NavLink link="/#" label="About Nexacode" />
                        <NavLink link="/#" label="Contact & Support" />
                        <NavLink link="/#" label="Success History" />
                        <NavLink link="/#" label="Setting & Privacy" />
                    </LinkGroup>

                    <LinkGroup header="Contact Information">
                        {/* Phone Number */}
                        <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center" mb={1}>
                            <Box component="span" color="primary.main" mr={1}>
                                <FaPhone size={20} />
                            </Box>
                            <span>+971 52 825 1053</span>
                        </Typography>

                        {/* Email */}
                        <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center" mb={1}>
                            <Box component="span" color="primary.main" mr={1}>
                                <FaEnvelope size={20} />
                            </Box>
                            <span>info@nexacodesolution.com</span>
                        </Typography>

                        {/* Address */}
                        <Typography variant="body2" color="inherit" display="flex" justifyContent="center" alignItems="center">
                            <Box component="span" color="primary.main" mr={1}>
                                <FaMapMarkerAlt size={20} />
                            </Box>
                            <span>UAE, Dubai</span>
                        </Typography>
                        <Box mt={2} display="flex" justifyContent="center" gap={2}>
                            <Link href="https://www.facebook.com/profile.php?id=61566386040937&mibextid=ZbWKwL" color="inherit" className="social-icon">
                                <FaFacebookF size={24} />
                            </Link>

                            <Link href="https://www.instagram.com/nexa.code.solution?igsh=b2EwYnljZDAxdmJs" color="inherit" className="social-icon">
                                <FaInstagram size={24} />
                            </Link>

                            <Link href="https://www.linkedin.com/company/nexa-code-solution/" color="inherit" className="social-icon">
                                <FaLinkedinIn size={24} />
                            </Link>

                            <Link href="https://skype.com" color="inherit" className="social-icon">
                                <FaSkype size={24} />
                            </Link>

                            <Link href="https://api.whatsapp.com/send?phone=971528251053" color="inherit" className="social-icon">
                                <FaWhatsapp size={24} />
                            </Link>

                            <Link href="https://www.pinterest.com/Nexacodesolution/" color="inherit" className="social-icon">
                                <FaPinterest size={24} />
                            </Link>
                        </Box>
                    </LinkGroup>
                </Grid>
            </Box>
        </Card>
    );
}


export default FixedFooter;
