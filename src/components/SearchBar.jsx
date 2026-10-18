const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 outline-none focus:border-white   "
        type="text"
        placeholder="اسم المدينة"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />

      <button
        className="bg-white/30 backdrop-blur-md text-white font-semibold px-6 py-2 rounded-xl hover:bg-white/40   "
        onClick={onSearch}
      >
        بحث
      </button>
    </div>
  );
};

export default SearchBar;
