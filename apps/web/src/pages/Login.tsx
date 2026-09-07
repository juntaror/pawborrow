import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "@repo/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white">
      <div className="relative z-2 flex shrink-0 grow-0 basis-1/2 flex-col justify-center p-12 text-white [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
        <div className="absolute inset-0 bg-[url('/images/featured-bella.jpg')] bg-cover bg-center bg-no-repeat ">
          <div className="absolute inset-0 bg-[rgba(30,18,10,0.75)] d-flex flex-column justify-content-center">
            <div className="relative h-full flex flex-col justify-end p-1">
              <div className="absolute top-0 left-0 px-4">
                <Link to="/">
                  <img
                    src="/images/PawBorrowLogo.png"
                    alt="Logo"
                    className="w-41.25 h-41.25"
                  />
                </Link>
              </div>
              <div className="relative h-full flex flex-col justify-end p-12">
                <span className="font-serif text-[32px] font-normal text-white">
                  PawBorrow
                </span>
                <p className="mt-2 text-base text-white">
                  You've got a Paw in me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-8 py-12 ">
        <div className="w-full max-w-105">
          <div className="flex flex-col items-center justify-center text-center">
            <Link to="/">
              {" "}
              <img src="/images/PawLogo2.png" alt="Logo" className="" />
            </Link>
            <h1 className="font-serif text-[32px] font-normal text-[#1b1b1b]">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[#6f6f6f]">
              Sign in to continue to your account
            </p>
          </div>
          
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="font-body text-xs uppercase text-black block mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11.5 w-full rounded-xl border border-black bg-whtie px-4 py-3 font-body text-sm"
              />
            </div>
            <div className="mt-4">
              <label className="font-body text-xs uppercase text-black block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value )}
                className="h-11.5 w-full rounded-xl border border-black bg-whtie px-4 py-3 font-body text-sm"
              />
            </div>

            <div className="text-right">
              <Link to="/forgot" className="text-xs text-[#6f6f6f] transition-colors hover:text-[#879b7b]">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="h-13 w-full rounded-full bg-[#879b7b] text-sm font-normal uppercase text-white transition-colors hover:bg-[#748a68]"
            >
              Log In
            </button>
          </form>

          <div className="relative my-8 flex items-center">
            <div className="h-px flex-1 bg-[#dedede]" />
            <span className="bg-[#fafaf8] px-3 text-xs uppercase tracking-wide text-[#999]">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-[#dedede]" />
          </div>

          <p className="mt-8 text-center text-sm text-[#6f6f6f]">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#6f6f6f] hover:text-[#879b7b]">Sign up</Link>
          </p>

        </div>
      </div>
    </main>
  );
}
