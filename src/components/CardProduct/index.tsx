import React from "react";
import { RenderConditional } from "../../utils";

interface ICardProduct {
  idProduto?:number;
  nome?:string;
  descricao?:string;
  categoria?:string;
  patrio?:number;
  codBarras?:string;
  unidade?:string;
  quantidade?:number;
  status?: number;
}
interface IOptionsCard {
  produtos?: ICardProduct[];
  action?:  any;
}

const CardProduct:React.FC<IOptionsCard> = ({produtos = [], action}) => {
  return (
    <div className="list-group-buttons flex flex-col p-2 items-center mt-14 ml-5 mr-5  w-full rounded-xl overflow-x-hidden auto max-h-[85%] -z-1 backdrop-opacity-10 backdrop-invert bg-white/30 ">
    { 
     produtos?.map((produto, index) => {
      return (
        <>
        <RenderConditional istrue={produtos?.length > 0}>
          <div className="flex opacity-100 bg-white w-full h-[23vh] mb-4 rounded-xl hover:bg-gray-300" onClick={action} key={index}>
           <div className="flex bg-green-800 w-7 h-[23vh] rounded-l-xl"/>
            <div className="pl-1 flex-1 p-1 items-center justify-center">
                <p className="text-[2vh]"><strong>Nome:</strong> {produto?.nome}</p>
                <p className="text-[2vh]" id="font-description"><strong>Descricao:</strong> {(produto?.descricao)}</p>
                <p className="text-[2vh]"><strong>Categoria:</strong> {produto?.categoria}</p>
                <p className="text-[2vh]"><strong>Patrio:</strong> {produto?.patrio}</p>
                <p className="text-[2vh]"><strong>Cod.Barras:</strong> {produto?.codBarras}</p>
                <p className="text-[2vh]"><strong>Unidade:</strong> {produto?.unidade}</p>
                <p className="text-[2vh]"><strong>Quantidade:</strong> {produto?.quantidade}</p>
            </div>
          </div>
        </RenderConditional>
       </>
       );
      }
     )
    }
        <RenderConditional istrue={!produtos?.length}>
      
        </RenderConditional>

    </div>
  );
}

export default CardProduct