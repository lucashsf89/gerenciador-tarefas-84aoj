import { useEffect, useState } from "react";

export const Header = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const userName = localStorage.getItem('userName');
            if(userName){
              const fullName = userName.split(' ');
              if(fullName && fullName.length > 0){
                setName(fullName[0]);
              }
            }
        }
      }, [])

    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo Fiap" className="logo" />
            <button>+ Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá, {name}</span>
                <img  src="/exit-mobile.svg" alt="Sair" />
            </div>
            <div className="desktop">
                <span>Olá, {name}</span>
                <img src="/exit-desktop.svg" alt="Sair"/>
            </div>
        </div>
    );
}