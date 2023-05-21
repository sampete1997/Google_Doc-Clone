import ProfilePic from "./Profile";
const toolStyle = "w-5 h-5 mx-3 my-9 cursor-pointer"

const GoogleTools = (props) =>{

const {handleDrawer} = props;


    return (
      <div className="w-[4%] px-3 ">
<div>
<ProfilePic className="w-9 h-9 rounded-[50%] my-4 cursor-pointer"/>
    <div className={toolStyle} style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg")'}}>
    </div>
    <div className={toolStyle} style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg")'}}>
    </div>
    <div className={toolStyle} style={{backgroundImage: 'url("https://ww1.freelogovectors.net/svg14/google-tasks-logo-freelogovectors.net.svg")'}}>
    </div>
    <div className={toolStyle} style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg")'}}>
    </div>
    <div onClick={()=>handleDrawer()} className={toolStyle} style={{backgroundImage: 'url("https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-map-icon.svg")',backgroundRepeat:"no-repeat"}}>
    </div>
    
</div>

      </div>
    )
}

export default GoogleTools;