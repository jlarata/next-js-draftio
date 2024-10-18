import { Card } from '../ui/dashboard/cards';
//import RevenueChart from '@/app/ui/dashboard/revenue-chart';
//import WinsChart from './wins-chart';
//import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { inter } from '@/app/ui/fonts';
import GamesChart from '../ui/dashboard/games-chart';
import LatestGames from '../ui/dashboard/latestGames';
import { fetchCardData } from '../lib/data';
 
const {
  numberOfGames,
  numberOfLeagues,
  numberOfPlayers,
  numberOfTournaments
} = await fetchCardData();

export default async function Page() {
  

  return (
    <main>
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        <Card title="Leagues" value={numberOfLeagues} type="leagues" />
        <Card title="Tournaments" value={numberOfTournaments} type="tournaments" />
        <Card title="Total Players" value={numberOfPlayers} type="players" />
        <Card title="Total Games" value={numberOfGames} type="games" />
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <GamesChart />
        {/* <RevenueChart revenue={revenue}  /> */}
        <LatestGames />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}