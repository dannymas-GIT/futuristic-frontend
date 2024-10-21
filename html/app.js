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
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            }
        }
    });

    const ctx2 = document.getElementById('inventoryChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: inventoryData,
        options: {
            responsive: true
        }
    });

    const ctx3 = document.getElementById('operationsChart').getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: operationsData,
        options: {
            responsive: true
        }
    });

    const ctx4 = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx4, {
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

async function analyzeVideo(file) {
    const formData = new FormData();
    formData.append('video', file);

    const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    console.log(data);

    // Example: Visualize the number of detected objects
    const ctx = document.getElementById('operationsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Detected Objects',
                data: Object.values(data),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.getElementById('uploadButton').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        analyzeVideo(file);
    }
});
