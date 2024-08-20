import React, { useState } from "react";
import { Plane, ArrowLeftRight, ChevronDown } from "lucide-react";

const SearchForm = ({ onSearch }) => {
  const [searchType, setsearchType] = useState("roundTripAdult");
  const [baggage, setBaggage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formatDate = (date) => {
      const d = new Date(date);
      return d.toISOString().split(".")[0];
    };

    const searchParams = {
      origin: event.target.from.value,
      destination: event.target.to.value,
      departureDate: formatDate(event.target.departure.value),
      returnDate: formatDate(event.target.return.value),
      passengers: parseInt(event.target.passengers.value),
      class: event.target.class.value,
      nonstop: event.target.nonstop.checked,
      searchType,
      vendorCode: event.target.vendorCode.value,
      baggage: searchType === "roundTripChildAndBaggage" ? baggage : null,
    };

    onSearch(searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 gap-4 mb-4 items-end">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">From</label>
            <div className="relative">
              <Plane
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="from"
                placeholder="From"
                className="w-full pl-10 pr-3 py-2 border border-red-500 rounded-md text-gray-400"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ArrowLeftRight className="text-gray-400" size={24} />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">To</label>
            <div className="relative">
              <Plane
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="to"
                placeholder="To"
                className="w-full pl-10 pr-3 py-2 border border-red-500 rounded-md text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Departure</label>
            <input
              type="date"
              name="departure"
              defaultValue="2024-09-11"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Return</label>
            <input
              type="date"
              name="return"
              defaultValue="2024-09-18"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Passengers</label>
            <div className="relative">
              <select
                name="passengers"
                className="w-full px-3 py-2 border rounded-md appearance-none"
              >
                <option value="1">1 adult</option>
                <option value="2">2 adults</option>
                <option value="3">3 adults</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <div className="relative">
              <select
                name="class"
                className="w-full px-3 py-2 border rounded-md appearance-none"
              >
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Vendor Code
            </label>
            <input
              type="text"
              name="vendorCode"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          {searchType === "roundTripChildAndBaggage" && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Baggage</label>
              <input
                type="text"
                name="baggage"
                value={baggage}
                onChange={(e) => setBaggage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center">
            <input type="checkbox" name="nonstop" className="mr-2 h-5 w-5" />
            <span className="text-sm">Nonstop flights only</span>
          </label>
          <button
            type="submit"
            className="bg-sky-400 text-white px-8 py-2 rounded-md hover:bg-sky-500 text-lg"
          >
            Search flights
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
