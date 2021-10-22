import React from "react";
import "./css/AddToCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const faTrashIcon = <FontAwesomeIcon icon={faTrash} />;

export const AddToCart = ({ src, alt, name, soluong, price, link }) => {
    return (
        <React.Fragment>
            <div className="my-add-to-cart">
                <div className="p-2">
                    <img
                        className="img-fluid img-thumbnail"
                        src={src}
                        alt={alt}
                    />
                </div>
                <div className="my-nav-cart-info">
                    <a href={link} className="my-text-one-line">
                        {name}
                    </a>
                    <div className="d-flex flex-row justify-content-around">
                        <div>
                            <div className="d-inline-block">Số lượng:&nbsp;</div>
                            <div className="d-inline-block">{soluong}</div>
                        </div>
                        <div>
                            <div className="d-inline-block">Giá:&nbsp;</div>
                            <div className="d-inline-block">{price}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <div className="pe-4">
                            <button className="my-nav-cart-delete-btn" onClick={() => { }}>
                                {faTrashIcon}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ width: "80%", marginLeft: "10%" }} />
        </React.Fragment>
    );
};
