import { MapPin, Briefcase } from 'lucide-react';

const SearchOptions = ({ searchType, setSearchType, searchCriteria, setSearchCriteria, handleSearchSubmit, activities }) => {
  const handleActivityChange = (activity) => {
    setSearchCriteria(prev => ({
      ...prev,
      postalCode:''
      ,
      activities: prev.activities?.includes(activity)
        ? prev.activities.filter(p => p !== activity)
        : [...(prev.activities || []), activity]
    }));
  };

  const handleChangePostal = (e)=>{
    const regex =/^\d*$/;
    if(regex.test(e.target.value))
    {return setSearchCriteria({ ...searchCriteria, postalCode: e.target.value,activities: [] })}
  }
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
                onChange={(e) =>handleChangePostal(e) }
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

        {/* Search by Activity */}
        <div
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
            searchType === 'activity' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'
          }`}
          onClick={() => setSearchType('activity')}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Join by Activity</h2>
          </div>
          {searchType === 'activity' && (
            <form onSubmit={handleSearchSubmit} className="mt-4 space-y-4">
            <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
              {activities.map((activity) => (
                <label key={activity} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={searchCriteria.activities?.includes(activity) || false}
                    onChange={() => handleActivityChange(activity)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm">{activity}</span>
                </label>
              ))}
            </div>
            {searchCriteria.activities?.length === 0 && (
              <p className="text-sm text-red-500">Please select at least one activity</p>
            )}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              disabled={!searchCriteria.activities?.length}
            >
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
