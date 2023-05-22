import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfilePic from "./GoogleTools/Profile";
import CustomDropDown from "./CustomDropDown";
import PublicIcon from "@mui/icons-material/Public";
import LinkIcon from "@mui/icons-material/Link";
import { useContext, useState } from "react";
import { ShareDocContext } from "./GlobalContext/DocShareContext";

export const options = [{ text: "Restricted" }, { text: "Anyone with link" }];
export const roleOption = [
  { text: "Viewer" },
  { text: "Commenter" },
  { text: "Editor" },
];

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

export default function ShareModalContent(props) {
  const { handleShareModal } = props;
  const [copy, setCopied] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].text);
  const [selectedRoleValue, setSelectedRoleValue] = useState(
    roleOption[0].text
  );
const {docTitle, setAccessOption, accessValue} = useContext(ShareDocContext)
  const getSelectedValue = (value) => {
    setSelectedValue(value);
    setAccessOption(value)
  };

  const getSelectedRoleValue = (value) => {
    setSelectedRoleValue(value);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div style={modalStyle} className="relative">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[22px] font-[350] text-gray-700">
            Share {docTitle || "Untitlted document"}
          </p>
          <div className="flex w-[60px] justify-between">
            <HelpOutlineIcon style={{ fontSize: "20px" }} />
            <SettingsIcon style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Add people and groups"
        className="text-sm p-3 my-3 w-full rounded-md  border border-1 border-gray-500"
      ></input>
      <p className="font-[420] my-1.5">People with access</p>

      <div className="flex my-1.5 items-center justify-between">
        <div className="flex items-center">
          <ProfilePic className="w-9 h-9 rounded-[50%] my-4 mr-3" />
          <div>
            <p className="text-[14px]">{"Sohel Patel (you)"}</p>
            <p className="text-[12px] text-gray-700">
              {"sohelpatel620@gmail.com"}
            </p>
          </div>
        </div>
        <p className="text-gray-700 font-[300] text-[14px] mr-4">Owner</p>
      </div>

      <p className="font-[420] my-3">General access</p>

      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <div
            className={`p-2 ${
              accessValue === options[0].text
                ? `bg-[#E3E3E3]`
                : `bg-[#C3EED0]`
            } rounded-full w-9 h-9 flex justify-center items-center mr-3`}
          >
            {accessValue === options[0].text ? (
              <LockOutlinedIcon style={{ fontSize: "18px" }} />
            ) : (
              <PublicIcon
                style={{ fontSize: "18px", backgroundColor: "#C3EED0" }}
              />
            )}
          </div>

          <div>
            <CustomDropDown
              options={options}
              defaultValue={accessValue}
              onSelectOption={getSelectedValue}
              labelSize={"14px"}
              sx={"text-[16px]"}
              className={"w-[300px] font-[300] rounded-lg"}
            />
            <p className="text-[12px] text-gray-600">
              {"Only people with access can open with the link"}
            </p>
          </div>
        </div>
        {accessValue === options[1].text && (
          <CustomDropDown
            options={roleOption}
            defaultValue={roleOption[0].text}
            onSelectOption={getSelectedRoleValue}
            wrapperClass={""}
            labelSize={"14px"}
            labelStyle={"font-[300]"}
            sx={"text-[16px]"}
            className={"w-[220px] font-[300] rounded-lg"}
          />
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex justify-around items-center w-[120px] border rounded-full border-gray-500 p-2">
          <LinkIcon style={{ fontSize: "18px", color: "blue" }} />
          <p
            onClick={handleCopy}
            className="cursor-pointer text-[14px] text-blue-600"
          >
            Copy Link
          </p>
        </div>
        <div
          onClick={handleShareModal}
          className="bg-[#0957D0] text-white text-center w-[90px] cursor-pointer rounded-full p-2"
        >
          Done
        </div>
      </div>

      {copy && (
        <div
          style={{ left: "50%", transform: "translate(-50%, -50%)" }}
          className="absolute w-[150px] bg-[#323232] rounded-md text-center p-2 text-white mt-1"
        >
          Link Copied
        </div>
      )}
    </div>
  );
}
