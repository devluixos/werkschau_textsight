<template>
    <div class="intro-research-content">
      <h1>Introduction</h1>
      <h2>Research Gap and Research Question</h2>
      <p>
        Data visualisation serves as a bridge between the complexities of raw data and human
        comprehension. By converting intricate data into visual formats, we enhance our ability to
        interpret and derive insights from it. Visual representations, such as charts, graphs, and infographics,
        allow us to see patterns, trends, and anomalies that might be difficult to discern in
        textual or tabular formats (Tufte, 2007). On the other hand, artificial intelligence serves as a
        reference for data analysis. With its advanced algorithms and machine learning capabilities, AI can
        sift through massive datasets, identifying patterns and relationships that might elude human
        analysts (OpenAI, 2023). While both visualisation and AI individually offer immense value, their
        combined potential in the field of data interpretation remains relatively uncharted. There is an
        emerging synergy between AI's analytical prowess and the intuitive clarity of visual data
        representation, but this intersection has yet to be fully explored and optimised (Isenberg et al.,
        2011).
      </p>
      <p>
        To gain a better perspective about this issue, the current and desired situation has been analysed:
      </p>
      <p>
        <span class="bold">Current situation:</span> Despite the advancements in data visualisation techniques, users still struggle
        with understanding and drawing meaningful connections from the broad expanse of textual data.
      </p>
      <p>
        <span class="bold">Desired situation:</span> Users can effortlessly navigate and comprehend textual data, gleaning insights
        from AI-powered visualisations that display connections, patterns, and deeper meanings.
      </p>
      <p>
        Bridging this gap necessitates a deeper exploration, leading to the central research question:
      </p>
      <p class="research-question">
        <span class="bold">How can the visualisation of connections between bits of information be enhanced in a meaningful
        way using artificial intelligence?</span>
      </p>
      <p>
        Addressing this question has the potential to reshape our relationship with data. To
        comprehensively tackle this, the following sub-questions are posed:
      </p>
      <ul>
        <li>I) How can the design of AI-driven visualisations be optimised to effectively represent connections
        within textual data?</li>
        <li>II) What are the functional elements and design principles that enhance interpretability from
        complex visualisations?</li>
      </ul>
      <p>
        The following sections will examine data visualisation's current state, discover AI's
        transformational potential, and investigate these pressing questions.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IntroResearch',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  
  .intro-research-content .bold {
    font-weight: bold;
  }
  
  .intro-research-content .research-question {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.1em;
  }
  </style>
  