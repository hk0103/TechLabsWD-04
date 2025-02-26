"use client";


// body 
// .container {
//     max-width: 800px;
//     margin: 50px auto;
//     padding: 20px;
//     background-color: white;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     display: flex;
//     align-items: center;
//     gap: 20px;
// }
// .form-container {
//     flex: 1;
// }
// h1 {
//     font-size: 3rem;
//     margin-bottom: 20px;
//     color: #555;
// }
// input, select, textarea {
//     width: 100%;
//     padding: 10px;
//     margin: 10px 0;
//     border: 1px solid #ddd;
//     border-radius: 5px;
// }
// textarea {
//     resize: none;
//     height: 100px;
// }
// .image-container img {
//     width: 200px;
//     border-radius: 8px;
// }

// .container {
//     maxWidth: "800px",
//         max-width: 800px;
//         margin: 50px auto;
//         padding: 20px;
//         background-color: white;
//         border-radius: 8px;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         display: flex;
//         align-items: center;
//         gap: 20px;
//     }

export default function LoginPage() {
    return (
        <div className="container" style={{
            
        }}>
            <div className="form-container">
                <h1>Add offer/register here</h1>
                <form>
                    <input type="text" placeholder="Your name" required />
                    <select required>
                        <option value="">{"Dropdown -> I want to learn X or I offer Y"}</option>
                        <option value="learn">I want to learn X</option>
                        <option value="offer">I offer Y</option>
                    </select>
                    <input type="text" placeholder="Title of your add" required />
                    <textarea placeholder="Text of your offer - introduce yourself etc." required></textarea>
                    <input type="text" placeholder="Contact info" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="image-container">
                <img src="D:\tl_project\logo.png" alt="Placeholder Image" />
            </div>
        </div>
    )
}



