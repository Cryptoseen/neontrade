<script>
  export let closeModal;
  function submitForm(e) {
    e.preventDefault();
    // Form validasyonu ve işlemleri burada ekleyebilirsiniz.
    closeModal();
  }
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl p-6 shadow-2xl transform transition-all duration-300">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h3 class="text-2xl font-bold dark:text-white">Yeni Trade Kaydı</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">İşlem detaylarını gir</p>
      </div>
      <button on:click={closeModal} class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <form on:submit={submitForm} class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium dark:text-gray-200">Sembol</label>
          <div class="relative">
            <input type="text" placeholder="BTC/USDT" required class="modern-input pl-10"/>
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">#</span>
          </div>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium dark:text-gray-200">Tarih</label>
          <input type="datetime-local" class="modern-input"/>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium dark:text-gray-200">Tip</label>
          <div class="flex gap-2">
            <button type="button" class="type-btn bg-green-500/10 text-green-600">Long ↗</button>
            <button type="button" class="type-btn bg-red-500/10 text-red-600">Short ↘</button>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <button type="submit" class="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Kaydet</button>
        <button type="button" on:click={closeModal} class="px-6 py-3 text-gray-500 hover:text-gray-700">İptal</button>
      </div>
    </form>
  </div>
</div>
