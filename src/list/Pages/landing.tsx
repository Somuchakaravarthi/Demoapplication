import React, { useState } from "react";
import "../style/landingstyle.css";
import InputLabel from "@mui/material/InputLabel";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  Popover,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Userdata } from "./userdata.tsx";
import { UseDispatch, useDispatch } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Landingpage = () => {
  const [openpopover, setpopover] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [userDetails, setUserDetails] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
  });
  const handlepopover = () => {
    setpopover(true);
  };
  const handleClose = () => {
    setpopover(false);
    setfirstname("");
    setlastname("");
    setemail("");
  };
  const dispatch = useDispatch();
  const handlesubmit = () => {
    // setUserDetails({
    //   FirstName: firstname,
    //   LastName:lastname,
    //   Email:email,
    // });
    dispatch({
      type: "USER_DATA",
      payload: {
        id: "",
        first_name: firstname,
        last_name: lastname,
        email: email,
      },
    });
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #f7f8fa",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <div className="d-flex " style={{ justifyContent: "space-between" }}>
        <div className="row">
          <div className="col-md-4 col-xl-4 col-lg-4" style={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              value={localStorage.getItem("search")}
              onChange={(e) => {}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-4 col-xl-4 col-lg-4"
            style={{ width: "100%", justifyContent: "end" }}
          >
            <Button variant="contained" onClick={handlepopover}>
              Add User
            </Button>
          </div>
        </div>
      </div>
      <div className="" style={{ marginTop: "2rem" }}>
        <Userdata />
      </div>
      {/* <Popover
        id={""}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        open={openpopover}
        onClose={handleClose}
      >
        <Typography>The content of the Popover.</Typography>
      </Popover> */}
      <Modal
        open={openpopover}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div className="d-flex align-items-center">
            <span className="mr-one-s">First Name </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className="mr-one-s"
              value={firstname}
              onChange={(e: any) => {
                setfirstname(e?.target?.value);
              }}
            />
          </div>
          <div className="d-flex mt-one-s align-items-center">
            <span className="mr-one-s">Last Name </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className="mr-one-s"
              value={lastname}
              onChange={(e: any) => {
                setlastname(e?.target?.value);
              }}
            />
          </div>
          <div className="d-flex  mt-one-s align-items-center">
            <span className="mr-one-s">Email </span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className="mr-one-s"
              value={email}
              onChange={(e: any) => {
                setemail(e?.target?.value);
              }}
            />
          </div>
          <div
            className="mt-one-s align-items-center"
            style={{ display: "flex" }}
          >
            <Button variant="contained" onClick={handlesubmit}>
              SUBMIT
            </Button>
          </div>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  );
};
