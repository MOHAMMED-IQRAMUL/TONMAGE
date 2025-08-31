import { Box, Typography } from "@mui/material"
    
const Navbar = () => {
    return (
        <Box className="border-4 border-black relative top-0 left-0 z-10 p-4">

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
                Fantastic Wallpapers
            </Typography>

        </Box>
    )
}

export default Navbar;