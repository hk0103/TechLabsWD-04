import { useState } from "react";

export default function LoginRegister() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    title: "",
    description: "",
    contact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mt-32 text-center border-b-2 border-gray-300 pb-8">
      <h2 className="text-5xl font-bold uppercase">ADD OFFER / REGISTER</h2>
      <p className="text-xl mt-6 max-w-3xl mx-auto">
        Fill in the form below to add your offer or register your interest in learning a new skill. 
        Connect with others and start exchanging knowledge today!
      </p>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-3xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-4 rounded-md border border-gray-300 bg-white"
              />
            </div>
            {/* Dropdown */}
            <div>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white text-lg px-3 py-2 rounded-xl border border-gray-300 focus:outline-none placeholder-gray-500"
              >
                <option value="">Dropdown → I want to learn X or I offer Y</option>
                <option value="learn">I want to learn...</option>
                <option value="offer">I offer...</option>
              </select>
            </div>
            {/* Title Input */}
            <div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title of your ad"
                className="w-full p-4 rounded-md border border-gray-300 bg-white"
              />
            </div>
            {/* Offer Text Area */}
            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Text of your offer - introduce yourself etc."
                className="w-full p-4 rounded-md border border-gray-300 bg-white h-32"
              />
            </div>
            {/* Contact Info */}
            <div>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact info"
                className="w-full p-4 rounded-md border border-gray-300 bg-white"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md w-full">
                Submit Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}