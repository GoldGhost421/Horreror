import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  // MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const changeLanguage = (lng) => {
    localStorage.setItem("lang", lng)
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      display="flex"
      textAlign="center"
      width="100%"
      height="60px"
      backgroundColor="#000" // set background color to black
      color="#fff" // set text color to white
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color="#fff" // set text color to white
        >
          ECOMMER
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "#fff" }} style={{ display: "none" }}>
            <SearchOutlined />
          </IconButton>
          {/* ACCOUNT BUTTON */}
          <IconButton sx={{ color: "#fff" }} style={{ display: "none" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "#fff" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          {/* <IconButton sx={{ color: "black" }} style={{display: "none"}}>
            <MenuOutlined />
          </IconButton> */}
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("bg")}>BG</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;