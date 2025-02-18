// Quetion---> what is counter program in react js----------

// use state managment-------------
import { useState } from "react";

const App=()=>{
const [data , setData]=useState(0);

const mydec=()=>{
  if(data<=0){
    alert("not decremenet")
  }
  else{
    setData(data-1)
  }
}
return(
        <>
        <center>
        <button onClick={()=>{setData(data+1)}}>increment</button>
        <h1>My counter:{data}</h1>
        <button onClick={mydec}>decremnet</button>
        </center>
        </>
)
}
export default  App;















// // use state managment-----2nd type--------
// import { useState } from "react";

// const App=()=>{
// const [color , setData]=useState("red")

// return(
//         <>
//         <h1 style={{color:color}}>My color:{color}</h1>
//         <button onClick={()=>{setData("blue")}}>blue </button>
//         <button onClick={()=>{setData("orange")}}>orange </button>
//         <button onClick={()=>{setData("green")}}>green </button>
//         <button onClick={()=>{setData("yellow")}}>yellow </button>
//         <button onClick={()=>{setData("red")}}>red </button>

        

//         </>
// )
// }
// export default  App;








// // use state managment-----2nd type--------
// import { useState } from "react";

// const App=()=>{
// const [color , setData]=useState("red")

// return(
//         <>
//         <h1>My color:{color}</h1>
//         <button onClick={()=>{setData("blue")}}>Click here</button>
//         <button onClick={()=>{setData("white")}}>Click here</button>

//         </>
// )
// }
// export default  App;










// // use state huk-- state managment----- type 1------
// import { useState } from "react";

// const App=()=>{
// const [data , setData]=useState("bhopal")
//   const myval=()=>{
//     setData("indore")
//   }


// return(
//         <>
//         <h1>city:{data}</h1>
//         <button onClick={myval}>Click here</button>
//         </>
// )
// }
// export default  App;












// // event -------------
// const App=()=>{


//   const handelinput=(e)=>{
//     let name= e.target.name;
//     let value = e.target.value;
//     console.log({[name]:value})
  
//   }

// return(
//         <>
//         <h1>hello</h1>
//         {/* <button >btn</button> */}
//         <input type="text"  name="mycity" value="bhopal" onChange={handelinput}/>
//         </>
// )
// }
// export default  App;



// error--------------
// const App=()=>{

//   function Myname(e){
//     let name=e.target.name;
//     let value=e.target.value;
//     alert(`my name is ${name} ${value}`)

//   }

//     return(
//         <>
//         <h1>welcome</h1>
//         <button name={hello} value={hii} onClick={{Myname}}>button</button>
//         </>
//     )
//   }
//   export default App;
// errrrrr------------
















  // const App=()=>{
  
  //   function Myname(name,e){
  //     alert(`my name is ${name} ${e.type}`)
  
  //   }
  
  //     return(
  //         <>
  //         <h1>welcome</h1>
  //         <button onClick={(e)=>{Myname("raj", e)}}>button</button>
  //         </>
  //     )
  //   }
  //   export default App;
  
  




  // const App=()=>{
  
  //   function Myname(name,surname){
  //     alert(`my name is ${name} ${surname}`)
  
  //   }
  
  //     return(
  //         <>
  //         <h1>welcome</h1>
  //         <button onClick={()=>{Myname("raj","Sahu")}}>button</button>
  //         </>
  //     )
  //   }
  //   export default App;
  
  
  





  // const App=()=>{
  

  //   function Myname(nm){
  //     alert("myname:" + nm)
  
  //   }
  
  //     return(
  //         <>
  //         <h1>welcome</h1>
  //         <button onClick={()=>{Myname("raj")}}>button</button>
  //         </>
  //     )
  //   }
  //   export default App;
  
  
  


  // const App=()=>{


  //   function display(){
  //     alert("hello")
  //   }
  
  //     return(
  //         <>
  //         <h1>welcome</h1>
  //         <button onClick={display}>button</button>
  //         </>
  //     )
  //   }
  //   export default App;
  
  







// // Router--------------------

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout";
// import Home from "./pages/home";
// import About from "./pages/About";
// import Contact from "./pages/contact";
// import NoPage from "./pages1";
// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//           <Route index element={<Home/>}/>
//           <Route path="home" element={<Home />}/>
//           <Route path="about" element={<About />}/>
//           <Route path="contact" element={<Contact />}/>

          
//           <Route path="*" element={<NoPage />}/>

//           </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
//   }
//   export default App;





















// bootstrap------------------------

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import b1 from "./img/a1.jpg";
// import b2 from "./img/a2.jpg";
// import b3 from "./img/a3.jpg";


// import Stack from 'react-bootstrap/Stack';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const App=()=>{
//     return(
//         <>
//         <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>





//     <Carousel>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <img src={b1} style={{width:"100%", height:"300px"}}  alt="" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={b2} style={{width:"100%", height:"300px"}} alt="" />
//       <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={b3} style={{width:"100%", height:"300px"}} alt="" />
//       <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>



// {/* crd--------------------------------- */}

// <div style={{width:"100%", display:"flex"}}>

//     <Card style={{ width: '18rem', display:"flex"}}>
//       <img src={b3} />
//       <Card.Body>
//         <Card.Title>Mobile Shop Cart</Card.Title>
//         <Card.Text>
//             this is a mobile cart
//         </Card.Text>
//         <Button variant="primary">visite mobile </Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <img src={b3} />
//       <Card.Body>
//         <Card.Title>Mobile Shop Cart</Card.Title>
//         <Card.Text>
//             this is a mobile cart
//         </Card.Text>
//         <Button variant="primary">visite mobile </Button>
//       </Card.Body>
//     </Card>
    
// </div>


// <Stack direction="horizontal" gap={3}>
//       <div className="p-2">First item</div>
//       <div className="p-2 ms-auto">Second item</div>
//       <div className="p-2">Third item</div>
//     </Stack>
//         </>
//     )
// }
// export default App;
































// // import img1 from "./img/a1.jpeg;
// // import img2 from "./img/
// import img3 from "./img/download.jpg";


// const App=()=>{
//     return(
//         <>
//         <img src={img1} />
//         <img src={img2} />

//         <img src={img3} />
//         <br />
//         {/* <img src="public/img/download.jpg"  /> */}

//          {/* {App1} */}
//         </>
//     )
// }
// export default App;






// const App=()=>{
//     return(
//         <>
//          <h1 className="s1">hello </h1>
//          <h2 className="s2">hello 2</h2>
//          <h3 className="s3">hello3</h3>
//          {/* {App1} */}
//         </>
//     )
// }
// export default App;









// const MyComponent = () => {
//   const divStyle = {
//     backgroundColor: 'lightblue',
//     padding: '20px',
//     textAlign: 'center',
//     borderRadius: '10px',
//     fontFamily: 'Arial, sans-serif'
//   }

//   return (
//     <>
//     {/* <div style={divStyle}>
//       <h1>hello i'm raj sahu !</h1>
//     </div> */}
//     {/* <div>

//     </div> */}
//     {/* <div style={{border:"2px solid red" , width:"600px", height:"100px", padding:"120px", background:"red"}}>
//     <div style={{border:"2px solid red" , width:"800px", height:"150px", text:"220px", margin:"29px", padding:"120px"}}>   
//     <div style={{border:"2px solid red" , width:"1000px", height:"200px", margin:"20px"}}> 
//     </div>
//     </div>
//     </div> */}
//     </>

//   )
// }
// export default MyComponent;

// ===========================start 16=======================================

// design karna - normaly ----------------

// const App=()=>{
//     return(
//         <>
//         <h1 style={{color:"red" , textDecoration:"underline"}}>welcome to cybrome</h1>

//         </>
//     )
// }
// export default App;

// ===========================start 15=======================================

// -----map karna then design karna  props se key bana kar ----------------------------

// import Empdesign from "./empdesign";
// import Empdata from "./Empdata";

// const ans=Empdata.map((key)=> <Empdesign name={key.name} city={key.city} salary={key.salary} rollno={key.rollno}  />);

// const App=()=>{
//     return(
//         <>
//  <table border="1">
//     <tr>
//         <th>name</th>
//         <th>rollno</th>
//         <th>city</th>
//         <th>salary</th>
//     </tr>
//     {ans}
//  </table>
      
//         </>
//     )
// }
// export default App;
// ---------------design end--------------


// ===========================start 14=======================================
// -----------data ko map karna ---------------------------

// import Stu from "./emp"

// const ans=Stu.map((key)=>{
//     return(
//         <>
//         <tr>
//             <td>{key.name}</td>
//             <td>{key.rollno}</td>
//             <td>{key.city}</td>
//             <td>{key.salary}</td>

//         </tr>
//         </>
//     )
// })

// const App=()=>{
//     return(
//         <>
//  <table border="1">
//     <tr>
//         <th>name</th>
//         <th>rollno</th>
//         <th>city</th>
//         <th>salary</th>
       
       
//     </tr>
//     {ans}
//  </table>
      
//         </>
//     )
// }
// export default App;



// ================================startv 13==========================================================
// app.jsx me hi (API)data bana kar  display karana with of help proops ------- 


// const Stu=[
//     {
//         "name":"raj",
//         "rollno":121,
//         "city":"bhopal"
//     },
//     {
//         "name":"raja",
//         "rollno":121,
//         "city":"indore"
//     },
//     {
//         "name":"abhi",
//         "rollno":121,
//         "city":"mumbai"
//     }
// ]


// const ans=Stu.map((key)=>{
//     return(
//         <>
//         <tr>
//             <td>{key.name}</td>
//             <td>{key.rollno}</td>
//             <td>{key.city}</td>
//         </tr>
//         </>
//     )
// })



// const App=()=>{
//     return(
//         <>
//  <table border="1">
//     <tr>
//         <th>name</th>
//         <th>rollno</th>
//         <th>city</th>
       
//     </tr>
//     {ans}
//  </table>
      
//         </>
//     )
// }
// export default App;




// ==============================start 12===================================
// array ki listing karna- order or unorder list me karna -- ul or ol kar ne se ----------

// const name=["raj","abhi","manju","html","css"];

// const ans= name.map((key)=>{
//     return(
//         <>
//         <li>{key}</li>       
//         </>
//     )    
// })

// const App=()=>{
//     return(
//         <>
 
//         <ol>
//             {ans}
//         </ol>
//         </>
//     )
// }
// export default App;



// ===========================start 11=======================================
// array ki listing karna-    start 11------------

// const name=["raj","abhi","manju"];

// const ans= name.map((key)=>{
//     return(
//         <>
//         <h1> {key}</h1>
       
//         </>
//     )    
// })

// const App=()=>{
//     return(
//         <>
//         {ans}
      
//         </>
//     )
// }
// export default App;


// // ======================================================================================
// // //----start10--object ke andar key de kar call karna------------

// import Coll from "./c";

// const stu={
//  "name":"raj",
//  "roll":5.,
//  "add":"bhopal",
//  "fees":998888
// }

// const App=()=>{
//     return(
//         <>
//         <h2>hello cybrom</h2>
//         <Coll n={stu.name} f={stu.fees} rn={stu.roll} ct={stu.add}/>
//         </>
//     )
// }
// export default App;
// ---------------end 10-------------



// // ======================================================================================
// // //----start9----varible bana ke pass karna ----------

// import College from "./college";

// const name="raj"
// const fees=5346789
// const ad="bhopal"


// const App=()=>{
//     return(
//         <>
//         <h2>hello cybrom</h2>
//         <College cna={name} fs={fees} add={ad}/>
//         </>
//     )
// }
// export default App;

// --------------------end 9-----------------------------


// // ======================================================================================
// // //----start8  props(propertice) (props.name))component ke andar likh dene ke baad call karna------------------ 


// import Student from "./student";

// const App=()=>{
//     return(
//         <>
//         <h1 align="center">welcome</h1>
//         <Student n="raj"  c="bhopal"/>
//         </>
//     )
// }
// export default App;

// // // ------------------end 8----------------------------


// // ======================================================================================
// // // ------------start7  Component ko  import karna------------------ 

// import Header from "./header";
// import Data from "./data";
// import Footer from "./footer";
// const App=()=>{
//     return(
//         <>
//         <Header />
//         <Data />
//         <Footer/>
        
//         </>
//     )
// }
// export default App;

// // // ------------------end 7----------------------------

// // =========================================================================================

// // //----start6--- yadi class banai hai css ke liye to class ke sath Name add karna hoga id to noramal likh ke ho jati hai -------------
// const App=()=>{
//     return(
//     <>

// <h1 className="my">hello frnds </h1>
// {/* class dene ke liye className lena hoga */}
// <h1 id="my">hello frnds </h1>

// </>
// )
// }
// export default App;
// // // ---------------end6---------------
// // =========================================================================================

// // // --start5---- next line ke liye signle tag ko closing tag kar ke hi use kar sakte hai -----------

// const App=()=>{
//     return(
//     <>
//         welcome to <br />bhopal
//         <br />
//         enter name : <input type="text" />
//         <br />
//         enter city : <input type="text" />
//         <br />
//         <br />
//     </>
//     )
// }
// export default App;

// // // ----------------end5---------------------
// // ==============================================================================================
// // // Que---normal tag or fregnment tag me antar---------------------

// // //   --start4---fregnment tag se memory stroe nhi karta ------>
// const App=()=>{
//     return(
//         <>   
//         <h1>hello</h1>
//         <h1>i am </h1>
//         <h1>Raj</h1>
//         </>
//     )
// }
// export default App;
    
// // // -----------------end4--------------------------
// // ======================================================================================

// // // --start3--- variable me ek sath tag le kar element store kar sakte hai kisi variable me----------------------------
// const sub= <ul>
//     <li>css</li>
//     <li>java</li>
// </ul>

// const App=()=>{
//     return(
//         <p>my subject: {sub}</p>
//     )
// }
// export default App;

// // // -------------------end3----------------------
// // ======================================================================================

// // // ---start2--- variable me kuch store kara ke display karna ----------------------------------
// const name="Raj"
// const age=23
// const App=()=>{
//     return(
       
//         <p>welcomento bhopal my name {name } my age {age}</p>
//     )
// }
// export default App;
// // // ------------------------------end2------------------------------------------------------
// // ======================================================================================

// // // -start1----html tag ke andar kuch kese likha hai sigle tag me hi same tag use nhi kar sakte------------------------

// const App=()=>{
//     return(
//         <h1>hello react</h1>
//     )
// }
// export default App;

// // // ------------end1---------------------------
