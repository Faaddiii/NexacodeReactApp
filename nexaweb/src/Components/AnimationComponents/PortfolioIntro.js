import React from "react";
import { TypeAnimation } from "react-type-animation";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

// Create a hook for styles
const useStyles = makeStyles((theme) => ({
  container: {
    background:  'transparent', //'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5))', // Gradient for visual appeal
    padding: theme.spacing(4),
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: theme.shadows[3],
  },
  animatedText: {
    color: theme.palette.common.white,
    fontSize: '3rem', // Increased font size
    fontWeight: 'bold', // Ensure text is bold
    animation: 'fadeIn 1s ease-in-out',
  },
}));

const PortfolioIntro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className="animated-text">
        <TypeAnimation
          sequence={[
            "Welcome to My Portfolio",
            1500,
            "Crafting web experiences that stand out",
            1500,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </Typography>
    </Box>
  );
};

export default PortfolioIntro;
