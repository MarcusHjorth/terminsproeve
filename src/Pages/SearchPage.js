import BackButton from "../Components/Header/BackButton";
import SearchComponent from "../Components/Search/SearchComponent";
import Header from "../Templates/Header";


const SearchPage = () => {
    return ( 
        <main className="w-screen h-screen">
            <Header backButton={<BackButton />} text="Search" />
            <SearchComponent />

        </main>
     );
}
 
export default SearchPage;