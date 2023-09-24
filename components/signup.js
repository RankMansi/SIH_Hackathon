import React, { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
const FleetManagerComponent = dynamic(() => import("./fleetmanager"), {
  ssr: false,
});


export default function Landing_Page() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [usersArray, setUsersArray] = useState([]);
  const [fleetManagerArray, setFleetManagerArray] = useState([]);
  const [conductorArray, setconductorArray] = useState([]);

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

  

  const FMformSubmissionHandler = async (event) => {
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
        // Send a POST request to Firebase or your backend to create a new Fleet Manager
        await fetch(
          "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/fleetmanager.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
            }),
          }
        );
  
        // Clear input fields after successful submission
        setEnteredEmail("");
        setEnteredPassword("");
  
        // Check authentication against Fleet Managers data
        const authenticatedFleetManager = fleetManagerArray.find(
          (fleetManager) => {
            return (
              fleetManager.email === enteredEmail &&
              fleetManager.password === enteredPassword
            );
          }
        );
  
        if (authenticatedFleetManager) {
          // Fleet Manager is authenticated
          console.log("Fleet Manager authenticated:", authenticatedFleetManager);
          Router.push("/fleetmanager");
        } else {
          // Fleet Manager is not authenticated
          console.log("Fleet Manager not authenticated");
        }
      } catch (error) {
        console.error("Error:", error);
      }
  };

  // State to store users data


  useEffect(() => {
    const fetchFleetManagersData = async () => {
      try {
        const response = await fetch(
          "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/fleetmanager.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        console.log(responseData);
        const fleetManagers = Object.values(responseData);
        setFleetManagerArray(fleetManagers);
        console.log(fleetManagers);
      } catch (error) {
        console.error("Error fetching Fleet Manager data:", error);
      }
    };

    fetchFleetManagersData();
  }, []);

  const CformSubmissionHandler = async (event) => {
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
        // Send a POST request to Firebase or your backend to create a new Fleet Manager
        await fetch(
          "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/conductor.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
            }),
          }
        );
  
        // Clear input fields after successful submission
        setEnteredEmail("");
        setEnteredPassword("");
  
        // Check authentication against Fleet Managers data
        const authenticatedConductor = conductorArray.find(
          (conductor) => {
            return (
              conductor.email === enteredEmail &&
              conductor.password === enteredPassword
            );
          }
        );
  
        if (authenticatedConductor) {
          // Fleet Manager is authenticated
          console.log("Conductor authenticated:", authenticatedConductor);
          Router.push("/navbar");
        } else {
          // Fleet Manager is not authenticated
          console.log("Conductor not authenticated");
        }
      } catch (error) {
        console.error("Error:", error);
      }
  };

  // State to store users data


  useEffect(() => {
    const fetchConductorsData = async () => {
      try {
        const response = await fetch(
          "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/conductor.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        console.log(responseData);
        const conductors = Object.values(responseData);
        setconductorArray(conductors);
        console.log(conductors);
      } catch (error) {
        console.error("Error fetching Conductor data:", error);
      }
    };

    fetchConductorsData();
  }, []);

  
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
      await fetch(
        "https://sihhackathon-92a6f-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
        }
      );

      // Clear input fields after successful submission
      setEnteredEmail("");
      setEnteredPassword("");

      const authenticatedUser = Object.values(usersArray).find((user) => {
        return user.email === enteredEmail && user.password === enteredPassword;
      });

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

  const [showConductorForm, setShowConductorForm] = useState(false);
  const [showFleetManagerForm, setShowFleetManagerForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleClick = (formType) => {
    switch (formType) {
      case "conductor":
        setShowConductorForm(true);
        setShowFleetManagerForm(false);
        setShowUserForm(false);
        break;
      case "fleetManager":
        setShowConductorForm(false);
        setShowFleetManagerForm(true);
        setShowUserForm(false);
        break;
      case "user":
        setShowConductorForm(false);
        setShowFleetManagerForm(false);
        setShowUserForm(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-fluid p-4">
      <>
        <div className="flex space-x-2 pl-[53px] pt-[50px]">
          <button
            onClick={() => handleClick("conductor")}
            className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
          >
            Log In for Conductor
          </button>

          <button
            onClick={() => handleClick("fleetManager")}
            className="p-4 min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
          >
            Log In for Fleet Manager
          </button>

          <button
            onClick={() => handleClick("user")}
            className="p-4 min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
          >
            Log In for User
          </button>
        </div>

        {showConductorForm && (
          <div>
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-screen-md">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">
                  Conductor Login Page
                </h1>
                <form className="space-y-4" onSubmit={CformSubmissionHandler}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                  </div>
                  <button
                    className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
                    disabled={!formIsValid}
                  >
                    Login
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        )}

        {showFleetManagerForm && (
          <div>
            <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-screen-md">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">
                  Fleet Manager Login Page
                </h1>
                <form className="space-y-4" onSubmit={FMformSubmissionHandler}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                  </div>
                  <button
                    className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
                    disabled={!formIsValid}
                  >
                    Login
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        )}

        {showUserForm && (
          <div>
            <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-screen-md">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">
                  User Login Page
                </h1>
                <form className="space-y-4" onSubmit={formSubmissionHandler}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
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
                  </div>
                  <button
                    className="min-w-[130px] h-[40px] text-white px-2.5 py-1 font-bold cursor-pointer transition-transform duration-300 transform-gpu inline-block outline-none rounded-[5px] bg-[#343a40] shadow-md hover:shadow-sm active:shadow-none hover:translate-y-1 active:translate-y-5"
                    disabled={!formIsValid}
                  >
                    Login
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        )}
      </>
    </div>
  );
}