import { useState } from "react";

export default function StarlinkMockPayment() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    card: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!form.firstName) newErrors.firstName = "Please fill this in";
      if (!form.lastName) newErrors.lastName = "Please fill this in";
      if (!form.phone) newErrors.phone = "Please fill this in";
      if (!form.email) newErrors.email = "Please fill this in";
    } else {
      if (!form.card) newErrors.card = "Please fill this in";
      if (!form.expiry) newErrors.expiry = "Please fill this in";
      if (!form.cvv) newErrors.cvv = "Please fill this in";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-gray-700 p-8 rounded-xl max-w-lg w-full space-y-6 shadow-md"
      >
        <h2 className="text-2xl font-bold">Starlink Order - Step {step}</h2>

        {step === 1 && (
          <>
            {["firstName", "lastName", "phone", "email"].map((field) => (
              <div key={field}>
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={
                    field === "phone"
                      ? "Phone number"
                      : field === "firstName"
                      ? "First name"
                      : field === "lastName"
                      ? "Last name"
                      : field
                  }
                  className="w-full p-2 mt-1 bg-gray-900 border border-gray-700 rounded"
                  value={form[field]}
                  onChange={handleChange}
                />
                {error[field] && (
                  <p className="text-red-500 text-sm">{error[field]}</p>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleNext}
              className="w-full mt-4 p-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Continue to Payment →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {["card", "expiry", "cvv"].map((field) => (
              <div key={field}>
                <input
                  name={field}
                  type="text"
                  placeholder={
                    field === "card"
                      ? "Card Number"
                      : field === "expiry"
                      ? "MM/YY"
                      : "CVV"
                  }
                  className="w-full p-2 mt-1 bg-gray-900 border border-gray-700 rounded"
                  value={form[field]}
                  onChange={handleChange}
                />
                {error[field] && (
                  <p className="text-red-500 text-sm">{error[field]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-green-600 hover:bg-green-700 rounded"
            >
              {status === "processing" ? "Processing..." : "Pay Now"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center mt-4">
                Payment Successful! 🚀
              </p>
            )}
          </>
        )}
      </form>
    </div>
  );
}
