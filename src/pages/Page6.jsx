import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Subscription successful! You will receive our newsletter.');
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#181c1c] border-t-2 text-white flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-xl w-full space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Always First!
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Sign up to Cyberpunk newsletter and stay updated.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 text-left">
            <input
              type="checkbox"
              id="consent"
              className="w-8 h-8 rotate-45 border-gray-300 rounded "
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-400">
              I would like to receive news, special offers, and other information from CD PROJEKT,
              and I am 16 years old or older.
            </label>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-500 leading-relaxed">
            CD PROJEKT will be responsible for your personal data. For more information, please
            check our{" "}
            <a href="#" className="text-red-500 hover:underline">
              CD PROJEKT Privacy Policy
            </a>
            .
          </p>

          {/* reCAPTCHA Notice */}
          <p className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-red-500 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-red-500 hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#E74C3C] text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all uppercase"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;
