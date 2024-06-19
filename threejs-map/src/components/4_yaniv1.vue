<template>
    <div class="expert-interview-content">
      <h3>Insights from Expert Interview with Yaniv Steiner</h3>
      <p>
        An interview was conducted with Yaniv Steiner, information architect, designer and developer, to gain deeper insights into the integration of AI and visualisation strategies. 
        This dialogue focused on facets of data analysis, visualisation and interconnectedness, as well as the optimisation of AI and filter algorithms.
      </p>
      <h4>Analysis and Visualisation of Data</h4>
      <p>
        The discussion focused on information extraction from text, with the possibility of going beyond traditional data points such as named entities, topics, and keywords. It was discussed that the system could benefit from identifying and categorising more nuanced and specific subtopics within named entities, such as distinguishing currencies, animals, and other distinct categories. As a result, the system can generate a richer and more detailed set of data points for each text, allowing for the creation of more focused and granular filters and connections.
      </p>
      <p>
        This method not only improves the initial data extraction but also allows for iterative refinement of the information. By comparing and analysing existing data points, the system can continuously improve the accuracy and consistency of the information, merging and refining data to ensure uniformity across the system. This iterative process of data refinement and consolidation is crucial for maintaining the integrity of the information and optimising the user’s interaction with the data.
      </p>
      <h4>Visualisation Strategies</h4>
      <p>
        In the discussion about visualisation strategies, the emphasis was on maintaining clarity and avoiding clutter in the overview of connections. It was agreed that detailed connections should be revealed selectively - either by user click or by applying specific filters. This approach aims to present a comprehensive view of all available information initially, with the ability to refine and focus on specific details as needed, preventing overwhelming visual complexity. This strategy aligns with the principles outlined in Mac Eachren’s cartography cube and Ben Shneiderman’s taxonomy, as referenced in Chapter 2.1, Theory of Visualisation.
      </p>
      <p>
        The conversation also explored the existing ways of representing information, such as the incorporation of various themes in combination with building blocks. For instance, the space theme could represent information through planets, moons, and other celestial bodies, each symbolising different data points or entities. Similarly, the forest theme could use trees of varying colours and shapes, along with smaller flora, to represent closely related information. Another suggestion was to use a city theme, with buildings representing data points and roads illustrating the connections between them.
      </p>
      <p>
        These thematic representations are intended to provide users with a variety of options for interacting with the information in the most intuitive and meaningful way for them. The idea is to provide users with the flexibility to customise their interaction with the data, allowing them to choose themes and customise them to their preferences and needs, which could improve their interaction and comprehension of the data.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpertInterviewContent',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  