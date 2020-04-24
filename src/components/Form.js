import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import axios from 'axios';
// import Alertcomponent from './alertComponent';
import Alert from '@material-ui/lab/Alert';




    

const Form = () => {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textareaInput, setTextareainput] = useState('');
    const [severity, setSeverity] = useState('');
    const [alertText, setAlertText] = useState('');
   
    

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    }

    const handleTextarea = (e) => {
        setTextareainput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name,
            email,
            textareaInput
        }
        axios.post('https://formcarry.com/s/0bmXlpy81IpK', contact, {headers: {'Accept': 'application/json'}})
            .then(function (response) {
                setSeverity('success')
                setAlertText(`${response.data.message} 😁`);
                setTimeout(() => {
                    setSeverity('');
                    setAlertText('');
                            
                }, 3500)

            })
            .catch(function (error) {
                severity('error')
                setAlertText(`${error.data.message} ☹`);
                setTimeout(() => {
                    severity('');
                    setAlertText('');
                            
                }, 3500)

            });
        
        setName('');
        setEmail('');
        setTextareainput('');
    

    }


    return (

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 1000 }}
        >

            {props => (
                <div style={props}>
                    <div className="container pt-5 pb-5 ">
                        <div className="greeting">
                            <h2 className=" pb-3 greeting__container">Hello</h2>
                            <p className="text-white  h4 greeting__container--intro">Lets work together to create game changing experiences that can give your brand wings.</p>
                        </div>


                        <Alert severity={severity}>{alertText}</Alert>

                        <div className="contain">
                            <form className="contain-form" onSubmit={handleSubmit} >
                                <input type="text" className="name" placeholder="Full name" name="name" value={name} onChange={handleName} autoComplete="off" required />
                                <br />
                                <input type="email" className="email" placeholder="Email" name="email" value={email} onChange={handleEmail} autoComplete="off" required/>
                                <br />

                                <textarea type="text" className="textarea " placeholder="Your message" name="message" rows="4" cols="50" value={textareaInput} onChange={handleTextarea} required />
                                <br />
                                <button class="register" >
                                    <span>Submit</span>
                                </button>
                            </form>
                        </div>

                        {/* form end */}
                    </div>


                </div>
            )}

        </Spring>

        
    )
}

export default Form;