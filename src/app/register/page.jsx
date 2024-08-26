import React from 'react'

function page() {
    return (
        < >
            <section className='container py-3  md:w-[30%] w-full'>
                <div className=' md:text-center md:items-center '>
                    <div className='flex justify-between p-3'>
                        <div><h1 className='text-orange-600'>Welcome to daraz</h1></div>
                        <div><p className='text-sm'>Already a Member,<a href='/login' className='text-orange-400'>Login Here</a></p> </div>
                    </div>

                    <form action="" className='shadow'>
                        <label htmlFor="" className='text-black my-5'>
                            <h2 className='font-bold py-3'>Phone or Email</h2>

                            <input type="text" name="text" id="" className='border w-[80%] text-sm p-3' placeholder='Enter your number or email' required />
                            <p className='py-3 font-bold '>  Password </p>
                            <input type="password" name="text" id="" className='border w-[80%] text-sm p-3' placeholder='Enter your password' required />
                            <p className='py-3 font-bold'>Enter your date of birth</p>
                            <input type="date" name="date" id="" className='border' required />
                            <div className='py-4 '>
                            <button type="submit" className='bg-orange-600 rounded md:w-[19%] w-[50%] p-2'>Sign Up</button>
                            </div>


                        </label>
                    </form>
                </div>
            </section>
        </ >
    )
}

export default page
