import React, { useEffect } from "react";
import { Box, Card, Typography, TextField, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactComponent() {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div id="contact">
            <Box sx={{ p: 3, maxWidth: "80%", margin: "auto", color: "white" }}>
                <Typography variant="h4" align="center" mb={3}>
                    Contact Us
                </Typography>
                <Card sx={{ p: 3, backgroundColor: "white", color: "black" }} data-aos="fade-up">
                    <Typography variant="h5" align="center" mb={2}>
                        Get in Touch
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Your Name"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Your Email"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Message"
                            multiline
                            rows={4}
                            sx={{ mb: 2 }}
                            required
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </Box>
        </div>
    );
}

export default ContactComponent;
