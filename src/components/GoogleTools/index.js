import ProfilePic from "./Profile";
import Maps from "./Maps";
import { GrayTooltip } from "../../CustomCss/customCss";
import { Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Contacts from "./Contacts";
import Task from "./Task";

const toolStyle = "w-5 h-5 mx-3 cursor-pointer";

const wrapperStyle =
  " hover:bg-slate-200 rounded-full my-5 h-10 w-10 flex justify-center items-center";

const bgStyle = (link) => {
  return {
    backgroundImage: `url(${link})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
};

export const openLinkNewTab = (link) => {
  window.open(link, "_blank");
};

const GoogleTools = (props) => {
  const { handleDrawer, getGoogleToolComponent, getTitleAndUrl } = props;

  const handleOpenDrawer = (component, title, url) => {
    getGoogleToolComponent(component);
    getTitleAndUrl({ title: title, linkTo: url });
    handleDrawer(true);
  };

  return (
    <div className="w-[4%] px-3 ">
      <div>
        <div onClick={() => openLinkNewTab("https://myaccount.google.com")}>
          <ProfilePic className="w-9 h-9 rounded-[50%] mt-2 mb-4 cursor-pointer" />
        </div>

        <GrayTooltip title="Calendar">
          <div className={wrapperStyle}>
            <div
              onClick={() =>
                openLinkNewTab("https://calendar.google.com/calendar")
              }
              className={toolStyle}
              style={bgStyle(
                "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
              )}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Keep">
          <div className={wrapperStyle}>
            <div
              onClick={() => openLinkNewTab("https://keep.google.com")}
              className={toolStyle}
              style={bgStyle(
                "https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
              )}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Tasks">
          <div className={wrapperStyle}>
            <div
              onClick={() => handleOpenDrawer(<Task />, "Tasks", "")}
              className={toolStyle}
              style={bgStyle(
                "https://ww1.freelogovectors.net/svg14/google-tasks-logo-freelogovectors.net.svg"
              )}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Contacts">
          <div className={wrapperStyle}>
            <div
              onClick={() =>
                handleOpenDrawer(
                  <Contacts />,
                  "Contacts",
                  "https://contacts.google.com/u/0/?hl=en"
                )
              }
              className={toolStyle}
              style={bgStyle(
                "https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg"
              )}
            ></div>
          </div>
        </GrayTooltip>

        <GrayTooltip title="Maps">
          <div className=" hover:bg-slate-200 rounded-full h-10 w-10 my-5 flex justify-center items-center mr-2">
            <div
              onClick={() =>
                handleOpenDrawer(
                  <Maps />,
                  "Maps",
                  "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537893,77.3005824,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc"
                )
              }
              className={"w-5 h-5  cursor-pointer"}
              style={bgStyle(
                "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-map-icon.svg"
              )}
            ></div>
          </div>
        </GrayTooltip>

        <div className={"w-5 h-5 mx-2.5 cursor-pointer"}>
          <Divider />
        </div>
      </div>


      <div
        className={"w-5 h-5 mx-2 my-4 cursor-pointer"}
        onClick={() =>
          openLinkNewTab(
            "https://workspace.google.com/u/0/marketplace/appfinder/category/works-with-doc?host=docs"
          )
        }
      >
        <AddIcon />
      </div>

    </div>
  );
};

export default GoogleTools;
