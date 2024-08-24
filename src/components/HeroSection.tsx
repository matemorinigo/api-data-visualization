import { Link } from "react-router-dom"


const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-10">
            <h1 className="text-4xl text-white  sm:text-6xl lg:text-7xl text-center tracking-wide">
                A Pokedex, but
                <span className="bg-gradient-to-r from-gray-400 to-gray-700 text-transparent bg-clip-text"> from Hogwarts </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Discover the world of Hogwarts like never before. Explore detailed profiles of every character, uncover hidden connections, and dive into the magic that shaped their stories. Your journey through the Wizarding World starts here.
            </p>
            <div className="flex justify-center my-10">
                <Link to={'/characters'}>
                    <button className="bg-gradient-to-r from-gray-400 to-gray-700 py-3 px-4 mx-3 rounded-md">
                        Start your journey
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection