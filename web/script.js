// 模拟数据（这里只是示例，无真实数据）
const salesData = [
    { label: '2024年12月', value: 100 },
    { label: '2025年1月', value: 120 },
    { label: '2025年2月', value: 150 },
    { label: '2025年3月', value: 130 },
    { label: '2025年4月', value: 160 },
    { label: '2025年5月', value: 180 },
    { label: '2025年6月', value: 200 },
    { label: '2025年7月', value: 220 },
    { label: '2025年8月', value: 250 },
    { label: '2025年9月', value: 230 },
    { label: '2025年10月', value: 260 },
    { label: '2025年11月', value: 280 },
    { label: '2025年12月', value: 300 }
  ];
  const growthRateData = [
    { label: '2024年12月', value: 0 },
    { label: '2025年1月', value: 0.2 },
    { label: '2025年2月', value: 0.25 },
    { label: '2025年3月', value: -0.133 },
    { label: '2025年4月', value: 0.231 },
    { label: '2025年5月', value: 0.125 },
    { label: '2025年6月', value: 0.111 },
    { label: '2025年7月', value: 0.1 },
    { label: '2025年8月', value: 0.136 },
    { label: '2025年9月', value: -0.08 },
    { label: '2025年10月', value: 0.13 },
    { label: '2025年11月', value: 0.077 },
    { label: '2025年12月', value: 0.071 }
  ];
  
  const userData = [
    { label: '2024年12月', value: 50 },
    { label: '2025年1月', value: 60 },
    { label: '2025年2月', value: 70 },
    { label: '2025年3月', value: 75 },
    { label: '2025年4月', value: 80 },
    { label: '2025年5月', value: 90 },
    { label: '2025年6月', value: 100 },
    { label: '2025年7月', value: 110 },
    { label: '2025年8月', value: 120 },
    { label: '2025年9月', value: 130 },
    { label: '2025年10月', value: 140 },
    { label: '2025年11月', value: 150 },
    { label: '2025年12月', value: 160 }
  ];
  const userGrowthRateData = [
    { label: '2024年12月', value: 0 },
    { label: '2025年1月', value: 0.2 },
    { label: '2025年2月', value: 0.167 },
    { label: '2025年3月', value: 0.071 },
    { label: '2025年4月', value: 0.067 },
    { label: '2025年5月', value: 0.125 },
    { label: '2025年6月', value: 0.111 },
    { label: '2025年7月', value: 0.1 },
    { label: '2025年8月', value: 0.091 },
    { label: '2025年9月', value: 0.083 },
    { label: '2025年10月', value: 0.077 },
    { label: '2025年11月', value: 0.071 },
    { label: '2025年12月', value: 0.067 }
  ];
  
  // 细分人群数据（模拟）
  const ageGroupData1 = {
    '青少年': 30,
    '青壮年': 100,
    '老年': 30
  };
  const ageGroupData2 = {
    '男性': 80,
    '女性': 80
  };
  
  const ctxBar = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: salesData.map(item => item.label),
      datasets: [
        {
          label: '月销售额',
          data: salesData.map(item => item.value),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: '月用户数量',
          data: userData.map(item => item.value),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.label + ': ' + context.parsed.y;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: salesData.map(item => item.label),
      datasets: [
        {
          label: '月销售额增长率',
          data: growthRateData.map(item => item.value * 100),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: '月用户增长率',
          data: userGrowthRateData.map(item => item.value * 100),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          fill: false
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.label + ': ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const ctxPie1 = document.getElementById('pieChart1').getContext('2d');
  const pieChart1 = new Chart(ctxPie1, {
    type: 'pie',
    data: {
      labels: Object.keys(ageGroupData1),
      datasets: [
        {
          label: '用户年龄分布',
          data: Object.values(ageGroupData1),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ': ' + context.parsed;
            }
          }
        }
      }
    }
  });
  
  const ctxPie2 = document.getElementById('pieChart2').getContext('2d');
  const pieChart2 = new Chart(ctxPie2, {
    type: 'pie',
    data: {
      labels: Object.keys(ageGroupData2),
      datasets: [
        {
          label: '用户性别分布',
          data: Object.values(ageGroupData2),
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ': ' + context.parsed;
            }
          }
        }
      }
    }
  });