import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Contacts = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContactData(data);
        console.log("res", data);
      })
      .catch((err) => console.log("error occureed", err));
  }, []);

  return (
    <div className="">
      <div className="text-blue-600 text-sm flex">
        <AddIcon/>
       <p className="m">Create Contact</p>
        </div>
      <p className="text-sm">Contacts</p>
      {contactData.map((ele) => {
        return (
          <div className="flex justify-start mx-4 my-4 items-center">
            <div className="rounded-full bg-teal-300 w-10 h-10 flex justify-center items-center mr-3">
              {ele.name.slice(0, 1)}
            </div>
            <p className="ml-4 text-sm font-[300]">{ele.name || ""}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
