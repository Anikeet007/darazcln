import React from 'react'

function Footer() {
  return (
    <>

      <footer className='sm:flex justify-between container p-4'>
        <div>
          <ul>
            <h1 className='py-4 text-orange-600'>Customer Care</h1>
            <li><a href="/login">Help Center</a></li>
            <li><a href="/login">How to Buy</a></li>
            <li><a href="/login">Returns & Refunds</a></li>
            <li><a href="/login">Contact Us</a></li>

          </ul>

        </div>
        <div>
          <ul>
            <h1 className='py-4 text-orange-600'>Daraz</h1>
            <li><a href="/login">About Daraz</a></li>
            <li><a href="/login">Careers</a></li>
            <li><a href="/login">Daraz Blog</a></li>
            <li><a href="/login">Terms & Conditions</a></li>
            <li><a href="/login">Privacy Policy</a></li>
            <li><a href="/login">Digital Payments</a></li>
            <li><a href="/login">Daraz Customer University</a></li>
            <li><a href="/login">Daraz Affiliate Program</a></li>
            <li><a href="/login">Review & Win</a></li>
            <li><a href="/login">Meet the winners</a></li>
          </ul>
        </div>
        <div>
          <h1 className='py-4 text-orange-600 '>View more on app</h1>
          <p className='text-bold '>Happy Shopping</p>
          <a href="//play.google.com/store/apps/details?spm=a2a0e.tm80335403.footer_top.android.28a3784crtSlI0&amp;id=com.daraz.android&amp;scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321"><img src="https://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/image " className='w-[150px]' alt="" /></a>
        </div>

      </footer>
      <section className='p-3 bg-orange-600'>
        <div className='container text-center'>
          <h3>Develoved @ Aniket</h3>
        </div>
      </section>
    </>
  )
}

export default Footer
