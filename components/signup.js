import React, { useState, useEffect } from "react";
import Router from "next/router";

function RegisterForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [usersArray,setUsersArray] = useState([]);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPasswordIsValid = enteredPassword.trim() !== "";

  const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }

    console.log("Entered Email:", enteredEmail);
    console.log("Entered Password:", enteredPassword);
    

    // useEffect(()=>{
    //   console.log(usersArray);
    // },[usersArray])

    try {
      // Send a POST request to Firebase or your backend to create a new user
      await fetch("https://sihhackathon-92a6f-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
      });

      // Clear input fields after successful submission
      setEnteredEmail("");
      setEnteredPassword("");

      const authenticatedUser = Object.values(usersArray).find((user) => {
        return user.email === enteredEmail && user.password === enteredPassword;
        
      });
      console.log(authenticatedUser);
  
      if (authenticatedUser) {
        // User is authenticated
        console.log("User authenticated:", authenticatedUser);
        Router.push("/navbar");
      } else {
        // User is not authenticated
        console.log("User not authenticated");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // State to store users data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/users.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        console.log(responseData);
        const usersArray = Object.values(responseData);
        setUsersArray(usersArray);
        console.log(usersArray);
       
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the component mounts

  const emailInputClasses = enteredEmailIsValid
    ? "bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400"
    : "bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400 border-red-500";

  const passwordInputClasses = enteredPasswordIsValid
    ? "bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400"
    : "bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400 border-red-500";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 md:p-8 rounded-lg shadow-lg w-full md:max-w-md">
        <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">
          Log In
        </h1>
        <form className="space-y-4" onSubmit={formSubmissionHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={emailInputClasses}
              placeholder="Email@company.com"
              required
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {!enteredEmailIsValid && enteredEmailTouched && (
              <p className="error-text">Email must not be empty.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={passwordInputClasses}
              placeholder="••••••••"
              required
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
            />
            {!enteredPasswordIsValid && enteredPasswordTouched && (
              <p className="error-text">Authentication problem.</p>
            )}
          </div>
          <div className="flex items-start mb-4">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-primary-300"
              required
            />
            <label htmlFor="terms" className="font-light text-gray-500 ml-2">
              I accept the{" "}
              <a className="font-medium text-primary-600 hover:underline" href="#">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;