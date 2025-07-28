import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, ButtonBase, Stack, Fade } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const images = {
  desktop: [
    "TONMAGE/images/desktop/Image1.jpg",
    "TONMAGE/images/desktop/Image2.jpg",
    "TONMAGE/images/desktop/Image3.jpg",
    "TONMAGE/images/desktop/Image4.jpg",
    "TONMAGE/images/desktop/Image5.jpg",
    "TONMAGE/images/desktop/Image6.jpg",
    "TONMAGE/images/desktop/Image7.jpg",
    "TONMAGE/images/desktop/Image8.jpg",
    "TONMAGE/images/desktop/Image9.jpg",
    "TONMAGE/images/desktop/Image10.jpg",
    "TONMAGE/images/desktop/Image11.jpg",
    "TONMAGE/images/desktop/Image12.jpg",
    "TONMAGE/images/desktop/Image13.jpg",
    "TONMAGE/images/desktop/Image14.jpg"
  ],
  mobile: [
    "TONMAGE/images/mobile/image1.jpg",
    "TONMAGE/images/mobile/image2.jpg",
    "TONMAGE/images/mobile/image3.jpg",
    "TONMAGE/images/mobile/image4.jpg",
    "TONMAGE/images/mobile/image5.jpg",
    "TONMAGE/images/mobile/image6.jpg",
    "TONMAGE/images/mobile/image7.jpg",
    "TONMAGE/images/mobile/image8.jpg",
    "TONMAGE/images/mobile/image9.jpg",
    "TONMAGE/images/mobile/image10.jpg",
    "TONMAGE/images/mobile/image11.jpg",
    "TONMAGE/images/mobile/image12.jpg",
    "TONMAGE/images/mobile/image13.jpg",
    "TONMAGE/images/mobile/image14.jpg",
    "TONMAGE/images/mobile/image15.jpg",
    "TONMAGE/images/mobile/image16.jpg",
    "TONMAGE/images/mobile/image17.jpg",
    "TONMAGE/images/mobile/image18.jpg",
    "TONMAGE/images/mobile/image19.jpg",
    "TONMAGE/images/mobile/image20.jpg",
    "TONMAGE/images/mobile/image21.jpg",
    "TONMAGE/images/mobile/image22.jpg",
    "TONMAGE/images/mobile/image23.jpg",
    "TONMAGE/images/mobile/image24.jpg",
    "TONMAGE/images/mobile/image25.jpg",
    "TONMAGE/images/mobile/image26.jpg",
    "TONMAGE/images/mobile/image27.jpg",
    "TONMAGE/images/mobile/image28.jpg"
  ]
};

const categories = [
  { key: "desktop", label: "Desktop" },
  { key: "mobile", label: "Mobile" },
];

// Fancy tab
function CategoryTabs({ value, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: 99,
        bgcolor: "rgba(255,255,255,0.15)",
        boxShadow: "0 4px 24px 0 rgba(90,120,255,0.10)",
        backdropFilter: "blur(8px)",
        my: 2,
        p: 1
      }}
    >
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

      {/* HEADER */}
      <Stack alignItems="center" spacing={1} sx={{ zIndex: 2, pt: { xs: 2, md: 1 } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
            letterSpacing: "-.2px",
            fontWeight: 700,
            fontSize: { xs: 32, sm: 46, md: 62 },
            background: "linear-gradient(92deg, #3752fa, #70aaff 75%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: .2,
            textAlign: "center",
            lineHeight: 1.05,
            textShadow: "0 4px 24px rgba(86,118,255,0.20)",
            pointerEvents: "none"
          }}
        >
          Fantastic<br />
          Wallpapers
        </Typography>
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

      {/* CATEGORY TAB */}
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
                  src={img}
                  alt={`Wallpaper ${idx + 1}`}
                  style={{
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
  );
}
