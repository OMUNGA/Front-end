import {StyledDiv, StyledInput} from "./styles"
import Button from "../Button"

interface inputProps {
    placeholder: string
    ButtonText: string
}

export default function Input({placeholder, ButtonText}: inputProps) {
    return(
        <StyledDiv>
            <StyledInput placeholder={placeholder}/>
            <Button Text={ButtonText} Icon=""/>
        </StyledDiv>
    )
}