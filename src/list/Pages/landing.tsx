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
import { Userdata } from "./userdata.tsx";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { Closeicon } from "../Icons/closeicon.tsx";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { RootState } from "../redux/store.tsx";
import { Giticon } from "../Icons/giticon.tsx";
import { Linkedin } from "../Icons/linkedinicon.tsx";
import { Instaicon } from "../Icons/instaicon.tsx";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Landingpage = () => {
  const [openpopover, setpopover] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [imageurl, setimageurl] = useState('');
  const [currentId, setCurrentId] = useState(1);
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
    setimageurl('');
  };
  const DEFAULT_IMAGE_URL='https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/656542eae3674ef944805d5d_make%20money%20hacking.webp'
  const dispatch = useDispatch();
  const handlesubmit = () => {
    // setUserDetails({
    //   FirstName: firstname,
    //   LastName:lastname,
    //   Email:email,
    // });
    handleClose();
    dispatch({
      type: "USER_DATA",
      payload: {
        id: currentId,
        first_name: firstname,
        last_name: lastname,
        email: email,
        Image:imageurl? imageurl : DEFAULT_IMAGE_URL
      },

    });
    setCurrentId(currentId +1);
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
    // pt: 2,
    // px: 4,
    pb: 3,
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);

    // Validate email
    if (value && !validateEmail(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const Displaydata: any = useSelector((state: RootState) => state.Userdata);
  return (
    <>
      <div
        className="d-flex header_backgrd"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div className="row">
          <div
            className="col-md-4 col-xl-4 col-lg-4"
            style={{ width: "100%", color: "whitesmoke" }}
          >
            <h4>Users</h4>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-4 col-xl-4 col-lg-4"
            style={{ width: "100%", justifyContent: "end", color: "black" }}
          >
            <Button variant="contained" color="success" onClick={handlepopover}>
              <span style={{ color: "rgba(0, 0, 0, 0.87)" }}> + Add User</span>
            </Button>
          </div>
        </div>
      </div>
      {Displaydata.length >0 ?(
<div className="d-flex" style={{ marginTop: "2rem",height:'75vh' }}>
        <Userdata />
      </div>
      ) :(
        <div className="d-flex" style={{height:'75vh',justifyContent:'center',alignItems:'center'}}>
          <Button variant="contained" color="primary" size="medium" onClick={handlepopover}>
                    Create User
           </Button>
        </div>
      )}
      <div className="d-flex justify-content-around">
        <div>
          @somuchakaravarthi
        </div>
        <div>
          • Copyright ©2024 | All rights reserved •
        </div>
        <div className="d-flex">
          <div>
            <a  target='_blank' href="https://github.com/Somuchakaravarthi">
            <Giticon/>
            </a>
            </div>
            <div style={{marginLeft:'12px'}}>
              <a  target='_blank' href="https://www.linkedin.com/in/somu-chakaravarthi-in">
            <Linkedin/>
            </a>
            </div>
            <div style={{marginLeft:'12px'}} >
              <a target='_blank' href="https://www.instagram.com/to0_stroker_?utm_source=qr&igsh=cmVoNmRpNjE5MGFw">
              <Instaicon/>
              </a>
            </div>
        </div>
      </div>
      <Modal
        open={openpopover}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div
            className=" d-flex justify-content-end"
            style={{
              paddingTop: "8px",
              cursor: "pointer",
              paddingRight: "1rem",
            }}
            onClick={handleClose}
          >
            <Closeicon />
          </div>
          <div>
            <h5
              style={{
                color: "rgb(49 78 79 )",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              New User
            </h5>
          </div>
          <div
            className=""
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "1rem",
            }}
          >
            <div className="d-flex align-items-center">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className="mr-one-s"
                label="Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: "bold", // Set font weight to bold
                    color: "black", // Set color to black
                    marginTop:'-1rem'
                  },
                }}
                value={firstname}
                onChange={(e: any) => {
                  setfirstname(e?.target?.value);
                }}
              />
            </div>
            <div className="d-flex mt-one-s align-items-center">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className="mr-one-s"
                value={lastname}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: "bold", // Set font weight to bold
                    color: "black", // Set color to black
                           marginTop:'-1rem'
                  },
                }}
                label="Last name"
                onChange={(e: any) => {
                  setlastname(e?.target?.value);
                }}
              />
            </div>
            <div className="d-flex  mt-one-s align-items-center">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className="mr-one-s"
                value={email}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: "bold", // Set font weight to bold
                    color: "black", // Set color to black
                           marginTop:'-1rem'
                  },
                }}
                label="Email"
                helperText={emailError ? "Please enter a valid email" : ""}
                // onChange={(e: any) => {
                //   setemail(e?.target?.value);
                // }}
                onChange={handleEmailChange}
              />
            </div>
            <div className="d-flex mt-one-s align-items-center">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className="mr-one-s"
                value={imageurl}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontWeight: "bold", // Set font weight to bold
                    color: "black", // Set color to black
                    marginTop:'-1rem'
                  },
                }}
                label="Image Url"
                onChange={(e: any) => {
                  setimageurl(e?.target?.value);
                }}
              />
            </div>
            <div className="d-flex mt-one-s align-items-center"></div>
          </div>
          <div
            className="mt-one-s  d-flex align-items-center justify-content-center "
            style={{ display: "flex" }}
          >
            <Button variant="contained" color="success" onClick={handlesubmit}>
              <span style={{ color: "rgba(0, 0, 0, 0.87)" }}> SUBMIT</span>
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
