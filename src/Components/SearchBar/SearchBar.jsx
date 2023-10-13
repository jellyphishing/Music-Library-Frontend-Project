import "./SearchBar.css";

const SearchBar = ({onSearch}) => {




const handleSearch = asyn (e)=> {
    e.preventDefault();
    // const formData = {}
}

try {
    const response = await axios.get("https://localhost:7197/api/Songs", formData);
    if (response.status === 201) {
    onSearch()}
    }
    catch (error) {
        console.warn("Error, cannot find this in our music library", error);
    }
};


    return (  );
}
 
export default SearchBar;
