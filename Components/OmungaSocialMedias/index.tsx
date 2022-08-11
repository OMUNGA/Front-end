import {SocialMediasBox} from "./styles"
import {FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa"

export const OmungaSocialMedias: React.FC =()=> {
    return (
        <SocialMediasBox>
            <FaFacebook/>
            <FaTwitter/>
            <FaWhatsapp/>
        </SocialMediasBox>
    )
}