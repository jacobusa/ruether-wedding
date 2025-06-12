import * as React from "react";

interface UserRSVPDetailsProps {
  rsvpDetails: any;
}

export const UserRSVPDetails: React.FC<UserRSVPDetailsProps> = ({
  rsvpDetails,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 px-4 md:py-10 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Guest Information
        </h1>

        {/* Formatted View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    👤
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Personal Information
                </h2>
              </div>
            </div>
            <div className="p-6">
              <dl className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Name:</dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.firstName} {rsvpDetails?.lastName}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Email:</dt>
                  <dd className="col-span-2 text-gray-800 break-all">
                    {rsvpDetails?.email}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Phone:</dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.phoneNumber}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Plus One Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    👥
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Plus One
                  </h2>
                  <p className="text-sm text-gray-600">
                    Guest is bringing a plus one
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <dl className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Name:</dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.plusOneFirstName}{" "}
                    {rsvpDetails?.plusOneLastName}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Email:</dt>
                  <dd className="col-span-2 text-gray-800 break-all">
                    {rsvpDetails?.plusOneEmail}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Meal:</dt>
                  <dd className="col-span-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      {rsvpDetails?.plusOneMealSelection}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">
                    📍
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Location
                </h2>
              </div>
            </div>
            <div className="p-6">
              <dl className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Street:</dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.street}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">City:</dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.city}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Province:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.province}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Country:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.country}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Postal Code:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.zip}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-sm">
                    📅
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Event Details
                </h2>
              </div>
            </div>
            <div className="p-6">
              <dl className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">Meal:</dt>
                  <dd className="col-span-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {rsvpDetails?.mealSelection}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Dietary Restrictions:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.dietaryRestrictions}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Accessibility:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.accessabilityNeeds.trim() || "None"}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Transport:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.transport}
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="font-medium text-gray-500 text-sm">
                    Accommodation:
                  </dt>
                  <dd className="col-span-2 text-gray-800">
                    {rsvpDetails?.accomodation}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Preferences & Messages */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-semibold text-sm">
                    💬
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Preferences & Messages
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎵</span>
                    <h3 className="font-medium text-gray-800">Song Request</h3>
                  </div>
                  <p className="pl-7 italic text-gray-700 bg-gray-50 p-3 rounded-md">
                    <q>{rsvpDetails?.songRequest}</q>
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🍸</span>
                    <h3 className="font-medium text-gray-800">
                      Cocktail Suggestion
                    </h3>
                  </div>
                  <p className="pl-7 italic text-gray-700 bg-gray-50 p-3 rounded-md">
                    {rsvpDetails?.cocktailSuggestion || "None provided"}
                  </p>
                </div>

                <div className="space-y-3 md:col-span-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💝</span>
                    <h3 className="font-medium text-gray-800">
                      Marriage Advice
                    </h3>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg border border-pink-100">
                    <p className="italic text-gray-700">
                      <q>{rsvpDetails?.marriageAdvice}</q>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
