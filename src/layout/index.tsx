import { ReactNode } from "react";
import SideBar  from "./AnimationBar/AnimationBar";

const Layout:React.FC<{children:ReactNode}> = ({children}) => {
  return(
      <SideBar>
        {children}
      </SideBar>
    )
}

export default Layout;