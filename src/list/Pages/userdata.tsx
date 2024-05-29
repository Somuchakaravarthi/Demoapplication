// import React from "react";
// export const Userdata = () => {
//   return (
//     <>
//       <div>hiiiii</div>
//     </>
//   );
// };

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { UserInfo } from "../redux/action";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootState } from "../redux/store";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const Userdata = () => {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    getuserdetails();
  }, []);
  const dispatch = useDispatch();
  const getuserdetails = async () => {
    const { data } = await axios.get(" https://reqres.in/api/users?page=2");
    setuserdata(data?.data);
    // dispatch(UserInfo(data?.data));
    dispatch({
      type: "USER_DATA",
      payload: data?.data,
    });
  };
  //Fetching BR  and Resources data from store
  const Displaydata: any = useSelector((state: RootState) => state.Userdata);
  console.log(Displaydata);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Displaydata?.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.avatar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
