import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import CapexLogo from "../../img/CapeExLogo.png";
import {
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import logo from "../../img/jma-logo.svg";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import MuiDrawer from "components/MuiDrawer";
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom";
import HeaderDropdowns from "components/HeaderDropdowns";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end"
});

const StyledBox = styled(Box)({
  marginTop: "10px",
  padding: "20px"
});

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "2%"
});

const HeadingTypography = styled(Typography)({
  flexGrow: 1,
  fontSize: "16px",
  fontWeight: "400",
  mt: 1,
});

const StyledIconButton = styled(IconButton)({
  width: { xs: "25px", sm: "30px" },
  height: { xs: "25px", sm: "30px" },
});


const StyledDivider = styled(Divider)({
  borderColor: "white",
  height: "30px",
  mt: 10,
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  background: "linear-gradient(to right, #005AA6, #0A2240)",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


export default function ManagerHeader() {
  const [searchValue, setSearchValue] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dataTable, setDataTable] = React.useState([]);
  const [details, setDetails] = React.useState([]);
  const [drawer, setDrawer] = React.useState(false)
  const navigate = useNavigate();
  const userData = useSelector((state) => state.home.userDetails);
  const dispatch = useDispatch();
  const params = useParams();
  const isManager = true;
  const [anchorTimesheets, setAnchorTimesheets] = React.useState(null);
  const [anchorTeam, setAnchorTeam] = React.useState(null);

  const handleTimesheetsClick = (event) => {
    setAnchorTimesheets(anchorTimesheets ? null : event.currentTarget);
  };

  const handleTeamClick = (event) => {
    setAnchorTeam(anchorTeam ? null : event.currentTarget);
  };

  const handleCloseTimesheets = () => {
    setAnchorTimesheets(null);
  };

  const handleCloseTeam = () => {
    setAnchorTeam(null);
  };

  const settings = ["Welcome Vijay Joshi", "Logout"];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawer = () => {
    setDrawer(true)
  }

  const handleClose = () => {
    setDrawer(false)
  }

  const handleMenuItemClick = (setting) => {
    if (setting === "Logout") {
    }
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
      <StyledAppBar>
        <Toolbar>
          <img
            src={CapexLogo}
            alt="Logo"
            loading="lazy"
            onClick={() => navigate("/home")}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              marginBottom: "15px"
            }}
          />

          <StyledDivider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              display: { sm: "block" },
              marginX: "12px",
              marginY: "20px"
            }}
          />

          <HeadingTypography
            variant="h6"
            component="div"
            sx={{
              display: { sm: "block" },
              marginLeft: "10px",
            }}
          >
            CATS 2.0
          </HeadingTypography>
          <HeaderBox>
            <HeaderDropdowns name="My TimeSheet" backgroundColor="white" color="white" sx={{ marginRight: "10px" }} />
            <HeaderDropdowns name="My Team" backgroundColor="white" sx={{ marginRight: "10px" }} />
          </HeaderBox>

          <Tooltip title="Open settings">
            <StyledIconButton
              size="small"
              onClick={handleOpenUserMenu}
            >
              <Avatar
                alt={userData?.Fullname}
                src="/static/images/avatar/2.jpg"
              />
            </StyledIconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "35px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, index) => (
              <MenuItem
                key={index}
                onClick={() => handleMenuItemClick(setting)}
              >
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
