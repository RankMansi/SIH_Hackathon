import React from 'react';

function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:max-w-md">
        <h1 className="text-lg md:text-2xl font-bold text-gray-900 text-center mb-4">Create an Account</h1>
        <form className="space-y-4" action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400" placeholder="name@company.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input type="password" name="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400" placeholder="••••••••" required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900">Confirm password</label>
            <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-2 px-4 md:py-2.5 md:px-4 placeholder-gray-400" placeholder="••••••••" required />
          </div>
          <div className="flex items-start mb-4">
            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-primary-300" required />
            <label htmlFor="terms" className="font-light text-gray-500 ml-2">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
          </div>
          <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm py-2.5 md:py-3 text-center">Create an account</button>
        </form>
        <p className="text-xs md:text-sm font-light text-gray-500 mt-2 md:mt-4 text-center">Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline">Login here</a></p>
      </div>
    </div>
  );
}

export default RegisterForm;
