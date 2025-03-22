<script>
  export let currentPage;

  const changePage = (page) => {
    currentPage = page;
  };
</script>

<div class="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-2xl p-4">
  <nav class="space-y-2">
    <button on:click={() => changePage('dashboard')} class="nav-btn">Dashboard</button>
    <button on:click={() => changePage('trades')} class="nav-btn">Tüm İşlemler</button>
  </nav>
</div>
