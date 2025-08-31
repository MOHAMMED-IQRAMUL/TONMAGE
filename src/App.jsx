import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, ButtonBase, Stack, Fade, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

const images = {
  desktop: [
    "images/desktop/Image1.jpg",
    "images/desktop/Image2.jpg",
    "images/desktop/Image3.jpg",
    "images/desktop/Image4.jpg",
    "images/desktop/Image5.jpg",
    "images/desktop/Image6.jpg",
    "images/desktop/Image7.jpg",
    "images/desktop/Image8.jpg",
    "images/desktop/Image9.jpg",
    "images/desktop/Image10.jpg",
    "images/desktop/Image11.jpg",
    "images/desktop/Image12.jpg",
    "images/desktop/Image13.jpg",
    "images/desktop/Image14.jpg"
  ],
  mobile: [
    "images/mobile/image1.jpg",
    "images/mobile/image2.jpg",
    "images/mobile/image3.jpg",
    "images/mobile/image4.jpg",
    "images/mobile/image5.jpg",
    "images/mobile/image6.jpg",
    "images/mobile/image7.jpg",
    "images/mobile/image8.jpg",
    "images/mobile/image9.jpg",
    "images/mobile/image10.jpg",
    "images/mobile/image11.jpg",
    "images/mobile/image12.jpg",
    "images/mobile/image13.jpg",
    "images/mobile/image14.jpg",
    "images/mobile/image15.jpg",
    "images/mobile/image16.jpg",
    "images/mobile/image17.jpg",
    "images/mobile/image18.jpg",
    "images/mobile/image19.jpg",
    "images/mobile/image20.jpg",
    "images/mobile/image21.jpg",
    "images/mobile/image22.jpg",
    "images/mobile/image23.jpg",
    "images/mobile/image24.jpg",
    "images/mobile/image25.jpg",
    "images/mobile/image26.jpg",
    "images/mobile/image27.jpg",
    "images/mobile/image28.jpg"
  ]
};

const categories = [
  { key: "desktop", label: "Desktop" },
  { key: "mobile", label: "Mobile" },
];


function CategoryTabs({ value, onChange }) {
  return (
    <Box
      sx={{
        width:'80%',
        marginX:'auto',
        border:"4px solid black",
        backgroundColor:"white",
        padding:'20px 4px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
<button
  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 hover:bg-green-500 h-10 px-8 py-3 text-black neo-button neo-green"
>
  Search Jobs
</button>


      {categories.map(({ key, label }) => (
        <ButtonBase
          key={key}
          onClick={() => onChange(key)}
          sx={{
            px: 3,
            py: 1,
            borderRadius: 99,
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 600,
            fontSize: { xs: 17, md: 19 },
            color: value === key ? "#fff" : "#2949d3",
            transition: "all 0.22s cubic-bezier(.5,1.5,.44,.99)",
            background: value === key
              ? "linear-gradient(90deg,#5f72be,#9fd6ff)"
              : "transparent",
            boxShadow: value === key ? "0 3px 10px rgba(95,114,190,.19)" : "none"
          }}
        >
          {label}
        </ButtonBase>
      ))}
    </Box>
  );
}

export default function App() {
  const [category, setCategory] = useState("mobile");

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse 80% 60% at 60% 6%,#e3eeff 60%,#bfd2ff 100%)"
    }}>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          fontFamily: "'Poppins', 'Space Grotesk', sans-serif",
          background: "radial-gradient(ellipse 80% 60% at 60% 6%,#e3eeff 60%,#bfd2ff 100%)",
          pb: { xs: 6, md: 10 },
          pt: { xs: 3, md: 6 },
          position: "relative",
          overflowX: "clip",
        }}
      >

        {/* Bokeh and blob backgrounds */}
        <motion.div
          animate={{ opacity: [0.5, 0.33, 0.4, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
          style={{
            position: "absolute",
            zIndex: 0,
            left: "-120px",
            top: "-80px",
          }}
        >
          <svg width="340" height="240">
            <ellipse cx="180" cy="95" rx="130" ry="80" fill="#8ca9ff" fillOpacity="0.27" />
            <ellipse cx="120" cy="170" rx="70" ry="50" fill="#4ec0fe" fillOpacity="0.21" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 17, repeat: Infinity, repeatType: "mirror" }}
          style={{ position: "absolute", zIndex: 0, right: '-100px', bottom: "-100px" }}
        >
          <svg width="230" height="200">
            <ellipse cx="130" cy="90" rx="110" ry="70" fill="#baeeff" fillOpacity="0.28" />
          </svg>
        </motion.div>



        
        <Stack alignItems="center" spacing={1} sx={{ zIndex: 2, pt: { xs: 2, md: 1 } }}>

          <Typography
            sx={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: { xs: 17, sm: 21 },
              color: "#3d4a78",
              fontWeight: 400,
              letterSpacing: ".03em",
              opacity: 0.74,
              textAlign: "center",
              mb: 2,
              px: 1.5,
              maxWidth: 600,
            }}
          >
            Discover & download your favorite aesthetic backgrounds for <b>Mobile</b> or <b>Desktop</b>.<br />
            Always new, always beautiful. <span style={{ fontSize: 16, color: "#4ec0fe" }}>✨</span>
          </Typography>
        </Stack>

        
        <CategoryTabs value={category} onChange={setCategory} />

        {/* WALLPAPERS GRID */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          sx={{ mt: { xs: 1, sm: 2 }, zIndex: 2 }}
        >
          {images[category].map((img, idx) => (
            <Grid item xs={6} sm={4} md={3} key={img}>
              <Fade in timeout={900 + idx * 32}>
                <motion.div
                  whileHover={{
                    scale: 1.075,
                    rotate: -2,
                    boxShadow: "0 8px 32px 2px rgba(90,110,255,0.19), 0 2px 16px rgba(100,196,244,0.09)",
                    zIndex: 9
                  }}
                  whileTap={{ scale: 0.98, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 340, damping: 22 }}
                  style={{
                    borderRadius: "2rem",
                    background: "rgba(255,255,255,.73)",
                    boxShadow: "0 4px 18px rgba(100,146,220,0.061)",
                    overflow: "hidden",
                    minHeight: 240,
                    position: "relative",
                    margin: 3,
                    cursor: "pointer",
                    backdropFilter: "blur(2.2px)"
                  }}
                >
                  <motion.img
                    src={`${import.meta.env.DEVELOPMENT_MODE == "RUN" ? "" : "/TONMAGE/"}${img}`}
                    alt={`Wallpaper ${idx + 1}`}
                    style={{
                      minWidth:'200px',
                      width: "100%",
                      height: 214,
                      objectFit: "cover",
                      display: "block",
                      transition: "transform .6s cubic-bezier(0.24,1.96,.42,.98)",
                    }}
                    initial={{ scale: 1.02, opacity: 0.3, y: 12 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: .17 + idx * 0.04, duration: 0.56 }}
                    draggable={false}
                    loading="lazy"
                    
                  />
                  <Box
                    sx={{
                      position: "absolute", right: 16, top: 15,
                      bgcolor: "rgba(255,255,255,0.19)",
                      borderRadius: "50%", boxShadow: "0 0 12px #29c0ffe6",
                      zIndex: 3,
                    }}
                  >
                    <IconButton
                      component="a"
                      href={img}
                      download
                      title="Download"
                      sx={{
                        color: "#2469fe",
                        background: "rgba(255,255,255,.84)",
                        boxShadow: "0 1px 8px #c0e9ff33",
                        "&:hover": {
                          background: "#69bbfe",
                          color: "#fff",
                          boxShadow: "0 0 24px #478fff99"
                        }
                      }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </Box>
                  {/* Optional: Wallpaper Name */}
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#30449a",
                      pb: 1.1,
                      pt: .6,
                    }}
                  >
                    #{idx + 1}
                  </Typography>
                </motion.div>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* FOOTER */}
        <Box sx={{ mt: { xs: 5, sm: 11 }, fontSize: 15, opacity: .6, textAlign: "center", color: "#223" }}>
          Made with <span style={{ color: "#edb4d8" }}>♥</span> | Enjoy your fresh look!
        </Box>
      </Box>

    </Box>
  );
}
