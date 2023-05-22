import AddTaskIcon from "@mui/icons-material/AddTask";
import "./taskStyle.css";
const Task = () => {
  return (
    <div>
      <div className="text-[#1873E8] font-[500] flex justify-start items-center ml-4 my-2">
        <AddTaskIcon style={{fontSize: "20px"}} />
        <p className="mx-4 text-[14px] font-[500]">Add a task</p>
      </div>
      <div className="taskLogoWrapper">
        <div className="taskLogo"></div>
        <p className="text-[18px] font-[400] my-2 text-center">All tasks complete</p>
        <p className="text-[14px] text-[#5f6368] my-2 text-center">Nice work</p>
      </div>
    </div>
  );
};

export default Task;
