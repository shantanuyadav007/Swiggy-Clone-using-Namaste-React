import React from "react"
class UserClass extends React.Component{
   
    constructor(props) {
        super(props);
    
        this.state = {
          userInfo: {
            name: "Dummy",
            location: "Default",
          },
        };
         
      }
    async componentDidMount() {
        
        // Api call
         
        const data = await fetch("https://github.com/shantanuyadav007");
        const json = await data.json();
    
        this.setState({
          userInfo: json,
        });
    }
    render() {
        console.log(this.props.name + "Child Render");
    
        const { name, location, avatar_url } = this.state.userInfo;
        return (
          <div className="  m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-blue-100 text-center m-4p-4 " >
            <img class="item-center h-48 w-48 ... rounded-full items-center" src={avatar_url} />
            
            <h2 className="font-bold ">Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @shantanuyadav007</h4>
          </div>
        );
    }
}
export default UserClass;
