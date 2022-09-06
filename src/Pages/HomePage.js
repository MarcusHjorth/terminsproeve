import Header from '../Templates/Header';
import PopularClasses from '../Components/Home/PopularClasses';
import ClassesForYou from '../Components/Home/ClassesForYou';

const HomePage = () => {
    return ( 
        <main className="">
            <Header text="Popular classes" />

        {/* ----------- Popular classes ----------- */}
            <PopularClasses />


        {/* ----------- Classes for you ----------- */}
           <ClassesForYou />

            
        </main>
     );
}
 
export default HomePage;