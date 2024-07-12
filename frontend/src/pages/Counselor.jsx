import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import StyledTable from "../ui/StyledTable";
import { userColumns, userData } from "../assets/json/TableData";
import AddCounselor from "../ui/AddCounselor";
import { useNavigate } from "react-router-dom";

export const Counselor = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  const handleView = (id) => {
    console.log("View item:", id);
    navigate(`/user/counselor/${id}`);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#0072BC",
            height: 4,
            borderRadius: "4px",
          },
        }}
        sx={{
          bgcolor: "white",
          paddingTop: "20px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#0072BC",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
          },
          "& .Mui-selected": {
            color: "#0072BC",
          },
        }}
      >
        <Tab label="Counselor" />
        <Tab label="Add Counselor" />
        <Tab label="Add Bulk" />
      </Tabs>
      <Box padding="30px" marginBottom={4}>
        {selectedTab === 0 && (
          <StyledTable
            columns={userColumns}
            data={userData}
            onSelectionChange={handleSelectionChange}
            onView={handleView}
          />
        )}
        {selectedTab === 1 && <AddCounselor />}
        {selectedTab === 2 && <Typography>Not Found</Typography>}
      </Box>
    </>
  );
};
