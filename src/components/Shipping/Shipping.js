import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { user } = useAuth()
    return (
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Your Name " defaultValue={user.displayName} {...register("name")} />


            <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />

            {errors.exampleRequired && <span className='error'>This field is required</span>}

            <input placeholder="Your Address" defaultValue="" {...register("Address")} />
            <input placeholder="Your City" defaultValue="" {...register("City")} />
            <input placeholder="Area" defaultValue="" {...register("Area")} />
            <input placeholder="Phone No " defaultValue="+880" {...register("Phone No ")} />

            <input type="submit" />
        </form>
    );
};

export default Shipping;