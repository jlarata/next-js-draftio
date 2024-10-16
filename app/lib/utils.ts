import { Revenue, Game, Tournament } from './definitions';

const MonthsDictionary = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];



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

export const generateLast12Months = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const helpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let currenMonthVariable = currentMonth+1;
    for (let i=11; i>=0; i--) {
      helpArray[i] = currenMonthVariable;
      currenMonthVariable > 1 ?  
        currenMonthVariable-- :
        currenMonthVariable =12;
    }

  let last12Months = helpArray.map((m) => ({month: MonthsDictionary[m-1], games: 0}))
  return last12Months;
}


export const generateYAxis = (games: Game[], tournaments: Tournament[], last12Months: {month: string; games: number}[]) => {
  const yAxisLabels = [];
  //const ayuda = console.log(tournaments[0].id);
  //const ayuda2 = console.log(games[0].tournamentid == tournaments[0].id);
  //const ayuda2 = console.log(games);

  const populateMonths = games.forEach(game => { 
    tournaments.forEach(tournament => {
      if (tournament.id == game.tournamentid) {
        let tostringMonth = MonthsDictionary[tournament.date.getMonth()];
        let indexOfMonth = last12Months.findIndex(x => x.month === tostringMonth);
        last12Months[indexOfMonth].games ++; }
      }
      
)});

  const highestRecord = Math.max(...last12Months.map(month => month.games));
  const topLabel = highestRecord;
  //const topLabel = Math.ceil(highestRecord / 1000) * 1000;
  //console.log(highestRecord);

  for (let i = topLabel; i >= 0; i -= 1) {
    yAxisLabels.push(`${i}`);
  }

  return { yAxisLabels, topLabel};
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
