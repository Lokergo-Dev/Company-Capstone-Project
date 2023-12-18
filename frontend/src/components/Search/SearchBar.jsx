import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8090/getJobs")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="p-5 border rounded-md">
      <p className="my-3 text-lg font-semibold">Cari Pekerjaan</p>
      <div className="w-auto bg-white flex flex-row border rounded-md  justify-between p-[10px] min-[360px]:flex-wrap">
        <div className="flex md:divide-x max-[390px]:divide-y min-[360px]:flex-wrap">
          <div className="mr-5 self-center">
            <div className="flex items-center p-2">
              <GoSearch className="mr-1 text-gray-500" />
              <form>
                <input
                  type="text"
                  className="bg-transparent text-gray-500 focus:outline-none lg:w-[300px] min-[360px]:w-[700px]"
                  placeholder="Search Job...."
                  value={input}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
