import ProfilePic from "./Profile";
import Maps from "./Maps";
import { GrayTooltip } from "../../CustomCss/customCss";
import { Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Contacts from "./Contacts";

const toolStyle = "w-5 h-5 mx-3 cursor-pointer";
const wrapperStyle =
  " hover:bg-slate-200 rounded-full my-5 h-10 w-10 flex justify-center items-center";

const GoogleTools = (props) => {
  const { handleDrawer, getGoogleToolComponent, getTitle } = props;
  const handleOpenDrawer = (component, title) => {
    getGoogleToolComponent(component);
    getTitle(title);
    handleDrawer();
  };

  return (
    <div className="w-[4%] px-3 ">
      <div>
        <ProfilePic className="w-9 h-9 rounded-[50%] my-4 cursor-pointer" />

        <GrayTooltip title="Calendar">
          <div className={wrapperStyle}>
            <div
              className={toolStyle}
              style={{
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Keep">
          <div className={wrapperStyle}>
            <div
              className={toolStyle}
              style={{
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Tasks">
          <div className={wrapperStyle}>
            <div
              className={toolStyle}
              style={{
                backgroundImage:
                  'url("https://ww1.freelogovectors.net/svg14/google-tasks-logo-freelogovectors.net.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Contacts">
          <div className={wrapperStyle}>
            <div
             onClick={() => handleOpenDrawer(<Contacts />, "Contacts")}
              className={toolStyle}
              style={{
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Maps">
          <div className=" hover:bg-slate-200 rounded-full h-10 w-10 my-5 flex justify-center items-center mr-2">
            <div
              onClick={() => handleOpenDrawer(<Maps />, "Maps")}
              className={"w-5 h-5  cursor-pointer"}
              style={{
                backgroundImage:
                  'url("https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-map-icon.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </GrayTooltip>

        <div className={"w-5 h-5 mx-2.5 cursor-pointer"}>
          <Divider />
        </div>
      </div>

      <div className={"w-5 h-5 mx-2 my-4 cursor-pointer"}>
        <AddIcon />
      </div>
    </div>
  );
};

export default GoogleTools;
