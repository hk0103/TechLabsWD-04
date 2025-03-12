import { useState } from "react";

interface Offer {
  title: string;
  description: string;
}

interface OffersSectionProps {
  category: string;
  offers: Offer[];
}

export default function OffersSection({ category, offers }: OffersSectionProps) {
  const [inputValues, setInputValues] = useState(
    offers.map(() => ({ title: "", description: "" }))
  );

  const handleChange = (index: number, field: "title" | "description", value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index][field] = value;
    setInputValues(updatedValues);
  };

  return (
    <div className="mt-12">
      <h3 className="text-4xl font-light">{category}</h3>
      <div className="mt-4 space-y-6">
        {offers.map((offer, index) => (
          <div key={index} className="bg-gray-300 p-6 rounded-2xl shadow-md">
            {/**/}
            <input
              type="text"
              value={inputValues[index].title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder={offer.title}
              className="bg-white w-full text-lg font-semibold px-4 py-2 rounded-xl focus:outline-none placeholder-gray-500 text-black"
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = offer.title}
            />

            {/**/}
            <textarea
              value={inputValues[index].description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              placeholder={offer.description}
              className="bg-white w-full mt-4 text-lg px-4 py-2 rounded-xl focus:outline-none resize-none placeholder-gray-500 text-black"
              onFocus={(e) => e.target.placeholder = ""}
              onBlur={(e) => e.target.placeholder = offer.description}
            />
          </div>
        ))}
      </div>

      {/*"View all offers" */}
      <div className="mt-8 text-right text-2xl font-light">
        <a href="#" className="hover:underline hover:opacity-80">
          View all offers ----&gt;
        </a>
      </div>
    </div>
  );
}