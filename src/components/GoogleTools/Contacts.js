import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { randomColorArray } from "../../constants";

const length = randomColorArray.length;

const Contacts = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContactData(data.users);
        console.log("res", data);
      })
      .catch((err) => console.log("error occureed", err));
  }, []);

  return (
    <div className="">
      <div className="text-[#1873E8] text-sm font-[500] flex justify-start items-center ml-4 my-4">
        <AddIcon style={{ fontSize: "18px" }} />
        <p className="mx-2">Create Contact</p>
      </div>
      <p className="text-[11px] fonts-[500] mx-4 ">{`CONTACTS ( ${
        contactData.length || 0
      } )`}</p>
      {contactData.map((ele, index) => {
        const color = randomColorArray[index % length];

        return (
          <div className="flex justify-start mx-4 my-4 items-center">
            <div
              style={{ backgroundColor: color }}
              className="text-white font-[600] rounded-full w-10 h-10 flex justify-center items-center mr-3"
            >
              {ele.firstName.slice(0, 1)}
            </div>
            <p className="ml-4 text-sm font-[400]">
              {`${ele.firstName} ${ele.lastName}` || ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
