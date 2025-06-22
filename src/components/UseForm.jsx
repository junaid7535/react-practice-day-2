import React, { useTransition } from "react";
import {useFormStatus} from 'react-dom';

const UseForm = () => {

    const handle = async() => {
        await new Promise(res => setTimeout(res,2000));
        console.log("Submit");
    }

    const Form = () =>{
        
        const {pending} = useFormStatus()

        return (
            <div>
                <input type="text" placeholder="Enter name" /> <br />
                <input type="text"  placeholder="Enter password"/> <br />

                <button disabled = {pending}>Submit</button>
            </div>
        );
    }

    const [pending,startTransition] = useTransition();

    const handlebtn = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res,2000));
        }) 
    }

    return (
        <div>
            <h1>Use Form Status</h1>

            <form action = {handle}>
                <Form></Form>
            </form>

            <br /> <br />
            <button disabled = {pending} onClick={handlebtn}>Submit using start transition</button>
        </div>
    );
}

export default UseForm;