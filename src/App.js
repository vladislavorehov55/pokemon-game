import './App.css';
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/Footer/Footer";
import bg from './images/bg2.jpg'
const App = () => {
    return (
        <>
            <Header title='This is title' descr='This is Description!'/>
            <Layout id={1} title={'Layout'} descr={'First layout'} urlBg={bg} />
            <Layout id={2} title={'Layout'} descr={'Second layout'} colorBg={'red'}/>
            <Layout id={3} title={'Layout'} descr={'Third layout'} urlBg={bg}/>
            <Footer/>
        </>
    )
};

export default App;
