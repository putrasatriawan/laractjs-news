import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50" data-theme="light">
            <Head title={props.title} />
            {/* dapet data user di console log */}
            <Navbar user={props.auth.user} />
            {/* //maksud lg:flex dll adalah ukuran di atas lg: yang di panggil
                flex lg:flex */}
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
