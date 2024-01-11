// import Profile from "./Profile";

// export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }


export function Profile (){
    return (
        <img
          src="https://i.ibb.co/V9HKXtf/react-testing-library.png"
          alt="Katherine Johnson"
        />
      )
}
export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }