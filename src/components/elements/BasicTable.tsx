import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";

interface ITable {
  columnNames: string[];
  data: any[];
}

export default function BasicTable({ columnNames, data }: ITable) {
  const properties = Object.keys(data[0]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnNames.map((columnName, index) =>
              index === 0 ? (
                <TableCell key={uuidv4()}>{columnName}</TableCell>
              ) : (
                <TableCell align="right" key={uuidv4()}>
                  {columnName}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {properties.map((p, index) =>
                index === 0 ? (
                  <TableCell key={uuidv4()}>{row[p as keyof ITask]}</TableCell>
                ) : (
                  <TableCell key={uuidv4()} align="right">
                    {row[p as keyof ITask]}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
