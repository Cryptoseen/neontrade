<script>
  import Dashboard from './components/Dashboard.svelte';
  import Trades from './components/Trades.svelte';

  let currentPage = "dashboard";
  let isDark = false;

  function togglePage() {
    currentPage = currentPage === "dashboard" ? "trades" : "dashboard";
  }

  function toggleDark() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  // Sayfa yüklendiğinde localStorage'dan temayı al
  if (localStorage.getItem("theme") === "dark") {
    isDark = true;
    document.documentElement.classList.add("dark");
  }
</script>

<div class="min-h-screen flex flex-col">
  <header class="flex justify-between items-center p-4 border-b dark:border-gray-700">
    <h1 class="text-2xl font-bold dark:text-white">NeonTrade Journal</h1>
    <div class="flex gap-4">
      <button on:click={togglePage} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        {#if currentPage === "dashboard"}
          İşlemler
        {:else}
          Dashboard
        {/if}
      </button>
      <button on:click={toggleDark} class="p-2 bg-gray-200 dark:bg-gray-700 rounded transition-colors">
        {#if isDark}
          <!-- Gündüz modu simgesi -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
          </svg>
        {:else}
          <!-- Gece modu simgesi -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        {/if}
      </button>
    </div>
  </header>
  
  <main class="flex-1 p-4">
    {#if currentPage === "dashboard"}
      <Dashboard />
    {:else}
      <Trades />
    {/if}
  </main>
  
  <footer class="p-4 text-center text-gray-500">
    © 2025 NeonTrade Journal
  </footer>
</div>
