"use client";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import ContrastIcon from '@mui/icons-material/Contrast';
import { Box } from "@mui/material";
import "./styles.scss"


const ThemeSelector = () => {
    const [color, setColor] = useState("#fcc233");
    const [isVisible, setIsVisible] = useState(false)

    const openColorPicker = () => {
        setIsVisible(prev => !prev)
    }

    useEffect(() => {
        document.documentElement.style.setProperty("--global-color-accent", color);
        document.documentElement.style.setProperty("--global-color-accent-hover", adjustBrightness(color, -10));
        document.documentElement.style.setProperty("--global-color-accent-alt", adjustBrightness(color, 150));
    }, [color]);

    // Function to adjust brightness of a hex color
    const adjustBrightness = (hex: string, percent: number) => {
        let num = parseInt(hex.replace("#", ""), 16);
        let r = (num >> 16) + percent;
        let g = ((num >> 8) & 0x00ff) + percent;
        let b = (num & 0x0000ff) + percent;

        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));

        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    };
    return <Box className="theme-selector-container">
        <ContrastIcon onClick={openColorPicker} className="theme-selector-icon" />
        <Box sx={{ display: isVisible ? 'block' : 'none' }} className="color-picker-container">
            <HexColorPicker color={color} onChange={setColor} />
        </Box>
    </Box>;
};

export default ThemeSelector;
