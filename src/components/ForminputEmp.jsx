import React, { useState } from "react";
import { TextField, Container, Stack, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["SuperAdmin 1", "BranchAdmin" , "Branch Staff" , "Doctor" , "Nurse"];
const Forminput = () => {
  // const {fname,lname,age,weight,height,sbp,dpb,pulse,editId,setTitle} = props;
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <Stack
          spacing={3}
          direction="row"
          sx={{ marginBottom: 4, marginTop: 4 }}
        >
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="ชื่อจริง"
            // value={fname}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="นามสกุล"
            // value={lname}
            fullWidth
            required
          />
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{ marginBottom: 4, marginTop: 4 }}
        >
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="อายุ"
            // value={age}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="น้ำหนัก"
            // value={weight}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            type="number"
            variant="outlined"
            color="secondary"
            label="ส่วนสูง"
            // value={height}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          {/* <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="ตำเเหน่ง"
            // value={sbp}
            required
            fullWidth
            sx={{ mb: 4 }}
          /> */}
          <Autocomplete
            id="controllable-states-demo"
            options={options}
            fullWidth
            renderInput={(params) => <TextField {...params}  label="ตำเเหน่ง" />}
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ backgroundColor: "#00CD66", marginBottom: 5 }}
        >
          เพิ่ม
          {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
        </Button>
      </form>
    </>
  );
};

export default Forminput;