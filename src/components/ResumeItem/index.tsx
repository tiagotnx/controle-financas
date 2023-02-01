import { Container, Header, HeaderTitle, Total } from './styles'

interface resumeItem {
    title: string,
    Icon: any,
    value: string
}

const ResumeItem = ({ title, Icon, value }: resumeItem) => {
    return (
        <>
            <Container>
                <Header>
                    <HeaderTitle>{title}</HeaderTitle>
                    <Icon />
                </Header>
                <Total>{value}</Total>
            </Container>
        </>
    )
}

export default ResumeItem