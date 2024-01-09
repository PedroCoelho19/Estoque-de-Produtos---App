import React, { useState } from "react";
import { CardProduct, ModalButtonsOpt } from "../../components/index"


const Product:React.FC = () => {
  const [open,setOpen] = useState(false)

  const produtos = [
    {
      id:1,
      nome: 'Notebook',
      descricao: 'Notebook de última geração',
      categoria: 'Informática',
      patrio: 1001,
      codBarras: '7890123456789',
      unidade: 'Peça',
      quantidade: 50,
    },
    {
      id:2,
      nome: 'Câmera de Segurança',
      descricao: 'Câmera para monitoramento residencial',
      categoria: 'Eletrônicos',
      patrio: 1002,
      codBarras: '0123456789012',
      unidade: 'Peça',
      quantidade: 20,
    },
    {
      id:3,
      nome: 'Fio Elétrico',
      descricao: 'Rolo de fio elétrico para instalações',
      categoria: 'Eletrônicos',
      patrio: 1003,
      codBarras: '5678901234567',
      unidade: 'Metro',
      quantidade: 100,
    },
    {
      id:4,
      nome: 'Mouse sem Fio',
      descricao: 'Mouse ergonômico sem fio',
      categoria: 'Informática',
      patrio: 1004,
      codBarras: '3456789012345',
      unidade: 'Peça',
      quantidade: 30,
    },
  ];
  
  const openModalBtns = () => {
    setOpen(true)
  }
  
  const closeModalBtns = () => {
    setOpen(false)
  }

  const detailsProduct = () => {
  }

  const productEntry = () => {
  }

  const productExit = () => {
  }

  const productReturn = () => {
  }

  const deleteProduct = () => {
  }
  
  const returnCard = () => {

  }
  
  const actionsButtons = [
    {
      title: "Detalhes do Produto",
      action: detailsProduct
    },
    {
      title: "Entrada de Produto",
      action: productEntry
    },
    {
      title: "Saida de Produto",
      action: productExit
    },
    {
      title: "Devolucao de Produto",
      action: productReturn
    },
    {
      title: "Excluir Produto",
      action: deleteProduct
    },
    {
      title: "Voltar",
      action: returnCard
    },
  ]
  


 return(
  <div className="bg-root-image">
    <CardProduct
     produtos={produtos}
     action={openModalBtns}
    />
    <ModalButtonsOpt
     actionsButtons={actionsButtons}
     isOpen={open}
     onClose={closeModalBtns}
    />

  </div>
 )
}

export default Product