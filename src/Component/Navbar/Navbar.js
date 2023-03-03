import * as React from "react";
import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function Navigation() {
  let navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("P&V_User"));
  let login = JSON.parse(localStorage.getItem("loggedin"));

  const handleLogout = (e) => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {login === true ? (
              <>
                <Button variant="outline" onClick={() => navigate("/")}>
                  <AccountCircleRoundedIcon />
                  &nbsp;
                  {userName.firstName}
                </Button>

                <Button variant="outline" onClick={() => navigate("/details")}>
                  Add Details
                </Button>

                <Button variant="outline" onClick={() => navigate("/data")}>
                  Data
                </Button>
              </>
            ) : null}
          </Typography>
          {login === true ? (
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout &nbsp;
              <LogoutOutlinedIcon />
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                color="success"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="outline"
                color="success"
                className="m-2"
                onClick={() => navigate("/register")}
              >
                Registration
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
