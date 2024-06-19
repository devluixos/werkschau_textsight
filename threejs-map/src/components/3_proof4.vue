<template>
    <div class="prototype-findings-content">
      <h3>Prototype: Findings</h3>
      <p>
        Participants with varying levels of technical proficiency and backgrounds interacted with the prototype and shared their experiences, thoughts, and suggestions. Summaries of the interviews are in the appendix C). The feedback received was varied, ranging from participants who valued the prototype's simplicity and effectiveness to those who envisioned a multitude of enhancements and additional features. This diversity of viewpoints was invaluable in shedding light on the various areas that require attention and improvement, as well as opening up possibilities for expanding the prototype's capabilities in future iterations.
      </p>
      <p><strong>Figure</strong></p>
      <p><em>User journey from participant 1</em></p>
      <img src="../assets/proof5.png" alt="User journey from participant 1" />
      <p>
        Participant 1, who has a strong technological background, immersed himself in the prototype, exploring its functionalities and providing critical insights into its operation. This participant appreciated the prototype's simplicity and found the visualisation method useful for understanding the connections between different texts.
      </p>
      <p><strong>Interaction and Usability:</strong> Participant 1 navigated through the prototype with ease, understanding the 'one node per text' visualisation intuitively. However, they expressed a desire for enhanced colour coding and more sophisticated visual elements to distinguish between nodes effectively. The simplicity of the circles used to represent nodes was appreciated, but the participant saw potential for more intricate and informative visual representations.</p>
      <p><strong>Value and Potential Use Cases:</strong> The participant recognised the potential of the prototype in academic research, where extracting and visualising connections between different pieces of text is crucial. They thought the prototype could be a useful tool for researchers to quickly identify patterns and relationships in large amounts of text.</p>
      <p><strong>Suggestions and Improvements:</strong> Participant 1 suggested the incorporation of more advanced visual elements and colour coding to represent different types of connections and nodes. They also expressed a desire to see more visualisation strategies implemented, allowing users to select the one that best suits their preferences and needs.</p>
      
      <p>
        Participant 2 interacted with the prototype with interest but reservations about its practical applications. They thought the prototype was too simple, with the circles representing the nodes.
      </p>
      <p><strong>Figure</strong></p>
      <p><em>User journey from participant 2</em></p>
      <img src="../assets/proof6.png" alt="User journey from participant 2" />
      <p><strong>Interaction and Usability:</strong> While the participant was able to interact with the prototype, they did not initially grasp its potential and use cases. They found the prototype's functionalities to be simple but were unsure how they could be applied effectively in real-world scenarios.</p>
      <p><strong>Value and Potential Use Cases:</strong> The participant was somewhat sceptical about the practical applications of the prototype. They recognised its basic nature but struggled to envision how, in its current state, it could be used in more complex and varied contexts.</p>
      <p><strong>Suggestions and Improvements:</strong> Participant 2 suggested that the prototype could benefit from more elaborate visual elements and functionalities to enhance its appeal and utility. They expressed a desire for more advanced features that could potentially broaden the prototype's applicability to a broader range of use cases.</p>
      
      <p>
        Participant 3 became increasingly interested in the prototype's possibilities as they interacted with it more. They were particularly interested in the potential for various visualisations, such as a planet system or a developing forest.
      </p>
      <p><strong>Figure</strong></p>
      <p><em>User journey from participant 3</em></p>
      <img src="../assets/proof7.png" alt="User journey from participant 3" />
      <p><strong>Interaction and Usability:</strong> The participant experienced some initial confusion but found the information on the connections useful once they familiarised themselves with the prototype. They were particularly interested in experimenting with various visualisation possibilities and discussed a variety of novel data representation ideas.</p>
      <p><strong>Value and Potential Use Cases:</strong> Participant 3 saw immense potential in the prototype for creating engaging and informative visual representations of data. They believed that by incorporating various visualisation strategies, the prototype could cater to a wide range of preferences and needs, making it a versatile tool for a variety of applications.</p>
      <p><strong>Suggestions and Improvements:</strong> They suggested the implementation of more visualisation options, enhanced navigation, and advanced filtering features, including full-text search and sentiment or person analysis. They also expressed a desire for generated inputs that were relevant to the current topic and discussed the possibility of more interactive and dynamic visual elements. So the prototype can be used for different purposes, like visualising novels during the writing process or as an interactive diary.</p>
      
      <h3>Critical Evaluation</h3>
      <p>
        The prototype’s simplicity received mixed reviews. While its clear and straightforward design was appreciated, there were calls for more complexity and detail, highlighting a need for balance to meet diverse user preferences.
      </p>
      <p><strong>Figure</strong></p>
      <p><em>Overall sentiment of the prototype</em></p>
      <img src="../assets/proof8.png" alt="Overall sentiment of the prototype" />
      <p>
        A common thread in the feedback was the call for enhanced and diverse visual elements. This shared sentiment underscores the role of aesthetic and functional appeal in sustaining user interest and satisfaction. The current state of the prototype falls short of providing the visual richness that the participants desire. This shortfall signals a need to explore and incorporate a wider array of visualisation strategies and representation methods. By doing so, the prototype can offer a richer, more engaging user experience, aiding users in interpreting and interacting with the information presented.
      </p>
      <p>
        While some participants found the interaction with the prototype to be smooth, it also revealed inherent issues with intuitive usage and navigation. This fact highlights the urgent need for refinements in the user interface and overall user experience. The struggles faced by the participants in navigating and interacting with the prototype point towards a requirement for a design that is more intuitive and user-friendly. The introduction of enhanced navigation features and advanced filtering options can allow users to customise their interactions with the prototype, aligning it more closely with their individual needs and preferences.
      </p>
      <p>
        The participant's numerous suggestions and improvements serve as a road map for the prototype's evolution. The suggestions emphasise the incorporation of more interactive and dynamic elements like:
      </p>
      <ul>
        <li>advanced filtering features</li>
        <li>full-text search</li>
        <li>sentiment analysis</li>
        <li>person and location filter</li>
      </ul>
      <h3>Critical Evaluation</h3>
      <p><strong>Figure</strong></p>
      <p><em>Overall sentiment of the prototype</em></p>
      <img src="../assets/proof7.png" alt="Overall sentiment of the prototype" />
      <p>
        These improvements are not only beneficial but transformational, promising to increase the prototype's utility and versatility across a variety of contexts and user needs.
      </p>
      <p>
        The prototype's programming and algorithm were aimed at being simple. It essentially relies on a prompt to generate data, which is then iterated through to create connections. This approach, while effective for the prototype's current scale and scope, is not a sophisticated algorithm and lacks scalability for larger datasets.
      </p>
      <p>
        Furthermore, the prototype faces difficulties when dealing with entities and topics that are similar but not identical. The current approach lacks a functionality to compare and merge such entities and topics, potentially resulting in inaccuracies and redundancies in the generated connections. Implementing a more sophisticated comparison and merging mechanism is critical for improving the accuracy and reliability of the prototype's analyses.
      </p>
      <p>
        While useful in showing data in a straightforward and interactive manner, the visualisations made using D3.js are fairly basic. The prototype would benefit from exploring more advanced and sophisticated visualisation techniques and tools to represent the data more accurately and informatively.
      </p>
      <p>
        To summarise, while the prototype serves its purpose in its current state, it requires significant improvements in its algorithmic approach, data handling, and visualisation techniques to be scalable, accurate, and informative. Addressing these issues is critical for the prototype's evolution and ability to handle more complex and varied use cases effectively. The ability to balance simplicity and sophistication will be crucial in developing a tool that is both user-friendly and powerful in its analytical capabilities.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrototypeFindings',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  