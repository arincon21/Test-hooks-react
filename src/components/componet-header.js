import React from 'react';

function Header() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                       
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search......" />
                            <div className="input-group-append">
                                <button className="btn btn-dark" type="button" >Button </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
	);
}

export default Header;