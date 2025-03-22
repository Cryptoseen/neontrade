<script>
  let trades = [
    { date: '2023-03-01', symbol: 'BTC/USD', type: 'Long', result: 'Kazanç' },
    { date: '2023-03-02', symbol: 'ETH/USD', type: 'Short', result: 'Kayıp' }
  ];
</script>

<div>
  <h2 class="text-xl font-semibold dark:text-white mb-4">Tüm İşlemler</h2>
  <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
    <table class="min-w-full">
      <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th class="px-6 py-3 text-left">Tarih</th>
          <th class="px-6 py-3 text-left">Sembol</th>
          <th class="px-6 py-3 text-left">Tip</th>
          <th class="px-6 py-3 text-left">Sonuç</th>
          <th class="px-6 py-3 text-left">Detay</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        {#each trades as trade}
          <tr>
            <td class="px-6 py-3">{trade.date}</td>
            <td class="px-6 py-3">{trade.symbol}</td>
            <td class="px-6 py-3">{trade.type}</td>
            <td class="px-6 py-3">{trade.result}</td>
            <td class="px-6 py-3">Detay</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
