import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' md:container mx-auto flex justify-between items-center py-5 border-b-2 px-3 lg:px-0'>
            <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;