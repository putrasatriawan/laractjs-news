import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    console.log("props: ", props);
    return (
        <div className="min-h-screen bg-slate-50" data-theme="light">
            <Head title={props.title} />
            {/* dapet data user di console log */}
            <Navbar user={props.auth.user} />
            <div
                className="card w-full lg:w-96 bg-base-100 shadow-xl mx-auto m-3"
                data-theme="cmyk"
            >
                <div className="card-body">
                    <h1 className="p-4 text-2xl">Edit Berita</h1>
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full "
                        //menangkap yang di ketik user
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    {/* onlclik mengirim data ke handlesumbit */}
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
