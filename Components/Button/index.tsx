import {StyledButton} from "./styles"

interface ButtonPropos {
    Text: string
    Icon?: any
}

export default function Button({Text, Icon}: ButtonPropos) {
    return(
        <StyledButton buttonWidth={Icon? "130px": ""}>
           {Text} {Icon}
        </StyledButton>
    )
}