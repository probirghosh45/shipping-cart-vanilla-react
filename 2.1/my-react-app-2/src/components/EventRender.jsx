// export function ClickHandler(){
//     alert("Clicked!");
// }

export default function EventRender(){
    // function ClickHandler(){
    //     alert("Clicked!");
    // }
    return (
        // <button onClick={ClickHandler}>Click Me</button>
        <button onClick={function ClickHandler(){
                         alert("Clicked Again!");                  
        }}
        >Click Me Alternatively</button>
    )
}