import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <Box className="relative top-0 left-0 z-10 p-4 border-4 border-black">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Space Grotesk','Poppins',sans-serif",
            letterSpacing: "-.2px",
            fontWeight: 700,
            fontSize: { xs: 32, sm: 46, md: 62 },
            background: "linear-gradient(90deg, #94FBAB, #E85F5C, #FFF07C)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 0.5,
            textAlign: "center",
            lineHeight: 1.05,
            textShadow: "0 6px 28px rgba(148, 251, 171, 0.35)",
            pointerEvents: "none",
          }}
        >
          Fantastic Wallpapers
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Navbar;
