import logo from '@/app/assets/images/Learnhub_Logo.png'
import profile_pic from '@/app/assets/images/dashboard_profile_pic.png'
import Image from 'next/image'

export default function Header(){
    return(
        <header className='fixed top-0 z-50 bg-white w-full px-3 py-4'>
            <div className='flex justify-between items-center'>
                <Image src={profile_pic} alt='profile pic' className='w-8 h-8 rounded-full'/>
              
                <Image src={logo} alt='logo' className='w-8 h-8'/>

                <button className='bg-[#005ACE] px-2 py-1 rounded-full mt-1 text-white text-[8px]'>Get Premium</button>
            </div>
        </header>
    )
}