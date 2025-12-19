import React from "react";
import { useForm } from "react-hook-form";
import "./../styles/Form.css";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    alert("Your respond send successfully");
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1 className="title">HireSphere</h1>
      <p className="description">
        Centralized Placement Management System
      </p>

      <form onSubmit={handleSubmit(onSubmitHandler)} className="formhandler">

        <label>Full Name</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label>Roll Number</label>
        <input
          {...register("rollNo")}
          type="text"
          placeholder="Enter your roll number"
          required
        />

        <label>Email Address</label>
        <input
          {...register("email")}
          type="email"
          placeholder="name@institution.edu"
          required
        />

        <label>Mobile Number</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Enter mobile number"
          required
        />

        <label>Degree / Branch</label>
        <input
          {...register("branch")}
          type="text"
          placeholder="B.Tech - Computer Science"
          required
        />

        <label>Message</label>
        <textarea
          {...register("message")}
          placeholder="Enter your message"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>

      </form>
    </div>
  );
};

export default Form;
