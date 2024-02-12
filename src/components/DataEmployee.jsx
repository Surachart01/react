import { DataGrid } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Forminput from '../components/Forminput'
const rows = [
  {
    id: 1,
    empCode: "65309010001",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai",
    department: "SuperAdmin",
    tel: "09876543321",
  },
  {
    id: 2,
    empCode: "65309010002",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "นันทวัฒน์",
    surname: "มาศวิเศษ",
    username: "nantawat",
    department: "BranchAdmin",
    tel: "0982079678",
  },
  {
    id: 3,
    empCode: "65309010003",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai",
    department: "Branch Staff",
    tel: "09876543321",
  },
  {
    id: 4,
    empCode: "65309010009",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "Doctor",
    department: "Branch Staff",
    tel: "09876543321",
  },
  {
    id: 5,
    empCode: "65309010004",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai",
    department: "Doctor",
    tel: "09876543321",
  },
  {
    id: 6,
    empCode: "65309010005",
    stuIdCard: "1739902009000",
    title: "นาย",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai",
    department: "Nurse",
    tel: "09876543321",
  },
  {
    id: 7,
    empCode: "65309010006",
    stuIdCard: "1739902009000",
    title: "นาง",
    name: "กฤษณชัย",
    surname: "อุบลทิพย์",
    username: "kritsanachai",
    department: "Nurse",
    tel: "09876543321",
  },
];

// เพิ่มคอลัมน์เลขลำดับ
const rowsWithIndex = rows.map((row, index) => ({ ...row, index: index + 1 }));

const columns = [
  { field: "index", headerName: "#", width: 50 },
  {
    field: "empCode",
    headerName: "รหัสพนักงาน",
    flex: 2,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    field: "stuIdCard",
    headerName: "หมายเลขบัตรประชาชน",
    flex: 2,
    minWidth: 150,
    maxWidth: 200,
  },
  {
    field: "title",
    headerName: "คำนำหน้า",
    flex: 1,
    minWidth: 70,
    maxWidth: 100,
  },
  { field: "name", headerName: "ชื่อ", flex: 2, minWidth: 100, maxWidth: 150 },
  {
    field: "surname",
    headerName: "นามสกุล",
    flex: 2,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    field: "username",
    headerName: "ชื่อผู้ใช้งาน",
    flex: 2,
    minWidth: 120,
    maxWidth: 200,
  },
  {
    field: "department",
    headerName: "สิทธิ",
    flex: 2,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    field: "tel",
    headerName: "เบอร์โทร",
    flex: 2,
    minWidth: 120,
    maxWidth: 220,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<BorderColorIcon />}
            onClick={() => handleEdit(params.row.id)}
          >
            แก้ไข
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row.id)}
          >
            ลบ
          </Button>
        </Stack>
      </div>
    ),
  },
];

const handleEdit = (id) => {
  // เขียนโค้ดสำหรับการแก้ไขข้อมูลด้วย ID ที่ได้รับ
  console.log("Edit clicked for row with ID:", id);
};

const handleDelete = (id) => {
  // เขียนโค้ดสำหรับการลบข้อมูลด้วย ID ที่ได้รับ
  console.log("Delete clicked for row with ID:", id);
};

const DataStudents = () => {
  return (

    <Box>
      <Container>
        <Typography  sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10,
            fontSize: 25,
          }}>
            ตารางพนักงาน
        </Typography>
        <DataGrid rows={rowsWithIndex} columns={columns} />
        <Forminput/>
      </Container>
    </Box>



  );
};

export default DataStudents;