import { useState } from 'react'
import Grid from '../Grid'
import { Button, Container, Input, InputContent, Label, RadioGroup } from './styles'


const Form = ({ handleAdd, setTransactionList, transactionsList }: any) => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState<string | number>("")
    const [isExpense, setExpense] = useState(false)

    const generateID = () => crypto.randomUUID()

    const handleSave = (e: any) => {
        e.preventDefault()

        if (!desc || !amount) {
            alert("Informe a descrição e o valor!")
            return
        }
        if (amount < 1) {
            alert("O valor tem que ser positivo!")
            return
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }


    return (
        <>
            <Container>
                <InputContent>
                    <Label>Descrição</Label>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </InputContent>
                <InputContent>
                    <Label>Valor</Label>
                    <Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </InputContent>
                <RadioGroup>
                    <Input type="radio" id="rIncome" defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
                    <Label htmlFor='rIncome'>Entrada</Label>
                    <Input type="radio" id="rExpenses" name='group1' onChange={() => setExpense(!isExpense)} />
                    <Label htmlFor='rExpenses'>Saída</Label>
                </RadioGroup>
                <Button onClick={handleSave}>Adicionar</Button>
            </Container>
            <Grid itens={transactionsList} setItens={setTransactionList}></Grid>
        </>
    )
}

export default Form