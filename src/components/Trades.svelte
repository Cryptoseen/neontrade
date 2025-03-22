<script>
  export let openModal;
  let trades = [
    { date: '2023-03-01', symbol: 'BTC/USD', type: 'Long', result: 'Kazanç' },
    { date: '2023-03-02', symbol: 'ETH/USD', type: 'Short', result: 'Kayıp' },
  ];
</script>

<div>
  <div class="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
    <div class="relative w-full md:max-w-xs">
      <input type="text" placeholder="Sembol, not veya sonuç ara..." class="modern-input pl-10 w-full"/>
      <svg class="w-5 h-5 absolute left-3 top-3 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>
    <div class="flex gap-2 w-full md:w-auto">
      <select class="modern-input">
         <option>Tüm Türler</option>
         <option>Long</option>
         <option>Short</option>
      </select>
      <select class="modern-input">
         <option>Tüm Sonuçlar</option>
         <option>Kazanç</option>
         <option>Kayıp</option>
      </select>
      <button on:click={openModal} class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                 d="M12 4v16m8-8H4"/>
         </svg>
         Yeni İşlem
      </button>
    </div>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
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
</div>
