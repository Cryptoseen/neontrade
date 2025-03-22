<script>
  export let currentPage;
  // Sayfa değiştirme fonksiyonu
  function setPage(page) {
    currentPage = page;
  }
</script>

<div class="w-64 bg-white dark:bg-gray-800 h-full p-4">
  <div class="mb-8 flex items-center gap-2">
    <svg class="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" 
         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
    </svg>
    <h1 class="text-xl font-bold dark:text-white">NeonTrade</h1>
  </div>
  
  <nav class="space-y-2">
    <button on:click={() => setPage('dashboard')}
            class="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 {currentPage==='dashboard' ? 'bg-indigo-100' : ''}">
      Dashboard
    </button>
    <button on:click={() => setPage('trades')}
            class="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 {currentPage==='trades' ? 'bg-indigo-100' : ''}">
      Tüm İşlemler
    </button>
  </nav>
</div>
