import { Box, Button, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme";
// import { useTranslation } from "react-i18next";

import heroTextureImport from "../../assets/main.png";

const MainCarousel = () => {
  // const { t } = useTranslation();
  // const isNonMobile = useMediaQuery("(min-width:600px");

  return (
    <Box key={`image`}>
      <img
        src={heroTextureImport}
        alt=""
        style={{
          width: "100%",
          height: "700px",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        color="white"
        padding="20px"
        borderRadius="1px"
        textAlign="center"
        // backgroundColor="rgba(0, 0, 0, 0.4)"
        position="absolute"
        top="0"
        bottom="150px"
        left="0"
        right="0"
        maxWidth="280px"
        maxHeight="fit-content"
        margin="auto"
      >
        <Typography variant="h1" fontSize={"50px"} color="darkRed">
          Horreror
        </Typography>
        <Typography
          fontWeight="bold"
        >
          NQKAKUV QUOTE
        </Typography>
        <Button
        m="30"
        sx={{ backgroundColor: shades.primary[300], color: "white" }}
        onClick={() => {
          document.location.href = "#shopping-list";
        }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

export default MainCarousel;
