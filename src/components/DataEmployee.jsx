import * as React from "react";
import Paper from "@mui/material/Paper";
import ForminputEmp from './ForminputEmp'
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
    label: "น้ำหนัก",
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "height",
    label: "ส่วนสูง",
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "position",
    label: "ตำแหน่ง",
    align: "center",
    format: (value) => value.toFixed(2),
  },
  
];

function createData(name, age, weight, height , position) {
  return { name, age, weight, height ,position};
}

const rows = [
  createData("นันทวัฒน์ มาศวิเศษ", 20, 65, 174 , "SuperAdmin"),
  createData("นายวิทยา", 28, 65, 180 , "BranchAdmin"),
  createData("นางสาวสุภาพร", 25, 55, 165 ,"BranchAdmin"),
  createData("นายณัฐพล", 35, 80, 175 , "Branch Staff"),
  createData("นางอรทัย", 32, 60, 160 , "Branch Staff"),
  createData("นายประพล", 40, 75, 178 , "Doctor"),
  createData("นางสาวศุภรัตน์ ", 27, 52, 162 ,"Doctor"),
  createData("นายสุรชัย", 38, 78, 172 , "Nurse"),
  createData("นางจารุวรรณ", 29, 58, 168 ,"Nurse"),
  createData("นายพีรศักดิ์", 33, 72, 176 , "Nurse"),
  createData("นางสาวปราณี", 31, 65, 170 , "Nurse"),
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
          พนักงาน
        </Typography>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ขื่อ-นามสกุล</StyledTableCell>
                <StyledTableCell align="center">อายุ</StyledTableCell>
                <StyledTableCell align="center">น้ำหนัก</StyledTableCell>
                <StyledTableCell align="center">ส่วนสูง</StyledTableCell>
                <StyledTableCell align="center">ตำเเหน่ง</StyledTableCell>
                <StyledTableCell colSpan={2} align="center"></StyledTableCell>
                
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
        />
          <ForminputEmp/>
      </Container>
    </Box>
  );
}
