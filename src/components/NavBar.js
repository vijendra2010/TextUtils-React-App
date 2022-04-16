import React, {useState} from 'react'

export default function (props) {

    // //useState to handle color and background color while mode switching
    // const [myStyles, setMyStyles] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    

    return (
    <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.about}</a>
                    </li>
                    </ul>
                </div>
                {/* <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                </div> */}
            </div>
        </nav>
    </div>
  )
}
