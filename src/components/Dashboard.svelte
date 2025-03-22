<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  let canvas;
  let chartInstance;
  
  onMount(() => {
    chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        datasets: [{
          label: 'Equity Curve',
          data: [12, 19, 3, 5, 2, 3, 10, 8, 15, 12, 9, 14],
          borderColor: '#3B82F6',
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  });
</script>

<div>
  <h2 class="text-xl font-semibold dark:text-white mb-4">Son 30 Günün Performansı</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <!-- Win Rate Widget -->
    <div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
      <p class="text-sm opacity-75">Win Rate</p>
      <p class="text-3xl font-bold">68.2%</p>
      <p class="mt-2 text-sm"><span class="opacity-75">Geçen aya göre:</span> +12.4%</p>
    </div>
    <!-- Ort. Risk/Reward Widget -->
    <div class="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl text-white">
      <p class="text-sm opacity-75">Ort. Risk/Reward</p>
      <p class="text-3xl font-bold">1:2.8</p>
    </div>
    <!-- Aylık Net Kâr Widget -->
    <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white">
      <p class="text-sm opacity-75">Aylık Net Kâr</p>
      <p class="text-3xl font-bold">+$2,420</p>
      <p class="mt-2 text-sm"><span class="opacity-75">Geçen aya göre:</span> +12.4%</p>
    </div>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
    <h3 class="font-bold dark:text-white mb-4">Equity Curve</h3>
    <canvas bind:this={canvas} class="w-full h-64"></canvas>
  </div>
</div>
