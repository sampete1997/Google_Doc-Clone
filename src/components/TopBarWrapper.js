import MenuLayout from "./MenuLayout";
import TitleBar from "./TitleBar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import HistoryIcon from "@mui/icons-material/History";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfilePic from "./googleTools/Profile";
import CustomDropDown from "./CustomDropDown";
import SectionDrawer from "./textEditot/SectionDrawer";


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "width 1s",
  width: "522px",
  height: "422px",
  outline: "none",
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "10px",
};

const TopBarWrapper = () => {
  const [toggle, setToggle] = useState(false);

  const handleShareModal = () => {
    
    setToggle(!toggle);
  };

  const getSelectedValue = (value) => {
    //do something with value
  };


  return (
    <div className="flex justify-between py-1 items-center">
      <div className="flex items-center ml-2 ">
        <div className="w-6 h-6 mb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
            alt="#"
          ></img>
        </div>
        <div className="mx-2">
          <TitleBar />
          <MenuLayout />
        </div>
      </div>

      <div className="flex justify-around items-center w-[300px] truncate">
        <HistoryIcon style={{ fontSize: "25px", color: "#444746" }} />
        <CommentOutlinedIcon style={{ fontSize: "25px", color: "#444746" }} />
        <VideoCameraBackOutlinedIcon
          style={{ fontSize: "25px", color: "#444746" }}
        />

        <div
          onClick={handleShareModal}
          className="cursor-pointer shadow hover:shadow-slate-800 w-[110px] px-1 py-2.5 bg-[#C1E7FE] rounded-full   flex font-[500] text-[14px] items-center justify-center"
        >
          <LockOutlinedIcon style={{ fontSize: "18px" }} />
          <p className="pl-2 text-sm">Share</p>
        </div>
      </div>
      <Modal open={toggle} onClose={handleShareModal}>
        <div style={modalStyle}>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[22px] font-[350] text-gray-700">
                Share "document"
              </p>
              <div className="flex w-[60px] justify-between">
                <HelpOutlineIcon style={{ fontSize: "20px" }} />
                <SettingsIcon style={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Add people or groups"
            className="text-sm p-3 my-4 w-full rounded-md border-2 border-blue-600"
          ></input>
          <p className="font-[420] my-2">People with access</p>

          <div className="flex my-2 items-center justify-between">
            <div className="flex items-center">
              <ProfilePic className="w-9 h-9 rounded-[50%] my-4 mr-3" />
              <div>
                <p className="text-[14px]">{"Sohel Patel (you)"}</p>
                <p className="text-[12px] text-gray-700">
                  {"sohelpatel620@gmail.com"}
                </p>
              </div>
            </div>
            <p className="text-gray-700 font-[300] text-[14px]">Owner</p>
          </div>

          <p className="font-[420] my-3">General access</p>

          <div className="flex items-center my-2">
            <div className="p-2 bg-[#E3E3E3] rounded-full w-9 h-9 flex items-center mr-3">
              <LockOutlinedIcon style={{ fontSize: "18px" }} />
            </div>
            <div>
              <CustomDropDown
                options={[{ text: "Restricted" }, { text: "Anyone with link" }]}
                defaultValue={"Restricted"}
                onSelectOption={getSelectedValue}
                labelSize={"14px"}
                sx={"text-[16px]"}
                className={"w-[300px] font-[400]"}
              />
              <p className="text-[12px] text-gray-600">
                {"Only people with access can open with the link"}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TopBarWrapper;
