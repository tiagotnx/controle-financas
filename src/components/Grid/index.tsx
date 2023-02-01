import GridItem from "../GridItem"
import { Table, Tbody, Th, Thead, Tr } from './styles'

const Grid = ({ itens, setItens }: any) => {
    const onDelete = (ID: string) => {
        const newArray = itens.filter((transaction: { id: string }) => transaction.id != ID)
        setItens(newArray)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

    return (
        <>
            <Table>
                <Thead>
                    <Tr>
                        <Th width={40}>Descrição</Th>
                        <Th width={40}>Valor</Th>
                        <Th width={10} alignCenter>Tipo</Th>
                        <Th width={10}></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {itens.map((item: any, index: number) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))}
                </Tbody>
            </Table>
        </>
    )
}

export default Grid