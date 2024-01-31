const spendingsData = {
    labels: ['Food', 'Rent', 'Utilities', 'Entertainment', 'Transportation'],
    data: [3000, 4000, 2000, 500, 6050]
  };
  
  function createSpendingChart() {
    const ctx = document.getElementById('spendingChart').getContext('2d');
  
    const spendingChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: spendingsData.labels,
        datasets: [{
          label: 'January Spendings',
          data: spendingsData.data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ]
        }]
      },
      options: {
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const label = data.labels[tooltipItem.index];
              const value = data.datasets[0].data[tooltipItem.index];
              return `${label}: $${value}`;
            }
          }
        }
      }
    });
  }
  
  createSpendingChart();
  