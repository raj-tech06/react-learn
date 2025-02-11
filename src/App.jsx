// design karna -----------------

const App=()=>{
    return(
        <>
        <h1 style={{color:"red" , textDecoration:"underline"}}>welcome to cybrome</h1>

        </>
    )
}
export default App;


// --------------------------------------------------

import Empdesign from "./empdesign";
import Empdata from "./Empdata";

const ans=Empdata.map((key)=> <Empdesign name={key.name} city={key.city} salary={key.salary} rollno={key.rollno}  />);

const App=()=>{
    return(
        <>
        <h1 style={{color:"red" , textDecoration:"underline"}}>welcome to cybrome</h1>
 <table border="1">
    <tr>
        <th>name</th>
        <th>rollno</th>
        <th>city</th>
        <th>salary</th>
    </tr>
    {ans}
 </table>
      
        </>
    )
}
export default App;
// ---------------design end--------------




































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





// array ki listing karna-------------

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
