import * as React from 'react';
import Drawer from '@mui/material/Drawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const toggleDrawer =
() => (event) => {
    if (
      event.type === `keydown` &&
      ((event).key === `Tab` ||
        (event).key === `Shift`)
    ) {
      return;
    }

    // setTriggerDrawer(false);
};


const SectionDrawer = (props) => {
  const { component, triggerDrawer, toggleDrawer } = props;
  return (
    <div>
      <Drawer style={{position: "relative", top: "0%"}} anchor={`right`} open={triggerDrawer} onClose={toggleDrawer()}>
        <div className="w-[300px] p-4">{component()}</div>
      </Drawer>
    </div>
  );
};

export default SectionDrawer;
