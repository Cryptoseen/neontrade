<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  let chartCanvas;
  let chartInstance;

  onMount(() => {
    chartInstance = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Equity Curve',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: '#3B82F6',
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true },
        }
      }
    });
  });
</script>

<div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <!-- Win Rate Widget -->
    <div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm opacity-75">Win Rate</p>
          <p class="text-3xl font-bold">68.2%</p>
        </div>
        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      <div class="mt-4 text-sm">
        <span class="opacity-75">Geçen aya göre:</span> +12.4%
      </div>
    </div>
    <!-- Diğer widget'lar eklenebilir -->
  </div>

  <!-- Equity Chart -->
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm mb-8">
    <h3 class="font-bold dark:text-white mb-4">Equity Curve</h3>
    <canvas bind:this={chartCanvas} class="w-full h-64"></canvas>
  </div>
</div>
