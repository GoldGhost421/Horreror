import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box
      mt="70px"
      p="40px 0"
      backgroundColor="#000" // set background color to black
      color="#fff" // set text color to white
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color="#fff" // set text color to white
          >
            ECOMMER
          </Typography>
          <Typography variant="h5" color="#fff">
            Discover endless possibilities with our premium selection of
            products. Shop now and experience unparalleled quality, style, and
            convenience. From fashion and beauty essentials to home decor and
            gadgets, we have everything you need to elevate your lifestyle.
            Enjoy seamless browsing, secure transactions, and swift delivery.
            Your satisfaction is our top priority, so indulge in a seamless
            shopping experience with our reliable customer support. Join our
            community of satisfied customers and embrace a world of online
            shopping at its finest. Start exploring today and unlock a world of
            limitless shopping possibilities.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="#fff">
            About Us
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Careers
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff"> 
            Our Stores
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Terms & Conditions
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Privacy Policy
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="#fff">
            Customer Care
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Help Center
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff"> 
            Track Your Order
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Corporate & Bulk Purchasing
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            Returns & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color="#fff">
            Contact Us
          </Typography>
          <Typography variant="h5" mb="30px" color="#fff">
            123 Maple Street, Toronto, Ontario, M1A 1A1
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;