import { StyledButton } from "./styles"

interface ButtonPropos {
    Text: string
    Icon: any
    openModal?: () => void
}

export default function Button({ Text, Icon, openModal }: ButtonPropos) {
    return (
        <StyledButton onClick={openModal} buttonWidth={Icon ? "130px" : ""}>
            {Text} {Icon}
        </StyledButton>
    )
}