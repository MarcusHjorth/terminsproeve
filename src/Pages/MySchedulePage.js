import BackButton from "../Components/Header/BackButton";
import MyScheduleComponent from "../Components/MySchedule/MyScheduleComponent";
import Header from "../Templates/Header";

const MySchedulePage = () => {
    return ( 
        <main>
            <Header text={"My Schedule"} backButton={<BackButton />} />
            <MyScheduleComponent />
        </main>
     );
}
 
export default MySchedulePage;