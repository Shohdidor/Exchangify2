let api = "http://localhost:3000/goods";

import React, { useEffect, useState } from "react";
import Model1 from "/src/image/pngwing.com (20).png";
import "./Home.css";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// MUI
import CommentIcon from '@mui/icons-material/Comment';

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState(null);
  // getData
  async function getData() {
    try {
      let { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-between mt-[-170px]">
        <div className="p-[50px] bg-[#66666E]">
          <h1
            data-aos="fade-right"
            className="text-[100px] poppins mt-[140px] text-[#F39C12]"
          >
            Exchangify
          </h1>
          <p
            data-aos="fade-down"
            className="text-[100px] mt-[-200px] ml-[550px] text-[#F39C12]"
          >
            ○
          </p>

          <p className="text-[#0A1128] pl-[5px] mt-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            veritatis, nostrum, neque sunt quia atque corporis obcaecati
            aliquid, fugit eius omnis aliquam placeat voluptates alias tempore!
            Ex aliquid numquam facere?
          </p>

          <div className="flex justify-end">
            <button
              onClick={handleClickOpen}
              className="bg-[#F39C12] active:brightness-125 active:translate-y-[3px] p-[5px] text-[17px] rounded-[3px] text-[#0A1128] poppins px-[20px] border-[#ffffff76] duration-100 ease-in-out border-[1px]"
            >
              Read More
            </button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle
                sx={{ m: 0, p: 2 }}
                className="bg-[#1a1a1ae9]"
                id="customized-dialog-title"
              >
                <h1 className="poppins text-[white]">Exchangify</h1>
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: theme.palette.grey[500],
                })}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers className="bg-[#66666E] text-[black]">
                <Typography gutterBottom>
                  Is a platform that allows users to exchange unwanted items
                  easily. Users can post items they want to trade and explore
                  offers from others.
                </Typography>
                <hr className="border-[white]" />
                <Typography gutterBottom>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                  The goal is to promote sustainability through reuse by helping
                  people find new homes for things they no longer need. It's
                  simple, eco-friendly, and encourages a sharing economy.
                </Typography>
              </DialogContent>
              <DialogActions className="bg-[#1A1A1A]">
                <button
                  onClick={handleClose}
                  className="bg-[#F39C12] active:brightness-125 active:translate-y-[3px] p-[5px] text-[17px] rounded-[3px] text-[#0A1128] poppins px-[20px] border-[#ffffff76] duration-100 ease-in-out border-[1px]"
                >
                  Continue
                </button>
              </DialogActions>
            </BootstrapDialog>
          </div>
        </div>
        <div>
          <img src={Model1} alt="Model1" />
        </div>
      </div>


 <Box sx={{ width: "100%", typography: "body1" }} className="bg-[#2c2c2c] py-12">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="mb-6">
            <TabList
              className="bg-[#2C3E50] py-[8px] overflow-hidden"
              onChange={handleChange}
              aria-label="item categories"
            >
              <Tab  sx={{ marginLeft:"100px", color: "#F38C12", fontSize: "18px" }} label="Electronic" value="1" />
              <Tab  sx={{ marginLeft:"100px", color: "#F38C12", fontSize: "18px" }} label="Clothing" value="2" />
              <Tab  sx={{ marginLeft:"100px", color: "#F38C12", fontSize: "18px" }} label="Musical Instruments" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <div className="grid grid-cols-3 gap-10 px-10">
              {data
                ?.filter((item) => item.category === "Electronics")
                .map((item, id) => (
                  <Link to={`/information/` + item.title} key={id}>
                    <div className="hover:shadow-2xl transform transition duration-200">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h1 className="text-[#F39C12] text-xl font-semibold mt-4">
                        {item.title}
                      </h1>
                      <p className="text-[#ffffffaa]">{item.sender}</p>
                      <div className="flex items-center mt-2 text-[#F38C12]">
                        <CommentIcon />
                        <p className="ml-2">{item.comments.length} Comments</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div className="grid grid-cols-3 gap-10 px-10">
              {data
                ?.filter((item) => item.category === "Clothing")
                .map((item, id) => (
                  <Link to={`/information/` + item.title} key={id}>
                    <div className="hover:shadow-2xl transform transition duration-200">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h1 className="text-[#F39C12] text-xl font-semibold mt-4">
                        {item.title}
                      </h1>
                      <p className="text-[#ffffffaa]">{item.sender}</p>
                      <div className="flex items-center mt-2 text-[#F38C12]">
                        <CommentIcon />
                        <p className="ml-2">{item.comments.length} Comments</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>

          <TabPanel value="3">
            <div className="grid grid-cols-3 gap-10 px-10">
              {data
                ?.filter((item) => item.category === "Musical Instruments")
                .map((item, id) => (
                  <Link to={`/information/` + item.title} key={id}>
                    <div className="hover:shadow-2xl transform transition duration-200">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h1 className="text-[#F39C12] text-xl font-semibold mt-4">
                        {item.title}
                      </h1>
                      <p className="text-[#ffffffaa]">{item.sender}</p>
                      <div className="flex items-center mt-2 text-[#F38C12]">
                        <CommentIcon />
                        <p className="ml-2">{item.comments.length} Comments</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Home;
