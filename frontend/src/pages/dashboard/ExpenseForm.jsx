import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const categories = [
    'Food',
    'Transport',
    'Utilities',
    'Entertainment',
    'Health',
    'Other',
    'Create New Category'
];

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [otherCategory, setOtherCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState(() => {
        const now = new Date();
        return now.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            amount: parseFloat(amount),
            category,
            description,
            dateTime: new Date(dateTime),
        };
        // TODO: Send expenseData to backend or handle it as needed
        console.log('Expense Created:', expenseData);
        // Optionally reset form
        setAmount('');
        setCategory(categories[0]);
        setDescription('');
        setDateTime(new Date().toISOString().slice(0, 16));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ maxWidth: 400, width: '100%' }} className="p-4 shadow">
                <Card.Body>
                    <Card.Title className="mb-4 text-center fs-3">Create New Expense</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label>Amount ($)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                min="0"
                                required
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                placeholder="Enter amount"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        {category === 'Create New Category' && (
                            <Form.Group className="mb-3" controlId="formOtherCategory">
                                    <Form.Label>New Category Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newCategory}
                                        onChange={e => setNewCategory(e.target.value)}
                                        placeholder="Enter new category"
                                        required
                                    />
                            </Form.Group>
                            )}

                                {category === 'Other' && (
                                    <Form.Group className="mb-3" controlId="formOtherCategory">
                                        <Form.Label>Specify Other Category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={category !== 'Other' ? '' : otherCategory}
                                            onChange={e => setOtherCategory(e.target.value)}
                                            placeholder="Enter category name"
                                        />
                                    </Form.Group>
                                )}

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Describe this entry..."
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formDateTime">
                            <Form.Label>Date & Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                required
                                value={dateTime}
                                onChange={e => setDateTime(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="danger" type="submit" className="w-100">
                            Add Expense
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}; 

export default ExpenseForm;