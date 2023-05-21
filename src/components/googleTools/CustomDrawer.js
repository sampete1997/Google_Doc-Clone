import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const CustomDrawer = (props) => {
  const { componentToRender, handleDrawer } = props;
  return (
    <div className="w-[400px] h-full bg-white py-5 shadow-md  ml-2 overflow-y-scroll">
      <div className="flex justify-between items-center mx-3 text-[#707579]">
        <p className="text-[14px]">Maps</p>

        <p onClick={() => handleDrawer()}>
          <CloseIcon style={{ fontSize: "22px", color: "#707579" }} />
        </p>
      </div>

      <div className="mx-2 px-2 flex items-center rounded-lg shadow-md shadow-slate-200 border-[1px] border-neutral-300 my-2">
        <SearchIcon
          className="mx-2"
          style={{ fontSize: "24px", color: "#707579" }}
        />
        <input
          type="text"
          placeholder="Search Google Maps"
          className="outline-none ml-2 text-sm my-2 w-full bg-white"
        ></input>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123279414!2d77.3012672515727!3d12.953790199640332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1684662241920!5m2!1sen!2sin"
        width="300"
        height="350"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>


    </div>
  );
};

export default CustomDrawer;
