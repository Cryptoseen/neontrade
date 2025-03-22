<script>
  let trades = [
    { date: '2023-03-01', symbol: 'BTC/USD', type: 'Long', result: 'Kazanç' },
    { date: '2023-03-02', symbol: 'ETH/USD', type: 'Short', result: 'Kayıp' },
  ];
</script>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr>
        <th>Tarih</th>
        <th>Sembol</th>
        <th>Tip</th>
        <th>Sonuç</th>
      </tr>
    </thead>
    <tbody>
      {#each trades as trade}
        <tr>
          <td>{trade.date}</td>
          <td>{trade.symbol}</td>
          <td>{trade.type}</td>
          <td>{trade.result}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
