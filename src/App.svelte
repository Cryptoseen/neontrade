<script>
  import Sidebar from './components/Sidebar.svelte';
  import Dashboard from './components/Dashboard.svelte';
  import Trades from './components/Trades.svelte';
  import Modal from './components/Modal.svelte';

  // Aktif sayfa; "dashboard" veya "trades"
  let currentPage = 'dashboard';
  let showModal = false;

  // Modal açma/kapatma fonksiyonları
  function openModal() {
    showModal = true;
  }
  function closeModal() {
    showModal = false;
  }
</script>

<div class="flex h-full">
  <!-- Sidebar; responsive yapıda gizleme/dönüşüm eklemeleri Tailwind ile yapılabilir -->
  <Sidebar bind:currentPage />

  <!-- Sağ içerik alanı -->
  <div class="flex-1 flex flex-col">
    <!-- Header -->
    <header class="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <h1 class="text-2xl font-bold">
        {#if currentPage === 'dashboard'}
          Dashboard
        {:else if currentPage === 'trades'}
          Tüm İşlemler
        {/if}
      </h1>
      <!-- Hamburger menü (küçük ekranlar için) -->
      <button class="lg:hidden p-2" on:click={() => {
          // Eğer Sidebar’ı mobilde açmak isterseniz buraya toggle fonksiyonu ekleyebilirsiniz.
        }}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>

    <!-- Ana içerik -->
    <main class="p-4 flex-1 overflow-y-auto">
      {#if currentPage === 'dashboard'}
        <Dashboard />
      {:else if currentPage === 'trades'}
        <Trades {openModal} />
      {/if}
    </main>
  </div>
</div>

<!-- Modal: Eğer showModal true ise görünür -->
{#if showModal}
  <Modal {closeModal} />
{/if}
