import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "@repo/api";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, firstName, lastName);
      navigate("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white">
      <div className="relative z-2 flex shrink-0 grow-0 basis-1/2 flex-col justify-center p-12 text-white [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
        <div className="absolute inset-0 bg-[url('/images/featured-bella.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-[rgba(30,18,10,0.75)]">
            <div className="relative h-full flex flex-col justify-end p-1">
              <div className="absolute top-0 left-0 px-4">
                <a href="/">
                  <img
                    src="/images/PawBorrowLogo.png"
                    alt="PawBorrow Logo"
                    className="h-41.25 w-41.25"
                  />
                </a>
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

      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="w-full max-w-105">
          <div className="flex flex-col items-center justify-center text-center">
            <Link to="/">
              <img
                src="/images/PawLogo2.png"
                alt="PawBorrow Logo"
                className=""
              />
            </Link>

            <h1 className="font-serif text-[32px] font-normal text-[#1b1b1b]">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm text-[#6f6f6f]">
              Join now to have an Pawesome experience!
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleRegister}>
            {error && <p className="text-center text-sm text-red-500">{error}</p>}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-2 block font-body text-xs uppercase text-black">
                  First Name
                </label>

                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-11.5 w-full rounded-xl border border-black bg-white px-4 py-3 font-body text-sm"
                />
              </div>

              <div className="flex-1">
                <label className="mb-2 block font-body text-xs uppercase text-black">
                  Last Name
                </label>

                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-11.5 w-full rounded-xl border border-black bg-white px-4 py-3 font-body text-sm"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-body text-xs uppercase text-black">
                Email
              </label>

              <input
                type="email"
                required
                className="h-11.5 w-full rounded-xl border border-black bg-white px-4 py-3 font-body text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-xs uppercase text-black">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11.5 w-full rounded-xl border border-black bg-white px-4 py-3 font-body text-sm"
              />
            </div>

            <div>
              <label className="mb-2 block font-body text-xs uppercase text-black">
                Confirm Password
              </label>

              <input
                type="password"
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11.5 w-full rounded-xl border border-black bg-white px-4 py-3 font-body text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-13 w-full rounded-full bg-[#879b7b] text-sm font-normal uppercase text-white transition-colors hover:bg-[#748a68]"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-2 px-2 text-center font-body text-[12px] leading-relaxed text-[#888]">
            By signing up, you agree to our{" "}
            <Link
              to="/tos"
              className="text-[#6f6f6f] underline underline-offset-2 transition-colors hover:text-[#879b7b]"
            >
              Terms of Service
            </Link>{" "}
            and acknowledge that PawBorrow and each Member process your personal
            data in accordance with our{" "}
            <Link
              to="/privacy"
              className="text-[#6f6f6f] underline underline-offset-2 transition-colors hover:text-[#879b7b]"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <p className="mt-4 text-center text-sm text-[#6f6f6f]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#6f6f6f] transition-colors hover:text-[#879b7b]"
            >
              Log in
            </Link>
          </p>

          {/* Administrator */}
          {/*
          <p className="mt-4 text-center text-xs text-[#999]">
            Administrator?{" "}
            <a
              href="/admin/login"
              className="text-[#6f6f6f] hover:text-[#879b7b]"
            >
              Click here
            </a>
          </p>
          */}
        </div>
      </div>
    </main>
  );
}
