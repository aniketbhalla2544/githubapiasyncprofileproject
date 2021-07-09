import { useEffect, useState } from 'react';
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

        <div className='relative z-10 shadow-xl px-7 bg-gray-800 rounded-xl mx-auto pb-12 md:pb-24 pt-8 md:pt-14 w-4/5 md:w-auto md:px-28'>

            <div className="grid place-items-center mb-3 md:hidden"> <i className="text-white text-6xl bi bi-github"></i></div>

            <h1 className="whitespace-nowrap text-3xl text-center font-bold tracking-widest capitalize mb-16 md:mb-24 md:lowercase md:text-4xl" style={headingStyle}>github <i className="bi bi-github text-6xl hidden md:inline"></i> profile</h1>

            <div className='flex flex-col'>

                <input type="text" name="" value={name} onChange={handleInput} className="focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-200 shadow mb-10 py-2 px-3 text-center rounded" placeholder="Enter name here" />

                {/* if any value in input field then show profile or denied */}
                <Link to={(isAllowed) ? `/users/${name}` : '/'} className={`${(isAllowed) ? '' : 'cursor-not-allowed'} self-center text-sm max-w-xl overflow-hidden whitespace-nowrap text-center md:text-base uppercase focus:outline-none focus:ring-2 focus:ring-white tracking-wider bg-blue-300 hover:bg-blue-400 px-5 py-3 font-bold rounded-md`}>
                    show profile
                </Link>

            </div>
        </div >
    )
}

export default UsernameInput;