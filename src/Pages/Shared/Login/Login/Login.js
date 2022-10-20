import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate('/')
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        });
    }


    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <h1 className='text-center text-info m-2'>Please Login !</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Text className="text-danger">
                <div>
                    {error}
                </div>
            </Form.Text>
            
            <Button variant="primary" type="submit" className='mt-3'>
                Login
            </Button>
        </Form>
    );
};

export default Login;