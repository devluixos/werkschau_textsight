<template>
    <div class="info-modal-content">
      <h1>Visualisation Overview</h1>
      <p>This visualisation reflects the roof above you.</p>
      <p>Click on the elements to open the text behind them.</p>
      <p>This is a visualisation created by TextSight of my theoretical master thesis.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoModal',
  };
  </script>
  
  <style scoped>
  .info-modal-content {
    padding: 20px;
    text-align: center;
  }
  
  .info-modal-content h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #0055ff;
  }
  
  .info-modal-content p {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }
  </style>
  