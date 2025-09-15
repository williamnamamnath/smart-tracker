import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:4000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //Calculating incomes
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}add-income`, income)
            await getIncomes()
            setError(null)
        } catch (err) {
            setError(err.response?.data?.message || "Failed to add income")
        }
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const updateIncome = async (id, newInfo) => {
        try {
            await axios.put(`${BASE_URL}update-income/${id}`, newInfo);
            await getIncomes();
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message);
        }
    }

    
    
    //Calculating expenses
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}add-expense`, expense)
            await getExpenses()
            setError(null)
        } catch (err) {
            setError(err.response?.data?.message || "Failed to add expense")
        }
    }
    
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }
    
    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const updateExpense = async (id, newInfo) => {
        try {
            await axios.put(`${BASE_URL}update-expense/${id}`, newInfo);
            await getExpenses();
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message);
        }
    }
    
    
    //User authentication
    const createUser = async (userData) => {
        try {
            await axios.post(`${BASE_URL}users`, userData);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create user");
        }
    };

    const loginUser = async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}login`, credentials);
            setError(null);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to login");
            return null;
        }
    };
    
    const getUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}users`);
            setError(null);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || "Failed to get users");
            return [];
        }
    };
    
    
    //Inquiries
    const createInquiry = async (inquiryData) => {
        try {
            await axios.post(`${BASE_URL}inquiries`, inquiryData);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create inquiry");
        }
    };
    
    
    //Total calculations
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    
    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            createUser,
            loginUser,
            getUsers,
            createInquiry,
            totalExpenses,
            totalBalance,
            transactionHistory,
            updateIncome,
            updateExpense,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}