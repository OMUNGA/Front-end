import React from "react";
import { Footer } from "../Footer";
import SecundaryHeader from "../Header/SecundaryHeader";
import Menu from "../Menu";
import { OmungaSocialMedias } from "../OmungaSocialMedias";
import ForumsCards from "../ForumsCrads";

export const ForumPublicationPage = () => {
    
    return (
        <>
            <Menu/>
            <SecundaryHeader 
                Title="Forum" 
                headerDescription="Encontre aqui as perguntas mais frequentes em nossa plataforma. utilize a barra de pesquisa e escreva o que está procurando"
            />
            <ForumsCards />
            <OmungaSocialMedias />
            <Footer />
        </>
    )
}