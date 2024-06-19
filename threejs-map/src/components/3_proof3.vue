<template>
    <div class="development-algorithm-content">
      <h3>Development and Algorithm</h3>
      <p>
        For the development of the prototype, widely used frameworks were chosen to create a simple and effective prototype. Next.js was chosen as the foundational framework for building the web application. It is a React-based framework known for its efficiency, flexibility, and capability to optimise developer productivity. Next.js was deemed suitable for this project as it enables the development of scalable and reliable applications, which was essential for creating a simple yet functional prototype (Vercel, 2023).
      </p>
      <p>
        For the visualisation aspects of the prototype, D3.js was integrated. D3.js is a widely-used JavaScript library that allows for the creation of dynamic and interactive data visualisations using HTML, SVG and CSS. The integration of D3.js was important for bringing data to life through visually simple and interactive elements (Bostock & Observable, 2023).
      </p>
      <p><strong>Figure</strong></p>
      <p><em>Example visualisation created with D3.js</em></p>
      <img src="../assets/proof2.png" alt="Example visualisation created with D3.js" />
      <p>
        The prototype also leveraged the OpenAI Application Programming Interface (API), utilising the gpt-3.5-turbo model for its natural language processing needs. An API is a set of tools and protocols that allows different software applications to communicate with each other, enabling the integration of specific features or functionalities. This model is recognised for its advanced capabilities in understanding and generating human-like text, providing the prototype with robust language processing functionalities.
      </p>
      <img src="../assets/proof3.png" alt="Example visualisation created with D3.js" />
      <p>
        The prototype is structured around a central parent page, which encompasses three distinct components, each serving different stages of user interaction.
      </p>
      <p><strong>Figure</strong></p>
      <p><em>Simplified entity relationship diagram of the prototype</em></p>
      <img src="../assets/proof4.png" alt="Simplified entity relationship diagram of the prototype" />
      <h4>Index Component</h4>
      <p>
        This component is the starting point of the user's journey. It displays the title, a textbox for user input, and an analyse button. Upon user interaction, this component sends an API request to OpenAI and receives the response, with the acquired information stored in the parent page, making it accessible to all other components.
      </p>
      <p>
        The prompt is structured to request several analyses on the given text and expects the results in JSON format. The analyses include generating a title, analysing sentiment, identifying named entities, discerning the relevant topics, and generating a list of keywords or tags representing the main concepts or themes of the text. Here is a simplified representation of the prompt:
      </p>
      <blockquote>
        <p>Given the following text, please perform the following analyses and return the results in JSON format:</p>
        <ul>
          <li>Generate a title for the text.</li>
          <li>Analyse the sentiment of the text.</li>
          <li>Identify the named entities present in the text.</li>
          <li>Identify the topics present in the text.</li>
          <li>Generate a list of keywords or tags.</li>
        </ul>
        <p>Text: [Input Text]</p>
      </blockquote>
      <h4>Filter Component</h4>
      <p>
        This component offers users the ability to refine the visualisations by providing multiple select dropdown filters. Users can navigate through visualisations based on named entities, topics, and keywords, utilising the information provided by the index component to offer a cohesive experience.
      </p>
      <h4>Visualisation Component</h4>
      <p>
        This component is tasked with rendering the visual representations of the received data. It utilises the information from the index component, applies the user-defined filters from the filter component, and creates visual connections based on user preferences and inputs.
      </p>
      <p>
        Once the data is retrieved, the next step is to create links between the different pieces of information based on common attributes. The process involves iterating over each piece of data and comparing it with every other piece. It is quiet rudimentary but very effective with small amounts of data. Here’s a simplification of the process:
      </p>
      <blockquote>
        <p>For each piece of source data:</p>
        <ul>
          <li>For each piece of target data:</li>
          <ul>
            <li>If common attributes are found between source and target:</li>
            <ul>
              <li>Create a link between source and target.</li>
            </ul>
          </ul>
        </ul>
      </blockquote>
      <p>
        This approach ensures that all possible connections based on common attributes are identified and linked, forming the basis for the visualisation component of the prototype.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DevelopmentAndAlgorithm',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  