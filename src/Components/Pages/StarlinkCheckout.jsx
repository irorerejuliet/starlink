import React, { useState } from "react";

export default function StarlinkCheckout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (form.name && form.address && form.email) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-gray-900 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Starlink Checkout
        </h1>

        {submitted ? (
          <div className="text-center text-green-400">
            <h2 className="text-xl font-semibold mb-4">✅ Order Placed!</h2>
            <p>Thank you, {form.name}! Your Starlink Kit is on the way.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded outline-none"
              />
              <input
                name="address"
                placeholder="Shipping Address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded outline-none"
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded outline-none"
              />
            </div>

            <div className="bg-gray-800 p-6 rounded space-y-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="border-t border-gray-700 pt-4">
                <p>
                  🚀 <span className="font-medium">Starlink Kit</span>
                </p>
                <p className="text-2xl font-bold mt-2">$599</p>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
              >
                Place Order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
