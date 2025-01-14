import { Card, Box, Typography, Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Chart from "./Chart";


const DashboardCard = () => {
  const userData = [
    { title: "จำนวนผู้ใช้งาน", value: 200, icon: <HomeOutlinedIcon /> },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    { title: "จำนวนผู้ใช้งาน", value: 200 },
    // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
  ];
  return (
    <>
    <Chart/>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" , marginTop:1}}
        spacing={2} // เพิ่มระยะห่างระหว่างการ์ด
      >
        {userData.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined" sx={cardStyle}>
              <Box
                sx={{
                  borderRadius: "50%",
                  background: "#F08383",
                  border: 0,
                  width: "3rem",
                  height: "3rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 1.5,
                  }}
                >
                  {data.icon}
                </Box>
              </Box>
              <Box sx={{ padding: 0, margin: 0 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {data.title}
                </Typography>
                <Typography sx={{ fontSize: 25 }}>{data.value}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const cardStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 2,
  margin: 1,
  height: 100,
  // width:200
};

export default DashboardCard;