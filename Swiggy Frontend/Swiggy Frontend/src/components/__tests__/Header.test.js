import logo from "../image.png";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore" 
import { BrowserRouter } from "react-router-dom";

it("should load Header Component with login button", ()=>{
     render(
     <BrowserRouter> 
     <Provider store={appStore}>  
     <Header/>
     
     </Provider> 
     </BrowserRouter>  
     );
});