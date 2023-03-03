import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

export default function Home() {
  const data = JSON.parse(localStorage.getItem("P&V_User"));

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="m-5 ">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.firstName.charAt(0)}
            </Avatar>
          }
          title=<h4>{data.firstName}</h4>
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <PersonIcon />&nbsp; {data.firstName} {data.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <EmailIcon />&nbsp; {data.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <KeyIcon />&nbsp; {data.password}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
