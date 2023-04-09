import About from "./About"



const Footer = () => {
    return (
        <div>
            <About></About>
            <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
                <div className='py-6 text-sm text-center text-gray-400'>
                    © 2023 nextPage Inc. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
