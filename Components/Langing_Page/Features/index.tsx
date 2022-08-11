import { FeaturesSection } from './styles'

export function Features() {
    return(
        <FeaturesSection>
            <div>
                <h2>Oque tem de bom na Omunga</h2>
                <p>Existem 3 épicas que você pode encontrar aqui</p>
            </div>
            <ul>
                <li>
                    <span>01</span>
                    <p>Partilhar conhecimento e aprender com os outros</p>
                </li>

                <li>
                    <span>02</span>
                    <p>Desenvolvido especialmente para angolanos</p>
                </li>

                <li>
                    <span>03</span>
                    <p>Cultivar a cultura de partilhas de conteúdo</p>
                </li>
            </ul>
        </FeaturesSection>
    )
}