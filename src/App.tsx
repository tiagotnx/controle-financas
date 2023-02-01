import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Resume from './components/Resume'
import GlobalStyle from './styles/global'

function App() {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [income, setIncome] = useState("")
  const [expense, setExpense] = useState("")
  const [total, setTotal] = useState("")

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: { expense: any }) => item.expense)
      .map((transaction: { amount: any }) => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter((item: { expense: any }) => !item.expense)
      .map((transaction: { amount: any }) => Number(transaction.amount))

    const expense = amountExpense.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`)

  }, [transactionsList])

  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }

  return (
    <>
      <Header />
      <main>
        <Resume income={income} expense={expense} total={total} />
        <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionList={setTransactionsList} />
      </main>
      <GlobalStyle />
    </>
  )
}

export default App
