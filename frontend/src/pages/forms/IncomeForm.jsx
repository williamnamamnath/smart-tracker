import { useState } from 'react';
import { useGlobalContext } from '../authentication/globalContext';
import { useNavigate } from 'react-router-dom';

import { Container, Card, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const IncomeForm = () => {

const navigate = useNavigate();
const { addIncome, error, setError } = useGlobalContext();

const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        category: '',
        description: '',
        date: ''
    });

    const categories = [
        'Salary',
        'Freelance',
        'Investment',
        'Gift',
        'Other',
    ];

const { title, amount, category, description, date } = inputState;
    
const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
        window.alert(`"${inputState.title}" added to list of income successfully!`);
        navigate('/income');
    };
    

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ maxWidth: 400, width: '100%' }} className="p-4 shadow">
                <Card.Body>
                    <Card.Title className="mb-4 text-center fs-3">Create New Income</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formAmount">
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={handleInput('title')}
                                placeholder="Enter a title"
                                required
                            />
                        </Form.Group>

                            <Form.Label>Amount ($)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                min="0"
                                required
                                value={amount}
                                onChange={handleInput('amount')}
                                placeholder="Enter an amount"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                value={category}
                                onChange={handleInput('category')}
                                id='category'
                                placeholder="Select a category"
                                >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={handleInput('description')}
                                placeholder="Describe this entry"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formDateTime">
                            <Form.Label>Date (yyyy-MM-dd)</Form.Label>
                            <br/>
                            <DatePicker
                                id='date'
                                selected={date}
                                onChange={(date) => {setInputState({...inputState, date: date})}}
                                dateFormat="yyyy-MM-dd"
                                className="form-control"
                                placeholderText="Select a date"
                            />
                        </Form.Group>

                        <Button variant="success" type="submit" className="w-100">
                            Add Income
                        </Button>
                        {error && (
                            <div className="text-danger mt-3 text-center">
                                {error}
                            </div>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default IncomeForm;