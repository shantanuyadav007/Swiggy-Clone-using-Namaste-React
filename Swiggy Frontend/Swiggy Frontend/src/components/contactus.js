const Contact = () => {
    return (
      <div >
        <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us Page</h1>
        <div className=" w-full max-h-xs  flex justify-center items-center mx-auto max-w-2xl text-center"> 
        <form className="bg-green-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <input
            type="text"
            className=" border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="email"
            className=" border border-black p-2 m-2"
            placeholder="Enter your mail"
          />
          <input
          type="textfield"
          className="border border-black p-2 m-2"
          placeholder="message"
           
          /> 
          <button className=" border border-black p-2 m-2 bg-orange-300 hover:bg-orange-600 rounded-lg">
            Submit
          </button>
        </form>
        </div>
      </div>
    );
  };
  export default Contact;