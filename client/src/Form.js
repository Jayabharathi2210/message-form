import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    padding: 20px;
    max-width: 900px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
`;

const StyledForm = styled.form`
    flex: 1;
    padding: 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-style: italic;
    font-size: 17px;
`;

const Input = styled.input`
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const Textarea = styled.textarea`
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    height: 100px; /* Adjust this value to increase the height */
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: teal;
    color: white;
    font-size: 16px;
    font-style: italic;
    cursor: pointer;
    &:hover {
        background: MediumTurquoise;
    }
`;

const Image = styled.img`
    flex: 1;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-left: 20px;
`;

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/form', formData);
            console.log('Response:', response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder='Full Name'
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder='eg:abc@def.com'
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Message:</Label>
                    <Textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder='Enter your message not more than 100 words'
                        required
                    />
                </FormGroup>
                <Button type="submit">Send &gt;&gt;</Button>
            </StyledForm>
            <Image src="msgimg.png" alt="Placeholder Image" />
        </Container>
    );
};

export default Form;
