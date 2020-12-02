import React from 'react';
import AddPic from '../page3/addPic'
import '../Css/page3.css'
// import { Link } from 'react-router-dom'
export default function Page3() {
    return (
        <div className="main">
            <h1 className="title">
                Open Shop 3
           </h1>

            <div className="main-container">
                <h3 className="smallTitle">
                    Optional Details
                </h3>
                <div className="addShop">
                    <div id="addShopImg">
                        {/* <a href='addShopImg' className="allAdd" type="image">
                            +Add Shop Images
                        </a> */}
                        <AddPic/>
                    </div>
                </div>
                <div className="addShop">
                    <div id="addShopV">
                        <a href='addShopVideo' className="allAdd" type="redio">
                            +Add Shop Videos
                        </a>
                    </div>
                </div>
                <div className="addShop">
                    <div id="addShopBus">
                        <a href='addShopBusiness' className="allAdd" type="text">
                            +Add shop Business certificates and official documents
                        </a>
                    </div>
                </div>
                <br />
                <br />

            </div>
            <div className="buttonState">
                <div  >
                    <button id="buttonOpen" type="button" class="btn btn-outline-primary">Open Shop</button>
                </div>          
                <div className="bbb">
                    <button id="buttonSave" type="submit" class="btn btn-outline-secondary">Save</button>
                    <button id="buttonCancal" type="button" class="btn btn-outline-secondary">Cancal</button>
                </div>
            </div>
        </div>
    )
};