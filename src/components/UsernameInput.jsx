import { useState } from 'react';
import { Link } from "react-router-dom";

const headingStyle = {
    fontFamily: "'Work Sans', sans-serif",
    color: 'white',
}

const UsernameInput = () => {

    const [name, setName] = useState("");
    const [isAllowed, setIsAllowed] = useState(false);

    // handling input value change
    const handleInput = e => {

        const { value } = e.target;
        setName(value); //updating input value
        (value !== "") ? setIsAllowed(true) : setIsAllowed(false)
    }

    return (

        <div className='shadow-xl px-28 pt-14 pb-24 bg-blue-600 rounded'>

            <h1 className="text-4xl mb-24 tracking-wider" style={headingStyle}>github <i className="text-6xl bi bi-github"></i> profile</h1>
            <div className='flex flex-col'>

                <input type="text" name="" value={name} onChange={handleInput} className="focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-200 shadow mb-10 py-2 px-3 text-center rounded" placeholder="Enter name here" />

                {/* if any value in input field then show profile or denied */}
                <Link to={(isAllowed) ? `/users/${name}` : '/'} className={`${(isAllowed) ? '' : 'cursor-not-allowed'} max-w-xl overflow-hidden whitespace-nowrap text-center text-base uppercase focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-200 tracking-wider hover:bg-blue-100 bg-white px-5 py-3 font-bold rounded-md`}>
                    show profile
                </Link>

            </div>
        </div >
    )
}

export default UsernameInput;