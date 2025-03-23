import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <Link to="/" className="text-blue-900 hover:text-blue-600">Anasayfa</Link>
                    <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                    <Link to="/kurumsal" className="text-blue-900 hover:text-blue-600">Kurumsal</Link>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
