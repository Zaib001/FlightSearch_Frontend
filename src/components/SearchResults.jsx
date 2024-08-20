import React from "react";
import { Plane, Clock, MapPin, Package } from "lucide-react";

const SearchResults = ({ results, prices }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {results.map((result, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-300"
        >
          {/* Ticket Header */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={`https://logo.clearbit.com/${result.carrier.toLowerCase()}.com`}
                alt={result.carrier}
                className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
              />
              <div>
                <p className="text-xl font-bold text-gray-800">
                  {result.carrier} Flight {result.flightNumber}
                </p>
                <p className="text-sm text-gray-600">
                  {result.departureAirport} → {result.arrivalAirport}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Plane size={24} className="text-blue-600" />
              <p className="text-lg font-semibold text-blue-600">Economy</p>
            </div>
          </div>

          {/* Flight Details */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="flex items-center space-x-4">
              <Clock size={24} className="text-gray-500" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Departure</p>
                <p className="text-lg font-bold text-gray-800">
                  {result.departureTime}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock size={24} className="text-gray-500" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Arrival</p>
                <p className="text-lg font-bold text-gray-800">
                  {result.arrivalTime}
                </p>
              </div>
            </div>
          </div>

          {/* Route Map */}
          <div className="flex items-center space-x-4 mb-4">
            <MapPin size={24} className="text-gray-500" />
            <p className="text-sm text-gray-600">
              {result.departureAirport} to {result.arrivalAirport}
            </p>
          </div>

          {/* Baggage Information */}
          <div className="flex items-center space-x-4 mb-4">
            <Package size={24} className="text-gray-500" />
            <p className="text-sm text-gray-600">Baggage Included: 30kg</p>
          </div>

          {/* Ticket Footer */}
          <div className="mt-6 border-t border-gray-300 pt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Currency: {prices[index]?.currency || "N/A"}
            </div>
            <div className="text-sm text-gray-500">
              Price: {prices[index]?.totalPrice || "N/A"}
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
