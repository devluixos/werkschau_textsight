<template>
    <div class="ai-text-analysis-content">
      <h3>AI and Text Analysis</h3>
      <p>
        This chapter will conceptually explore how AI can analyse text and extract significant elements like named entities, keywords, and topics. The exploration also includes how AI can be leveraged to rank the importance of these attributes within a text and how it can aid in building probabilities for words and connections between different texts. It is important to note that the discussions and examples provided in this chapter are highly conceptual and are intended to be explored and tested more rigorously in the practical phases of the thesis.
      </p>
      <h4>Text Analysis</h4>
      <p>
        NLP allows AI to delve deep into texts to identify and extract named entities, keywords, and topics. AI can evaluate the frequency, relevance, and context of these elements using algorithms and models, assigning them a rank based on their importance within the text. For example, a higher frequency of a keyword within a text, combined with its occurrence in critical sections such as headings or subheadings, could result in a higher rank, signalling its importance.
      </p>
      <p>
        The efficiency and speed of the models used to extract significant elements from text vary considerably. Statistical models, such as spaCy, play a pivotal role in this aspect. SpaCy is a free, open-source library for advanced NLP in Python (Explosion, 2023). It is designed specifically for production use, with robustness and speed in processing large amounts of text.
      </p>
      <p>
        SpaCy and other statistical models are known for their speed in analysing and extracting information from texts, making them particularly useful for tasks that require rapid processing and extraction of textual data. Large language models, on the other hand, such as GPT-4, while capable of more in-depth and contextual analysis, tend to be slower due to their complexity and the extensive computations required.
      </p>
      <p>
        To illustrate this difference in speed and efficiency, a simple experiment was conducted. Both systems had to analyse the text from the Chapter Research Gap and Research Question and extract named entities. A more detailed report is in the appendix (H). SpaCy completed the assignment in around 8 seconds, demonstrating its speed. GPT-4, on the other hand, took roughly 56 seconds to complete the same work, showing the trade-off between depth of analysis and processing speed.
      </p>
      <p>
        This impressive difference in processing times emphasises the importance of selecting the appropriate model based on the specific needs and constraints of the task at hand.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AITextAnalysis',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  