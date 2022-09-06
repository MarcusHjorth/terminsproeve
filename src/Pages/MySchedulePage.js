import BackButton from "../Components/Header/BackButton";
import Header from "../Templates/Header";

const MySchedulePage = () => {
    return ( 
        <main>
            <Header text={"My Schedule"} backButton={<BackButton />} />
        </main>
     );
}
 
export default MySchedulePage;