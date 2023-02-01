import ResumeItem from '../ResumeItem'
import { Container } from './styles'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

type Props = {
    income: string,
    expense: string,
    total: string
}
const Resume = ({ income, expense, total }: Props) => {
    return (
        <>
            <Container>
                <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
                <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
                <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
            </Container>
        </>
    )
}

export default Resume