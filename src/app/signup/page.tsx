"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import signup_banner_new from "@/app/assets/images/signup_banner_new.jpeg";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  // Validation logic
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = "Full name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullname,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors({
          email: data.email?.[0] || "",
          fullname: data.fullname?.[0] || "",
          password: data.password?.[0] || data.message || "Signup failed. Try again.",
        });
        return;
      }

      // extract tokens from response
      const accessToken = data.data?.tokens?.access;
      const refreshToken = data.data?.tokens?.refresh;

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
      }
      if (refreshToken) {
        localStorage.setItem("refresh_token", refreshToken);
      }

      localStorage.setItem("user_id", data.data?.user_id);
      localStorage.setItem("email", data.data?.email);

      // redirect after successful signup
      router.push("/onboarding");
    } catch (err) {
      console.error("Signup error:", err);
      setErrors({ email: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row text-black bg-white">
      {/* Left Section - Image */}
      <div className="hidden md:flex flex-1 relative">
        <Image
          src={signup_banner_new}
          alt="Signup Visual"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Join Learnhub</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
            By continuing, you agree to our User Agreement and acknowledge our Privacy Policy.
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-full max-w-sm py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition"
          aria-label="Continue with Google"
        >
          <Image src="/assets/images/Google_Icon.png" alt="" width={20} height={20} />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6 w-full max-w-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-sm">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium mb-1">
              Full Named
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black focus:outline-none ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your full name"
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 pr-10 border rounded-xl focus:ring-2 focus:ring-black focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 hover:text-black"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-center text-black mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
