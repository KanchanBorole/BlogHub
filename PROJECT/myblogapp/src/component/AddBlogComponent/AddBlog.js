import { useState, useEffect } from "react";
import axios from "axios";

function AddBlog() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [bloggername, setBloggername] = useState("");  

    useEffect(() => {
        const bloggername = localStorage.getItem("name");  
        setBloggername(bloggername);
        axios.get("http://localhost:3001/blogger/fetch?name=" + bloggername)
             .then(res => {
             })
             .catch(err => {
                 console.error("Fetch error", err);
             });
    }, []);

    const categories = [
        "Health-Care",
        "Travel",
        "Education",
        "Self-Help",
        "Food",
        "Fashion",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !category || !content || !image) {
            setMessage("Please fill all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("content", content);
        formData.append("image", image);
        formData.append("bloggername", bloggername);

        try {
    const res = await axios.post("http://localhost:3001/blog/save", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    console.log("Sending name:", bloggername);
    console.log("Response:", res.data);

    if (res.data.success) {
        setMessage(res.data.message);
        setTitle("");
        setCategory("");
        setContent("");
        setImage(null);
    } else {
        setMessage("Blog saved but response was not successful.");
    }

} catch (err) {
    console.error("Axios Error:", err.response?.data || err.message);
    setMessage("Failed to post blog.");
}
    };

    return (
        <div className="container mt-5">
            <h2>Add New Blog</h2>
            <p style={{ color: "green" }}>{message}</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group mb-3">
                    <label>Title:</label>
                    <input type="text" className="form-control"
                        value={title} onChange={e => setTitle(e.target.value)} required />
                </div>

                <div className="form-group mb-3">
                    <label>Category:</label>
                    <select className="form-control"
                        value={category} onChange={e => setCategory(e.target.value)} required>
                        <option value="">Select category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label>Content:</label>
                    <textarea className="form-control" rows="5"
                        value={content} onChange={e => setContent(e.target.value)} required />
                </div>

                <div className="form-group mb-3">
                    <label>Upload Image:</label>
                    <input type="file" className="form-control"
                        onChange={e => setImage(e.target.files[0])} accept="image/*" required />
                </div>
                
                <button type="submit" className="btn btn-primary">Post Blog</button>
            </form>
        </div>
    );
}

export default AddBlog;