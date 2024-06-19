<template>
    <div class="prototype-methodology-content">
      <h3>Prototype: Methodology</h3>
      <p>
        This chapter describes the approaches used to evaluate and improve the prototype, with an emphasis on user assessments and technological research. User assessments strive to learn about the usability and effectiveness of visual elements, whereas technical investigations seek to uncover the best development tools and processes.
      </p>
      <p>
        To ensure the prototype meets its intended objectives, a structured user testing methodology is devised. Users are assigned a task to select two topics of interest and find two texts per topic from the internet. This approach allows for a diverse range of data to be entered into the system, enabling a thorough analysis of the prototype’s capabilities. The diagram on the right illustrates the step-by-step process of this methodology.
      </p>
      <img src="../assets/proof1.png" alt="Paper prototype and card sorting setup" />
      <ol>
        <li><strong>Browse for Topic Texts:</strong> Users initiate the process by selecting texts related to two different topics.</li>
        <li><strong>Input Texts:</strong> Users input the selected texts into the system, following the sequence illustrated in the diagram.</li>
        <li><strong>Analyse Visualisation:</strong> After inputting all texts, users analyse the generated visualisation, exploring the connections and interactions within the data.</li>
        <li><strong>Discuss Visualisation:</strong> Users engage in a discussion about their observations, experiences, and any patterns or anomalies identified in the visualisation. This process may lead back to further analysis of the visualisation, ensuring a comprehensive understanding of the data presented.</li>
        <li><strong>Final Discussion:</strong> Concluding the session, a final discussion is held to consolidate the findings and reflections from the user testing.</li>
      </ol>
      <p>
        The development of the prototype follows an explorative approach, focusing on discovering suitable tools, frameworks, and APIs. This approach allows for a comparison of different technologies to identify the most effective solutions for developing visualisations and integrating AI functionalities. The exploration aims to understand the capabilities and limitations of the selected technologies, providing insights into the feasibility and practicality of implementing the envisioned system.
      </p>
      <ol>
        <li><strong>Explorative Development:</strong> The process begins with an exploration of available tools, frameworks, and APIs, assessing their suitability for the project.</li>
        <li><strong>Framework and API Selection:</strong> Based on the exploration, the most suitable framework and API are selected for developing the visualisation and integrating AI functionalities.</li>
        <li><strong>Implementation and Assessment:</strong> The selected technologies are implemented, and their performance, reliability, and efficiency are critically assessed to ensure they meet the project’s requirements.</li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrototypeMethodology',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  