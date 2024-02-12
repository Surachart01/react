import * as React from "react";
import Paper from "@mui/material/Paper";
import Forminput from "./Forminput";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { styled } from "@mui/material/styles";

// format: (value) => value.toLocaleString("en-US")

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#66CCCC',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const columns = [
  { id: "name", label: "ผู้ป่วย" },
  { id: "age", label: "อายุ", align: "center" },
  {
    id: "weight",
    label: "Weight",
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "height",
    label: "height",
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "qtySbp",
    label: "SBP",
    align: "center",
  },
  {
    id: "qtyDpb",
    label: "DPB",
    align: "center",
  },
  {
    id: "pulse",
    label: "Pulse",
    align: "center",
  },
];

function createData(name, age, weight, height, qtySbp, qtyDpb, pulse) {
  return { name, age, weight, height, qtySbp, qtyDpb, pulse };
}

const rows = [
  createData("นันทวัฒน์ มาศวิเศษ", 20, 65, 174, 150, 95, 84),
  createData("นายวิทยา", 28, 65, 180, 150, 95, 84),
  createData("นางสาวสุภาพร", 25, 55, 165, 110, 70, 80),
  createData("นายณัฐพล", 35, 80, 175, 125, 80, 72),
  createData("นางอรทัย", 32, 60, 160, 118, 72, 78),
  createData("นายประพล", 40, 75, 178, 130, 85, 68),
  createData("นางสาวศุภรัตน์ ", 27, 52, 162, 112, 68, 75),
  createData("นายสุรชัย", 38, 78, 172, 128, 82, 70),
  createData("นางจารุวรรณ", 29, 58, 168, 114, 74, 77),
  createData("นายพีรศักดิ์", 33, 72, 176, 122, 78, 74),
  createData("นางสาวปราณี", 31, 65, 170, 118, 76, 79),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10,
            fontSize: 25,
          }}
        >
          ตารางผู้ป่วย
        </Typography>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ผู้ป่วย</StyledTableCell>
                <StyledTableCell align="center">อายุ</StyledTableCell>
                <StyledTableCell align="center">น้ำหนัก</StyledTableCell>
                <StyledTableCell align="center">ส่วนสูง</StyledTableCell>
                <StyledTableCell align="center">SBP</StyledTableCell>
                <StyledTableCell align="center">DPB</StyledTableCell>
                <StyledTableCell align="center">
                Pulse
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.age}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <IconButton color="warning" sx={{ fontSize: 14 }}>
                          <EditNoteIcon />
                          เเก้ไข
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton color="error" sx={{ fontSize: 14 }}>
                          <DeleteForeverOutlinedIcon />
                          ลบ
                        </IconButton>
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          checkboxSelection
        />
          <Forminput/>
      </Container>
    </Box>
  );
}
