import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
class App extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}
export default App;