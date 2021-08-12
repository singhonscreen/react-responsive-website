import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';


const Contact = () => {
    const [data, setData] = useState(
        {
            fname: '',
            phone:'',
            email:'',
            msg:'',

        }
    )
    const submitData = (event) => {
        event.preventDefault();
        alert(`My full name is "${data.fname}", my mobile no. is "${data.phone}", my email is "${data.email}", and my message is "${data.msg}"`)
    }

    const inputEvent = (event) => {
    const {name,value} = event.target
    setData((prevVal)=>{
        return{
            ...prevVal,
            [name] : value,
        }

    })
    }
    return (
        <>
            <h1 className='text-center'>Contact Us</h1>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 mx-auto">
                            <form onSubmit={submitData} >
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input onChange={inputEvent} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fname" value={data.fname} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                                    <input onChange={inputEvent} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input onChange={inputEvent} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea onChange={inputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;
