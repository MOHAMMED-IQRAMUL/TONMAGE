import React, { useState } from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

const images = {
  desktop: [
    "images/desktop/Image (1).jpg",
    "images/desktop/Image (2).jpg",
    "images/desktop/Image (3).jpg",
    "images/desktop/Image (4).jpg",
    "images/desktop/Image (5).jpg",
    "images/desktop/Image (6).jpg",
    "images/desktop/Image (7).jpg",
    "images/desktop/Image (8).jpg",
    "images/desktop/Image (9).jpg",
    "images/desktop/Image (10).jpg",
    "images/desktop/Image (11).jpg",
    "images/desktop/Image (12).jpg",
    "images/desktop/Image (13).jpg",
    "images/desktop/Image (14).jpg"
  ],
  mobile: [
    "images/mobile/Image (1).jpg",
    "images/mobile/Image (2).jpg",
    "images/mobile/Image (3).jpg",
    "images/mobile/Image (4).jpg",
    "images/mobile/Image (5).jpg",
    "images/mobile/Image (6).jpg",
    "images/mobile/Image (7).jpg",
    "images/mobile/Image (8).jpg",
    "images/mobile/Image (9).jpg",
    "images/mobile/Image (10).jpg",
    "images/mobile/Image (11).jpg",
    "images/mobile/Image (12).jpg",
    "images/mobile/Image (13).jpg",
    "images/mobile/Image (14).jpg",
    "images/mobile/Image (15).jpg",
    "images/mobile/Image (16).jpg",
    "images/mobile/Image (17).jpg",
    "images/mobile/Image (18).jpg",
    "images/mobile/Image (19).jpg",
    "images/mobile/Image (20).jpg",
    "images/mobile/Image (21).jpg",
    "images/mobile/Image (22).jpg",
    "images/mobile/Image (23).jpg",
    "images/mobile/Image (24).jpg",
    "images/mobile/Image (25).jpg",
    "images/mobile/Image (26).jpg",
    "images/mobile/Image (27).jpg",
    "images/mobile/Image (28).jpg"
  ]
};


const categories = [
  { key: "desktop", label: "Desktop Wallpapers" },
  { key: "mobile", label: "Mobile Wallpapers" },
];

export default function App() {
  const [category, setCategory] = useState("desktop");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg, #b6e2ff 0%, #b8c6ff 100%)",
        py: { xs: 2, md: 4 },
      }}
    >
      {/* Decorative Graphics (SVG Blobs) */}
      <Box
        sx={{
          position: "absolute", top: 0, left: 0, width: "100vw", zIndex: -1,
          opacity: 0.25,
        }}
      >
        <svg height="200" width="100%" viewBox="0 0 100 20" fill="none">
          <ellipse cx="50" cy="10" rx="80" ry="15" fill="#90caf9" />
        </svg>
      </Box>

      <Typography
        variant="h2"
        align="center"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          marginBottom: 2,
          letterSpacing: "1px",
        }}
      >
        Explore Stunning Wallpapers
      </Typography>
      <Typography variant="h5" align="center" sx={{ opacity: 0.7, mb: 4 }}>
        Download your favorites for desktop or mobile—enjoy new vibes every day!
      </Typography>
      <Grid container justifyContent="center" sx={{ mb: 3 }}>
        {categories.map((cat) => (
          <Button
            key={cat.key}
            color={cat.key === category ? "primary" : "secondary"}
            onClick={() => setCategory(cat.key)}
            sx={{
              mx: 1, px: 3, py: 1, borderRadius: 3, fontWeight: "bold",
              background: cat.key === category ? "#1976d2" : "#fff",
              color: cat.key === category ? "#fff" : "#1976d2",
              boxShadow: cat.key === category ? 3 : 1,
              fontSize: { xs: "1rem", md: "1.2rem" },
              transition: "all 0.3s",
            }}
          >
            {cat.label}
          </Button>
        ))}
      </Grid>
      {/* Wallpapers Grid */}
      <Grid container spacing={3} justifyContent="center">
        {images[category].map((img, idx) => (
          <Grid item xs={6} sm={4} md={3} key={img}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              style={{ borderRadius: "24px", overflow: "hidden", background: "#fff", boxShadow: "0 4px 30px rgba(0,0,0,0.07)" }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={img}
                  alt={`Wallpaper ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  className="wallpaper-img"
                />
                <Box sx={{
                  position: "absolute", right: 8, bottom: 8, background: "#fff", borderRadius: "50%",
                  boxShadow: "0 0 8px #0002", p: 0.5,
                }}>
                  <IconButton
                    component="a"
                    href={img}
                    download
                    sx={{
                      color: "#1976d2",
                      "&:hover": { color: "#0d47a1", background: "#e3f2fd" },
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </Box>
              </Box>
              <Typography align="center" sx={{ py: 1, fontWeight: 500 }}>
                Wallpaper {idx + 1}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      {/* Subtle UI Animation */}
      <style>
        {`
          .wallpaper-img:hover {
            transform: scale(1.04) rotate(-1.5deg);
            box-shadow: 0 8px 32px rgba(0,64,128,0.12);
            cursor: pointer;
          }
        `}
      </style>
    </Box>
  );
}
