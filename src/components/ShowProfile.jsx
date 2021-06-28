import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useLocation, useParams } from "react-router-dom";

const ShowProfile = () => {

    const { paramsUsername } = useParams();
    const history = useHistory();
    const navigationlocation = useLocation();

    const [userData, setUserData] = useState({
        userName: paramsUsername,
        avatarUrl: "",
        userLocation: "",
        userBio: "",
        userTotalRepos: 0,
        userIsHireable: "yes",
        userReposUrl: "",
        userRepos: [],
    });

    useEffect(() => {

        (async () => {

            try {

                const response = await axios.get(`https://api.github.com/users/${userData.userName}`);

                let { data: { avatar_url, location, bio, public_repos, hireable, repos_url } } = response;

                if (hireable === null) hireable = "No";

                const reposRespone = await axios.get(`${repos_url}`);
                const { data: reposData } = reposRespone;

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

        <div className='shadow-xl px-10  pt-8 pb-8 bg-blue-600 rounded'>

            <div className="grid place-items-center mb-6">
                <img className='rounded-full ring-4 ring-blue-300 w-32 aspect-w-1 aspec-h-1' src={userData.avatarUrl} alt="user profile" />
            </div>

            <h1 className='mb-12 font-semibold text-2xl text-center'>Hi {userData.userName} 🎉</h1>

            {/* max-height box */}
            <div className="max-h-56 mb-14 overflow-y-scroll pr-6">

                <h3 className='sticky top-0  px-2 py-1 rounded-md bg-blue-100 capitalize text-base font-semibold mb-3'>more information</h3>
                <div className="bg-blue-300 py-6 pl-6 pr-24 mb-10 rounded-md space-y-2">
                    <p><span className='font-semibold text-base'><i className="mr-3 bi bi-geo-alt"></i>Location:</span> {userData.userLocation}</p>
                    <p><span className='font-semibold text-base'><i className="mr-3 bi bi-info-circle"></i>Bio:</span> {userData.userBio}</p>
                    <p><span className='font-semibold text-base'><i className="mr-3 bi bi-book"></i>Total repositories:</span> {userData.userTotalRepos}</p>
                    <p><span className='font-semibold text-base'><i className="mr-3 bi bi-briefcase"></i>Hireable:</span> {userData.userIsHireable}</p>
                </div>

                <h3 className='sticky top-0  px-2 py-1 rounded-md bg-blue-100 capitalize text-base font-semibold mb-3'>repositories</h3>
                <ol className="list-decimal bg-blue-300 py-6 px-6 rounded-md w-full">
                    {
                        userData.userRepos.map(repo => {

                            const { name: repoName, html_url: repoUrl } = repo;

                            return <li
                                key={uuidv4()}
                                className="flex justify-between items-center  bg-white py-4 px-6 mb-6 rounded-md "
                            >
                                <h4 className="font-semibold text-sm tracking-widest">{repoName}</h4>

                                <a href={repoUrl} className='text-xs bg-blue-600 hover:bg-green-500 text-white ml-24 px-3 py-2 tracking-widest uppercase font-semibold rounded-md' target="_blank" rel="noopener">Show</a>

                            </li>
                        })
                    }
                </ol>
            </div>
            {/* scroll finish */}

            {/* back button */}
            <button onClick={() => history.goBack()} className='capitalize text-xs bg-white text-blue-700 hover:bg-blue-300 py-3 px-4 inline-grid  hover:text-black place-items-center rounded-full'><i className="bi bi-caret-left-fill"></i></button>
        </div>

    )
}

export default ShowProfile;
