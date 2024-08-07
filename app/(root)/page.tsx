import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {
    const loggedIn = { firstName: 'Jeremy', lastName: 'Mabiala', email:'jnlandu00gmail.com'}
  return (
   <section className='home'>
    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently.'
            />

            <TotalBalanceBox
                accounts = {[]}
                totalBanks ={1}
                totalCurrentBalance ={1250.35}
            />
        </header>
        RECENT TRANSACTIONS

    </div>

    <RightSidebar 
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 123.50 }, { currentBalence: 500.50}]}
      />
   </section>
  )
}

export default Home