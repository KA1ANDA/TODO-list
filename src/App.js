import Header from './Components/HeaderUI/Header';
import Input from './Components/InputUI/Input';
import Lists from './Components/ListsUI/Lists';
import Navbar from './Components/NavbarUI/Navbar';
import styles from './app.module.scss';




const App = () =>  {
  
  return (
    <div className={styles.app}>
      <Header />
      <Input />
      <Lists />
      <Navbar />
    </div>
  );
}






export default App;
