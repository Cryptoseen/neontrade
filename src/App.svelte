<script>
  import Sidebar from './components/Sidebar.svelte';
  import Dashboard from './components/Dashboard.svelte';
  import Trades from './components/Trades.svelte';
  
  let currentPage = 'dashboard'; // varsayılan sayfa
</script>

<main class="lg:ml-64 p-8 pt-20 lg:pt-8 h-full">
  <Sidebar {currentPage} />
  {#if currentPage === 'dashboard'}
    <Dashboard />
  {:else if currentPage === 'trades'}
    <Trades />
  {/if}
</main>
