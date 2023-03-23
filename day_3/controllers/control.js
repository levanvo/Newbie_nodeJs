import axios from "axios";

export const getAll = async (req, res) => {
    const {data} = await axios.get(`http://localhost:3001/projects`);
    res.send(`
        <style>
            table{
                width:800px;
                margin:0 auto;
                text-align:center;
            }
            th,tr,td{
                border:1px solid gray;
            }
        </style>
        <div>
            <a href="/add"><button>Add new</button></a>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Handle</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((get, index) => {
                    return `
                        <tr>
                            <td>${index+1}</td>
                            <td>${get.name}</td>
                            <td>${get.quantity}</td>
                            <td>
                                <a href="/remove/${get.id}"><button>Remove</button></a>
                                <a href="/update/${get.id}"><button>Update</button></a>
                            </td>
                        </tr>
                    `
                }).join("")}
            </tbody>
        </table>
    `);
};
export const addPr = async (req, res) => {
    const object = { name: "PR-new",quantity: 3,};
    
    try {
        const { data } = await axios.post("http://localhost:3001/projects", object);
        if (!data) {
            res.json({ message: "Khong co du lieu !" });
        };
        return res.json({ message: "Them thanh cong du lieu: ===>>",data });
    } catch (error) { return res.json({ message: error,});};
};
// Attention
export const removePr = async (req, res) => {
    const id = req.params.id;
    console.log(id + 3);
    try {
        axios.delete("http://localhost:3001/projects/"+ id);
        return res.json({ message: "Xoa thanh cong Product id: "+id });
    } catch (error) {
        return res.json({
            message:error,
        });
    };
};
export const updatePr = async (req, res) => {
    // console.log("Area update building !");
    // res.send(`<h1>Area update building !</h1>`);
    console.log(req.pqrams.id);
    // res.send(/*html*/`
    //     <form class="idForm" action="/">
    //         <input type="text" placeholder="...Name...?" id="name">
    //         <input type="number" placeholder="...Quantity...?" id="quantity">
    //         <button class="">Update</button>
    //     </form>
        
    //     <script>
    //         const id = req.params.id;
    //         const click = document.querySelector(".idForm");
    //         click.addEventListener("submit", () => {
    //             const name = document.querySelector("#name");
    //             const quantity = document.querySelector("#quantity");

    //             const object = {
    //                 name:name.value,
    //             quantity:quantity.value,  
    //             };
    //             try {
    //                 axios.put("http://localhost:3001/projects/" + id, object);
    //                 return res.json({ message: "Cap nhat thanh cong", object });
    //             } catch (error) {
    //                 res.json({ message: error });
    //             };
    //         });
    //     </script>
    // `);
};