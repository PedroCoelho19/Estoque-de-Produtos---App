import { ReactNode, useState, useEffect } from "react"
import { Close, Menu} from '@mui/icons-material/';
import { UseProfile, SidebarData } from "../../components/index"
import { RenderConditional } from "../../utils";

interface ISidebarProps {
  children:ReactNode;
}

interface IPatchRoutes{
  home?:string;
  categoryProduct?:string;
  product?:string;
  productRegistration?:string;
  userRegistration?:string;
  users?:string;
}

const Sidebar:React.FC<ISidebarProps> = ({ children }) => {
  const [toggle,setToggle] = useState<boolean>(true)
  const [size,setSize] = useState<boolean>(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 956) {
  //       setSize(true);
  //       document.body.style.overflow = 'hidden';
  //     } else {
  //       setSize(false);
  //       document.body.style.overflow = 'auto';
  //     }
  //   };
  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // })
  
  function getTitleBar(){
    const path = window.location.pathname

    const pathAndRoutes: IPatchRoutes = {
      home:"Menu",
      categoryProduct:"Categorias de Produtos",
      product: "Produtos",
      productRegistration: "Cadastro de Produtos",
      userRegistration: "Cadastro de Usuarios",
      users: "Usuarios"
    }

    return pathAndRoutes[path?.replace('/','')]
  }

  function capitalizeFirstLetter(inputString:string) {
    if (typeof inputString !== 'string') {
      return 'Estoque de Produtos';
    }
  
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  }

  return(
    <>
    <RenderConditional istrue={!size}>
      <div className={`navbar fixed flex h-14 right-0 ${toggle ? "w-full" : "w-[90%]"} justify-between items-center bg-gray-900 transition-all duration-300 shadow-xl z-50`}>
          <button className="justify-center pl-5">
            <RenderConditional istrue={toggle}>
              <Menu 
                style={{color: 'white', fontSize: '35'}}
                onClick={() => setToggle(!toggle)}
                />
            </RenderConditional>
            <RenderConditional istrue={!toggle}>
              <Close  
                style={{color: 'red', fontSize: '35'}}
                onClick={() => setToggle(!toggle)}
                className="hover:text-gray-300 hover:cursor-pointer"
                />
            </RenderConditional>
          </button>
            <div className=" text-white text-3xl text-center">
              <p className=' text-center font-normal'>
                {capitalizeFirstLetter(getTitleBar())}
              </p>
            </div>
            <div/>
      </div>
      <div className="flex flex-row w-[100vw] h-screen bg-blue-500">
       <div className="w-full h-screen  object-cover flex items-center">
        <div className={`sidebar pt-20 ${toggle ? "w-[4.8rem]" : ""} " bg-glass bg-gray-900 h-full w-[20rem] p-2 transition-all duration-500 relative"`}>
          <UseProfile toggle={toggle} name={"Edivar"} user={"edivar@tijucaalimentos.com"}/>
          <SidebarData toggle={toggle}/>
        </div>
          {children}
       </div>
      </div>
    </RenderConditional>
      <RenderConditional istrue={size}>
        {children}
      </RenderConditional>
    </>
  )
}

export default Sidebar

