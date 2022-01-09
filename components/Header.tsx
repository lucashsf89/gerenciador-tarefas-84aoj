import { NextPage } from "next";
import { useEffect, useState } from "react";

type HeaderProps = {
    sair() : void
    sair() : void,
    showModal() : void
}

export const Header : NextPage<HeaderProps> = ({ sair}) => {
export const Header : NextPage<HeaderProps> = ({ sair, showModal}) => {

    const [name, setName] = useState('');

@@ -24,7 +25,7 @@ export const Header : NextPage<HeaderProps> = ({ sair}) => {
    return (
        <div className="container-header">
            <img src="/logo.svg" alt="Logo Fiap" className="logo" />
            <button>+ Adicionar Tarefa</button>
            <button onClick={showModal}>+ Adicionar Tarefa</button>
            <div className="mobile">
                <span>Olá, {name}</span>
                <img  src="/exit-mobile.svg" alt="Sair" onClick={sair} />
            </div>
            <div className="desktop">
                <span>Olá, {name}</span>
                <img src="/exit-desktop.svg" alt="Sair" onClick={sair}/>
            </div>
        </div>
    );
}