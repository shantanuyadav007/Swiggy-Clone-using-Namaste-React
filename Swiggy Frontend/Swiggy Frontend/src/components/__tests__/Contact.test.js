import { render , screen} from "@testing-library/react"
import Contact from "../contactus";
import "@testing-library/jest-dom"

test("Should load contact us component",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});
test("Should load  ,Buttoncomponent",()=>{
    render(<Contact/>);

    const button=screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
});