import { ButtonsGroupMenu } from "../../components/index"
import { PencilLine, Boxes, PackagePlus, PackageMinus, PackageX, User } from 'lucide-react';

const Home:React.FC<any> = () => {
  
    const teste1 = () => {
      alert("Edivar")
    }

    const teste2 = () => {
      alert("Edivar")
    }

    const teste3 = () => {
      alert("Edivar")
    }

    const teste4 = () => {
      alert("Edivar")
    }

    const teste5 = () => {
      alert("Edivar")
    }

    const teste6 = () => {
      alert("Edivar")
    }
    

  const actionsButtons = [
   { 
    title: "PRODUTOS",
    description: "Lista de todos os produtos",
    icon: <Boxes size={35}/>,
    action: teste1
  },
  { 
    title: "CADASTRO",
    description: "Cadastrar Produtos",
    icon: <PencilLine size={35}/>,
    action: teste2
  },
  { 
    title: "LISTA",
    description: "Buscar produtos",
    icon: <PackagePlus size={35}/>,
    action: teste3
  },
  { 
    title: "SAIDA",
    description: "Saida de produtos",
    icon: <PackageMinus size={35}/>,
    action: teste4
  },
  { 
    title: "DEVOLUÇÃO",
    description: "Devolver um produtos",
    icon: <PackageX size={35}/>,
    action: teste5
  },
  { 
    title: "USUARIOS",
    description: "Lista de usuarios",
    icon: <User size={35} />,
    action: teste6
  }
  ]
 

  return(
      <div className="bg-root-image">
       <ButtonsGroupMenu
        actionsButtons={actionsButtons}
       />     
      </div>
  )
}

export default Home