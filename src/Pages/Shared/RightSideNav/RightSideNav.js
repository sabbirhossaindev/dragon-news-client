import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FcGoogle} from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(error => console.log(error))
    }

    return (
        <section>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FcGoogle></FcGoogle>  Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='text-center'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </section>
    );
};

export default RightSideNav;