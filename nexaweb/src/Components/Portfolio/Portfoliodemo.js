import React from "react";
import "./PortfolioDemo.css"; // External CSS for animations and styling
import PortfolioGrid from "./PortfolioGrid";
import PortfolioIntro from "../AnimationComponents/PortfolioIntro";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Portfoliodemo = () => {
    const theme = createTheme();
    return (
        <div className="portfolio-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="animated-heading">
                        <ThemeProvider theme={theme}>
                            <PortfolioIntro />
                        </ThemeProvider></h1>
                </div>
            </section>
            <PortfolioGrid />
        </div>
    );
};

export default Portfoliodemo;
