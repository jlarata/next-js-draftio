import { Revenue, Game, Tournament } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

/* export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
}; */

export const generateYAxis = (games: Game[], tournaments: Tournament[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  
  const months = [
    {month:'Jan', games:0},
    {month:'Feb', games:0},
    {month:'Mar', games:0},
    {month:'Apr', games:0},
    {month:'May', games:0},
    {month:'Jun', games:0},
    {month:'Jul', games:0},
    {month:'Aug', games:0},
    {month:'Sep', games:0},
    {month:'Oct', games:0},
    {month:'Nov', games:0},
    {month:'Dec', games:0},
  ];
  
  //const ayuda = console.log(tournaments[0].id);
  //const ayuda2 = console.log(games[0].tournamentid == tournaments[0].id);

  //const ayuda2 = console.log(games);

  const populateMonths = games.forEach(game => { 
    tournaments.forEach(tournament => {
      if (tournament.id == game.tournamentid) {
        months[tournament.date.getMonth()].games ++; }
      }
      
)});

  const highestRecord = Math.max(...months.map(month => month.games));
  const topLabel = Math.ceil(highestRecord / 1000) * 500;
  //deberia ser *1000 probablemente, lo pongo en 500 para q se vea mejor ahora

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel, months };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
