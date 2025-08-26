import { Box } from "lucide-react"

const Footer = () => {
    return (
        < Box
            sx={{
                mt: { xs: 5, sm: 10 },
                fontSize: 15,
                opacity: 0.7,
                textAlign: "center",
                color: "#223",
            }
            }
        >
            Made with <span style={{ color: "#E85F5C" }}>♥</span> | Enjoy your fresh look!
        </Box >

    );
}

export default Footer;