// Sample data for charts
const salesData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Sales Pipeline',
        data: [12000, 19000, 3000, 5000],
        backgroundColor: 'rgba(233, 69, 96, 0.6)',
        borderColor: 'rgba(233, 69, 96, 1)',
        borderWidth: 1
    }]
};

const salesGrowthData = {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [{
        label: 'Sales Growth',
        data: [15000, 18000, 22000, 25000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const inventoryData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
        label: 'Inventory Levels',
        data: [300, 500, 200, 400],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const inventoryTurnoverData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Inventory Turnover',
        data: [2.5, 3.0, 2.8, 3.2],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const operationsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Productivity',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const efficiencyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Efficiency',
        data: [75, 70, 85, 90, 80, 85],
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
    }]
};

const financialData = {
    labels: ['Revenue', 'Expenses', 'Profit'],
    datasets: [{
        label: 'Financial Summary',
        data: [300000, 200000, 100000],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const expenseBreakdownData = {
    labels: ['Salaries', 'Rent', 'Utilities', 'Misc'],
    datasets: [{
        label: 'Expense Breakdown',
        data: [120000, 50000, 30000, 20000],
        backgroundColor: [
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

// Create charts
window.addEventListener('load', () => {
    const ctx1 = document.getElementById('salesPipelineChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('salesGrowthChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: salesGrowthData,
        options: {
            responsive: true
        }
    });

    const ctx3 = document.getElementById('inventoryChart').getContext('2d');
    new Chart(ctx3, {
        type: 'doughnut',
        data: inventoryData,
        options: {
            responsive: true
        }
    });

    const ctx4 = document.getElementById('inventoryTurnoverChart').getContext('2d');
    new Chart(ctx4, {
        type: 'bar',
        data: inventoryTurnoverData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx5 = document.getElementById('operationsChart').getContext('2d');
    new Chart(ctx5, {
        type: 'line',
        data: operationsData,
        options: {
            responsive: true
        }
    });

    const ctx6 = document.getElementById('efficiencyChart').getContext('2d');
    new Chart(ctx6, {
        type: 'line',
        data: efficiencyData,
        options: {
            responsive: true
        }
    });

    const ctx7 = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx7, {
        type: 'bar',
        data: financialData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx8 = document.getElementById('expenseBreakdownChart').getContext('2d');
    new Chart(ctx8, {
        type: 'pie',
        data: expenseBreakdownData,
        options: {
            responsive: true
        }
    });
});

// Add hover effects to nav items
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add click animations to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.addEventListener('click', () => {
        section.style.transform = 'scale(0.95)';
        setTimeout(() => {
            section.style.transform = 'scale(1)';
        }, 200);
    });
});
