import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm: "",
    isFormValid: true
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    validateForm();
  }, [formData]); // Run validateForm whenever formData changes

  const validateForm = () => {
    const isFormValid =
      formData.fname.trim() !== "" &&
      formData.lname.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirm.trim() !== "";

    setFormData({
      ...formData,
      isFormValid: isFormValid
    });
  }

  const method = () => {
    if (formData.isFormValid) {
      if (formData.password === formData.confirm) {
        // Perform signup logic

        // Navigate to the home page after successful signup
        navigate('/');
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Fill all the fields in the form");
    }
  }

  return (
    <div>
      <form>
        <label>FirstName : </label>
        <input type="text" name="fname" value={formData.fname} onChange={handleInput} required />
        <br />
        <label>LastName : </label>
        <input type="text" name="lname" value={formData.lname} onChange={handleInput} required />
        <br />
        <label>Email : </label>
        <input type="email" name="email" value={formData.email} onChange={handleInput} required />
        <br />
        <label>Password : </label>
        <input type="text" name="password" value={formData.password} onChange={handleInput} required />
        <br />
        <label>Confirm : </label>
        <input type="text" name="confirm" value={formData.confirm} onChange={handleInput} required />
        <br />
        <button type="button" onClick={method}>SignUp</button>
        <br />
        <h2>
          {formData.isFormValid ? (
            <Link to="/login">Already have an account</Link>
          ) : (
            <span style={{ color: 'gray' }}>Form is not valid</span>
          )}
        </h2>
      </form>
    </div>
  );
}

export default Signup;
