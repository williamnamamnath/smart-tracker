import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler, // Import Filler plugin
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../pages/authentication/globalContext';
import moment from 'moment';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler // Register Filler plugin
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const dateFormat = (date) => moment(date).format('DD/MM/YYYY');

    // Get all unique dates from incomes and expenses
    const allDates = [
        ...incomes.map((inc) => dateFormat(inc.date)),
        ...expenses.map((exp) => dateFormat(exp.date)),
    ];
    const uniqueDates = Array.from(new Set(allDates)).sort(
        (a, b) => moment(a, 'DD/MM/YYYY') - moment(b, 'DD/MM/YYYY')
    );

    // Map amounts to dates for incomes and expenses
    const incomeData = uniqueDates.map((date) => {
        const found = incomes.find((inc) => dateFormat(inc.date) === date);
        return found ? found.amount : 0;
    });

    const expenseData = uniqueDates.map((date) => {
        const found = expenses.find((exp) => dateFormat(exp.date) === date);
        return found ? found.amount : 0;
    });

    const data = {
        labels: uniqueDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: 'green',
                backgroundColor: 'rgba(0,128,0,0.1)',
                tension: 0.2,
                fill: true,
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.1)',
                tension: 0.2,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Income vs Expenses Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount ($)',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}

export default Chart;