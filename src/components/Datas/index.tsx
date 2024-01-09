import { Home, Search, Boxes, PackagePlus, PackageMinus, PackageX, LogOut } from 'lucide-react';

interface IIconsData {
  id: number;
  icon: JSX.Element;
  text: string;
}


export const datas:IIconsData[] = [
 { id: 1,
  icon: <Home size={25}/>,
  text: "Inicio"
 },
 { id: 2,
  icon: <Search size={25}/>,
  text: "Buscar"
 },
 { id: 3,
  icon: <Boxes size={25}/>,
  text: "Produtos"
 },
 { id: 4,
  icon: <PackagePlus size={25}/>,
  text: "Cadastrar"
 },
 { id: 5,
  icon: <PackageMinus size={25}/>,
  text: "Saida"
 },
 { id: 6,
  icon: <PackageX size={25}/>,
  text: "Devolução"
 },
 { id: 7,
  icon: <LogOut size={25}/>,
  text: "Sair"
 }
]
