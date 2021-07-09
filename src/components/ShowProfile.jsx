import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const cursiveFont = {
    fontFamily: 'cursive',
}

const ShowProfile = () => {

    const { paramsUsername } = useParams(); // getting username through URL params 
    const history = useHistory();

    const [userData, setUserData] = useState({  // state var to collect & update user data
        userName: paramsUsername,
        avatarUrl: "",
        userLocation: "",
        userBio: "",
        userTotalRepos: 0,
        userIsHireable: "yes",
        userReposUrl: "",
        userRepos: [],
    });

    // whenever component mounts
    useEffect(() => {

        // IIFE
        (async () => {

            try {

                // requesting GitHub API for data
                const response = await axios.get(`https://api.github.com/users/${userData.userName}`);

                let { data: { avatar_url, location, bio, public_repos, hireable, repos_url } } = response;

                if (hireable === null) hireable = "No";

                // requesting GitHub API for user repositories
                const reposRespone = await axios.get(`${repos_url}`);
                const { data: reposData } = reposRespone;

                // updating state var
                setUserData({
                    ...userData,
                    avatarUrl: avatar_url,
                    userLocation: location,
                    userBio: bio,
                    userTotalRepos: public_repos,
                    userIsHireable: hireable,
                    userReposUrl: repos_url,
                    userRepos: reposData,
                })
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);


    return (

        <div className='relative z-10 shadow-xl px-4  pt-8 pb-8 bg-gray-600 border-gray-400 border-opacity-5 border-t-4 border-l-4  h-1/4 overflow-hidden bg-opacity-40 backdrop-filter backdrop-blur-sm w-11/12 mx-auto rounded-3xl md:px-10 max-w-xl'>

            <div className="grid place-items-center mb-6">
                <img rel="noreferrer" className='rounded-md ring-4 ring-gray-400 w-36 aspect-w-1 aspec-h-1' src={userData.avatarUrl} alt="user profile" />
            </div>

            <h1 className='mb-14 tracking-widest font-semibold text-gray-300 text-2xl text-center overflow-hidden whitespace-nowrap'>Hello <span>{userData.userName}</span></h1>

            {/* max-height box */}
            <div className="max-h-56 mb-14 overflow-y-scroll pr-6">

                {/* more informations */}
                <h3 className='text-gray-300 capitalize tracking-widest text-base mb-3'>more information</h3>

                <div className="p-4 mb-10  grid grid-cols-2 gap-x-6 gap-y-8 grid-rows-2">

                    <div className=" bg-gray-400 p-4 rounded-lg shadow-xl">
                        <div className="mb-4 grid place-items-center">
                            <i className=" text-2xl font-extrabold bi bi-briefcase"></i>
                        </div>
                        <p className='text-base flex flex-col justify-center items-center'><span className='font-semibold text-center'>Hireable:</span> {userData.userIsHireable}</p>
                    </div>

                    <div className="bg-gray-400 p-4 rounded-lg shadow-xl">
                        <div className="mb-4 grid place-items-center">
                            <i className="text-2xl font-extrabold bi bi-book"></i>
                        </div>
                        <p className='text-base flex flex-col justify-center items-center'><span className='font-semibold'>Repositories:</span> <span>{userData.userTotalRepos}</span></p>
                    </div>

                    <div className="bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl">
                        <div className="mb-4 grid place-items-center">
                            <i className="text-2xl font-extrabold bi bi-geo-alt"></i>
                        </div>
                        <p className='text-xs'><span className='font-semibold'>Location: </span><span>{userData.userLocation}</span></p>
                    </div>

                    <div className="bg-gray-400 px-4 rounded-lg col-span-2 p-4 shadow-xl">

                        <div className="mb-4 grid place-items-center">
                            <i className="text-2xl font-extrabold mr-3 bi bi-info-circle"></i>
                        </div>
                        <p className='text-xs'><span className='font-semibold '>Bio:</span> {userData.userBio}</p>
                    </div>

                </div>
                {/* more information finishes */}

                {/* Repositories */}
                <h3 className='text-gray-300 capitalize tracking-widest text-base mb-3'>repositories</h3>

                <ol className="py-6 px-6 w-full">
                    {
                        // mapping repositories
                        userData.userRepos.map(repo => {

                            const { name: repoName, html_url: repoUrl } = repo;

                            return <li
                                key={uuidv4()}  // creating unique list item ID
                                className="flex justify-center items-center bg-gray-100 mb-6 rounded-md py-4 shadow-xs"
                            >
                                <a href={repoUrl} target="_blank" rel="noopener" className="capitalize underline overflow-hidden font-semibold text-sm tracking-widest">{repoName}</a>

                            </li>
                        })
                    }
                </ol>

            </div>
            {/* scroll finish */}

            {/* back button */}
            <button onClick={() => history.goBack()} className='bg-white text-blue-700 hover:bg-blue-300 w-12 h-12 flex justify-center items-center hover:text-black rounded-full'><i className="text-xl bi bi-caret-left-fill"></i></button>
        </div>

    )
}

export default ShowProfile;
