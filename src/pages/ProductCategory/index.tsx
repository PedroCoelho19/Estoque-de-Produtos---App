import React from "react";
import { ButtonsGroupMenu } from "../../components/index"
import { Computer,Hammer,LibraryBig,Plug2 } from 'lucide-react';

const CategoryProduct:React.FC = () => {  
  const actionsButtons = () => {
  }


  const actionsButtonsCategory = [
    {
      title: "ELETRONICOS",
      description:"Smartphones, Tablets, Laptops, Câmeras, Acessórios eletrônicos",
      icon: <Computer size={35}/>,
      action: actionsButtons
    },
    {
      title: "FERRAMENTAS",
      description:"Ferramentas manuais, Ferramentas elétricas, Equipamentos de segurança",
      icon: <Hammer size={35}/>,
      action: actionsButtons
    },
    {
      title: "LIVROS E PAPELARIA",
      description:"Livros, Artigos de papelaria",
      icon: <LibraryBig size={35}/>,
      action: actionsButtons
    },
    {
      title: "ELETRICOS",
      description:"Fios, Interruptores, Tomadas, Lâmpadas",
      icon: <Plug2 size={35}/>,
      action: actionsButtons
    },
    {
      title: "ELETRONICOS",
      description:"Smartphones, Tablets, Laptops, Câmeras, Acessórios eletrônicos",
      icon: <Computer size={35}/>,
      action: actionsButtons
    },
    {
      title: "FERRAMENTAS",
      description:"Ferramentas manuais, Ferramentas elétricas, Equipamentos de segurança",
      icon: <Hammer size={35}/>,
      action: actionsButtons
    },
    {
      title: "LIVROS E PAPELARIA",
      description:"Livros, Artigos de papelaria",
      icon: <LibraryBig size={35}/>,
      action: actionsButtons
    },
    {
      title: "ELETRICOS",
      description:"Fios, Interruptores, Tomadas, Lâmpadas",
      icon: <Plug2 size={35}/>,
      action: actionsButtons
    }
  ]

  return(
    <div className="bg-root-image">
      <ButtonsGroupMenu
        actionsButtons={actionsButtonsCategory}
        oneColun={true}
      />
    </div>
  )
}

export default CategoryProduct