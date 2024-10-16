import './App.css';
import MainPageComponent from "./main/index";
import {Switch, Route} from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path={"/"}>
                    <MainPageComponent/>
                </Route>
                <Route exact={true} path={"/upload"}>
                    <UploadPage/>
                </Route>
                <Route exact={true} path={"/product"}>
                    <ProductPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
