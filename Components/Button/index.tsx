import { StyledButton } from "./styles"

interface ButtonPropos {
    Text: string
    Icon: any
    Onclick?: (event: MouseEvent) => void
}

export default function Button({ Text, Icon, Onclick }: ButtonPropos) {
    return (
        <StyledButton onClick={Onclick} buttonWidth={Icon ? "130px" : ""}>
            {Text} {Icon}
        </StyledButton>
    )
}