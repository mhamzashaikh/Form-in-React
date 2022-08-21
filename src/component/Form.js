import { useState } from 'react';
import './Form.css';

function Form() {

    const [info, submitInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        message: ""

    });
  




    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        submitInfo({...info, [name]: value});
         
    }


    function formSubmit(e){
        e.preventDefault();

        const myobj = {...info};
        localStorage.setItem("FormData", JSON.stringify(myobj));
        console.log(myobj);
        alert("Form Submitted");
    }



    return (
        <div>
            <h2>Submit your Form here</h2>
            <form action="" onSubmit={formSubmit}>
                <input type="text" placeholder="First Name..." name="firstName"  value={info.firstName}  onChange={handleInput} />
                <input type="text" placeholder="Last Name..." name="lastName" value={info.lastName}  onChange={handleInput} />
                <input type="email" placeholder="Email..." name="email" value={info.email}  onChange={handleInput} />
                <input type="number" placeholder="Phone Number..." name="phoneNum"  value={info.phoneNum} onChange={handleInput} />
                <textarea placeholder="Enter your Message here" name="message"  value={info.message} onChange={handleInput}></textarea>
                <button >Submit</button>
            </form>
        </div>
    );

}

export default Form;