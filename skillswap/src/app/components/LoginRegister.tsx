import { useState } from "react";

export default function LoginRegister() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    title: "",
    description: "",
    contact: "",
  });

  const categories = {
    "": [],
    Languages: ["English", "Spanish", "German", "Italian", "Arabic", "French"],
    Sports: ["Zumba", "Running", "Tennis", "Personal Training", "Pilates"],
    "Art & Music": ["Painting", "Photography", "Singing", "Guitar", "Piano", "Crocheting"],
    Other: ["Dance", "Cooking", "Programming", "Graphic Design"],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset subcategory when category changes
    if (name === "category") {
      setFormData((prev) => ({ ...prev, subcategory: "" }));
    }
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

            {/* Category Dropdown */}
            <div>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white text-lg px-3 py-2 rounded-xl border border-gray-300"
              >
                <option value="">Select a category</option>
                {Object.keys(categories).map(
                  (cat) =>
                    cat && (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    )
                )}
              </select>
            </div>

            {/* Subcategory Dropdown (Only Show When Category is Selected) */}
            {formData.category && categories[formData.category].length > 0 && (
              <div>
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="w-full bg-white text-lg px-3 py-2 rounded-xl border border-gray-300"
                >
                  <option value="">Select a subcategory</option>
                  {categories[formData.category]?.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
