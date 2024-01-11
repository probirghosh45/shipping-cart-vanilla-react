// function App() {
//   return (
//     <>
//       <div>
//         <p>Hello world</p>
//       </div>
//     </>
//   );
// }



// export default App;

// function Profile() {
//   return (
//     <img
//       src="https://i.ibb.co/V9HKXtf/react-testing-library.png"
//       alt="Katherine Johnson"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }



import Gallery, { Profile as Card } from "./Gallery";
export default function App() {
  return (
    <>
      {/* <Profile /> */}
      <Card/>   
      <Gallery />
    </>
  );
}
