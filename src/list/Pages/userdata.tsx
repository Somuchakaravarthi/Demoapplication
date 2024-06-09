import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

import { RootState } from "../redux/store";

export const Userdata = () => {
  const [userdata, setuserdata] = useState([]);
  // useEffect(() => {
  //   getuserdetails();
  // }, []);
  const dispatch = useDispatch();
  // const getuserdetails = async () => {
  //   const { data } = await axios.get(" https://reqres.in/api/users?page=2");
  //   setuserdata(data?.data);
  //   // dispatch(UserInfo(data?.data));
  //   dispatch({
  //     type: "USER_DATA",
  //     payload: data?.data,
  //   });
  // };
  //Fetching BR  and Resources data from store
  const Displaydata: any = useSelector((state: RootState) => state.Userdata);
  console.log(Displaydata);
  const [clickedCards, setClickedCards] = useState(
    Array(Displaydata.length).fill(false)
  );
  const handleCardClick = (index: any) => {
    const newClickedCards = [...clickedCards];
    newClickedCards[index] = !newClickedCards[index];
    setClickedCards(newClickedCards);
  };
  const Deleteuser = ({ row }: any) => {
    dispatch({
      type: "REMOVE_USER",
      payload: { row },
    });
  };
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>FirstName</TableCell>
    //         <TableCell align="right">LastName</TableCell>
    //         <TableCell align="right">Email</TableCell>
    //         <TableCell align="right">Avatar</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {Displaydata?.map((row: any) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.first_name}
    //           </TableCell>
    //           <TableCell align="right">{row.last_name}</TableCell>
    //           <TableCell align="right">{row.email}</TableCell>
    //           <TableCell align="right">{row.avatar}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <>
      {Displaydata.map((row: any, index: any) => (
        <div className="d-flex" style={{ padding: "1rem" }} key={index}>
          <Card
            sx={{
              maxWidth: 345,
              height: 250,
            }}
            onClick={() => handleCardClick(index)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={row.Image}
                alt="user image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.first_name}
                  {row.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.email}
                </Typography>
              </CardContent>
              {clickedCards[index] && (
                <div
                  style={{
                    position: "relative",
                    top: "-154px",
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "8px",
                  }}
                >
                  <Button variant="contained" color="primary" size="small">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_USER",
                        payload: { id: row.id },
                      });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
};
