import dashboard_home from '@/app/assets/images/dashboard_home.png'
import dashboard_explore from '@/app/assets/images/dashboard_explore.png'
import dashboard_rooms from '@/app/assets/images/dashboard_rooms.png'
import dashboard_notification from '@/app/assets/images/dashboard_notification.png'
import dashboard_chats from '@/app/assets/images/dashboard_chats.png'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className='fixed bottom-0 z-50 bg-white w-full py-3 px-3 text-[#282828] text-[12px] flex justify-around offer_div'>
            <button className='w-fit flex flex-col justify-center items-center'>
                <Image src={dashboard_home} alt='dashboard_home' className='h-[1.3rem] w-[1.5rem]'/>
                <p>Home</p>
            </button>
            <button className='w-fit flex flex-col justify-center items-center'>
                <Image src={dashboard_explore} alt='dashboard_explore' className='h-[1.3rem] w-[1.5rem]'/>
                <p>Explore</p>
            </button>
            <button className='w-fit flex flex-col justify-center items-center'>
                <Image src={dashboard_rooms} alt='dashboard_rooms' className='h-[1.3rem] w-[1.5rem]'/>
                <p>Rooms</p>
            </button>
            <button className='w-fit flex flex-col justify-center items-center'>
                <Image src={dashboard_notification} alt='dashboard_notification' className='h-[1.3rem] w-[1.5rem]'/>
                <p>Notification</p>
            </button>
            <button className='w-fit flex flex-col justify-center items-center'>
                <Image src={dashboard_chats} alt='dashboard_chats' className='h-[1.3rem] w-[1.5rem]'/>
                <p>Chats</p>
            </button>
        </footer>
    )
}