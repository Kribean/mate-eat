import { MapPin, Briefcase } from 'lucide-react';

const SearchOptions = ({ searchType, setSearchType, searchCriteria, setSearchCriteria, handleSearchSubmit, professions }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">How would you like to find your table?</h1>
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Search by Location */}
        <div
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
            searchType === 'location' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'
          }`}
          onClick={() => setSearchType('location')}
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Search by Location</h2>
          </div>
          {searchType === 'location' && (
            <form onSubmit={handleSearchSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                value={searchCriteria.postalCode}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, postalCode: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Postal Code"
                required
              />
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Search Restaurants
              </button>
            </form>
          )}
        </div>

        {/* Search by Profession */}
        <div
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
            searchType === 'profession' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'
          }`}
          onClick={() => setSearchType('profession')}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Join by Profession</h2>
          </div>
          {searchType === 'profession' && (
            <form onSubmit={handleSearchSubmit} className="mt-4 space-y-4">
              <select
                value={searchCriteria.profession}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, profession: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select profession</option>
                {professions.map((prof) => (
                  <option key={prof} value={prof}>{prof}</option>
                ))}
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Find Tables
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
