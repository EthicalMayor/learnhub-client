import logo from '@/app/assets/images/Learnhub_Logo.png'
import profile_pic from '@/app/assets/images/dashboard_profile_pic.png'
import friend_pic from '@/app/assets/images/friend_pic.png'
import friend1 from '@/app/assets/images/friend1.png'
import friend2 from '@/app/assets/images/friend2.png'
import friend_dot from '@/app/assets/images/friend_dot.png'
import edit_room from '@/app/assets/images/edit_room.png'
import join_room from '@/app/assets/images/join_room.png'
import dashoard_tech_gang from '@/app/assets/images/dashoard_tech_gang.png'
import blue_arrow_right from '@/app/assets/images/blue_arrow_right.png'
import dashboard_ambassador from '@/app/assets/images/dashboard_ambassador.png'
import dashboard_home from '@/app/assets/images/dashboard_home.png'
import dashboard_explore from '@/app/assets/images/dashboard_explore.png'
import dashboard_rooms from '@/app/assets/images/dashboard_rooms.png'
import dashboard_notification from '@/app/assets/images/dashboard_notification.png'
import dashboard_chats from '@/app/assets/images/dashboard_chats.png'
import Image from 'next/image'

export default function Dashboard(){

    return(
        <div>
            <section className='px-3 py-4 mt-5 space-y-6'>
                <header>
                    <div className='flex justify-between w-[55%]'>
                        <div className='w-10 h-10 rounded-full'>
                            <Image src={profile_pic} alt='profile pic' className='w-full h-full'/>
                        </div>
                        <Image src={logo} alt='logo' className='w-10 h-10'/>
                    </div>
                </header>
                <div className="text-black space-y-4">
                    <div className="text-[20px] sf_semibold">Explore Connections</div>

                    <div className="flex gap-x-4 mt-7">
                        <button className="bg-[#F1F1F1] px-4 py-2 rounded-full text-[10px]">Recommended</button>
                        <button className="bg-[#F1F1F1] px-4 py-2 rounded-full text-[10px]">Based on Interests</button>
                    </div>

                    <div className='flex gap-4 overflow-x-scroll scrollbar-hide w-full scroll-smooth '>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num =>(
                            <div key={num} className='w-[11rem] shrink-0 space-y-3 bg-[#F1F1F1] px-3 py-3 rounded-lg'>
                                <div className='flex justify-between'>
                                    <Image src={friend_pic} alt='friend_pic' className='w-10 h-10 rounded-full'/>
                                    <button className="bg-black text-white px-3 py-1 h-fit rounded-full text-[10px]">Connect</button>
                                </div>
                                <div>
                                    <p className='sf_medium'>Ajayi Kunle</p>
                                    <div className='flex gap-2'>
                                        <div className='relative w-[2rem]'>
                                            <Image src={friend1} alt='friend1' className='w-5 h-5 rounded-full'/>
                                            <Image src={friend2} alt='friend1' className='w-5 h-5 rounded-full absolute top-0 right-0'/>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <Image src={friend_dot} alt='friend_dot' className='w-[0.2rem] h-[0.2rem]'/>
                                            <p className='text-[#282828] text-[9px] sf_light opacity-85'>2 mutual connections</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 mt-4 text-[#282828] text-[9px] sf_light opacity-85'>
                                        <p >Medicine</p>
                                        <p >Mobile Design</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    
                    <section>
                        <div className="text-[20px] mt-7 sf_semibold">Campus Rooms</div>
                        
                        <article className='flex justify-between mt-5'>
                            <button className='sf_light flex gap-2 py-2 items-center px-2 border border-solid border-[#323232] rounded-lg'>
                                <Image src={edit_room} alt='edit_room' className='h-[1rem] w-[1rem]'/>
                                <p className='text-[12px] text-[#2F2F2F]'>Create Campus Room</p>
                            </button>

                            <button className='sf_light flex gap-2 py-2 items-center bg-[#292D32] text-white px-2 border border-solid border-black rounded-lg'>
                                <Image src={join_room} alt='edit_room' className='h-[1rem] w-[1rem]'/>
                                <p className='text-[12px]'>Create Campus Room</p>
                            </button>
                        </article>

                        <article className="flex gap-x-4 mt-7">
                            <button className="bg-[#F1F1F1] px-4 py-2 rounded-full text-[10px]">All</button>
                            <button className="bg-[#F1F1F1] px-4 py-2 rounded-full text-[10px]">Suggested</button>
                            <button className="bg-[#F1F1F1] px-4 py-2 rounded-full text-[10px]">Joined</button>
                        </article>

                        <article className='mt-7 flex gap-x-3 overflow-x-scroll scrollbar-hide w-full scroll-smooth'>
                            { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
                            <article className="w-[8rem] shrink-0" key={index}>
                                <Image src={dashoard_tech_gang} alt='dashoard_tech_gang' className='w-[8rem] h-[6rem]'/>

                                <div className='mt-2 flex justify-between items-center'>
                                    <div className='w-[70%]'>
                                        <p className='sf_semibold text-[10px]'>Tech Gang</p>
                                        <p className='text-[9px] text-[#373737]'>Tobi, Emma and 15 others are members</p>
                                    </div>
                                    <button>
                                        <Image src={blue_arrow_right} alt='blue_arrow_right' className='w-[0.4rem]'/>
                                    </button>
                                </div>
                            </article>
                            ))
                            }
                        </article>
                        <article className='mt-3 flex justify-center'>
                            <button className='text-[#002D67] text-[10px]'>More Rooms...</button>
                        </article>
                    </section>

                    <section className='w-[90%] mt-8 py-6 px-2 flex justify-between items-center bg-[#FAFAFA] rounded-2xl offer_div'>
                        <Image src={dashboard_ambassador} alt='dashboard_ambassador' className='w-[5rem] h-[4rem]'/>
                        <article className='text-[9px] w-[50%]'>
                            <p className='text-[#303030]'>Join us, become our ambassador and help us grow in your campus.</p>
                            <button className="bg-[#005ACE] px-4 py-2 rounded-full mt-1 text-white sf_light">Become an Ambassador</button>
                        </article>
                    </section>

                </div>
            </section>

            <footer className='mt-9 w-full py-3 px-3 text-[#282828] text-[12px] flex justify-around offer_div '>
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
        </div>
    )
}