import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Input from "../Input/Input";
import { ButtonPrimary } from "../Button/Button";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <FiSearch size={18} className="text-(--dim-white-color) absolute left-4 top-1/2 transform -translate-y-1/2 " />

        <div className="flex items-center gap-2">
          <Input
          type="text"
          placeholder="Search resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pl-12"
        />

        <ButtonPrimary className="py-2!" type="submit">Search</ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default Search;
