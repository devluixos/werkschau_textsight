<template>
    <div class="proof-of-concept-content">
      <h2>Proof of Concept Prototype: Methodology and Findings</h2>
      <p>
        This chapter delves into the creation and testing of a high-fidelity prototype, which serves as a tangible representation of the conceptual framework established in previous stages of research. This prototype is based on earlier phase's insights and emphasises simplicity and transparency. 
      </p>
      <p>
        Its design aims to reduce user cognitive load by providing a more tangible and interactive experience for users. The goal is to remove the need for users to imagine the connections, allowing them to focus on the presented information and its implications.
      </p>
      <p>
        The prototype is intended to serve as a proof of concept, demonstrating the viability of using AI and a programming framework to extract and visualise information, as well as to establish connections between the analysed bits of information. It follows the implications of simplistic and direct functionalities derived from the paper prototype, striving to maintain simplicity in its operations and interactions. The prototype takes a "one node per text" approach, focusing on representing each text as an individual node. That means the textual information does not get split up into the multiple topics. Rather, the text gets represented as a whole as it was drawn in Figure 18.
      </p>
      <p>
        This prototype is not only a step forward in the research process, but it is also a manifestation of the theoretical and practical implications gathered from the early stages, with the goal of bringing clarity and a more user-centric approach to the system.
      </p>
      <h3>Objectives</h3>
      <p>
        The objectives of this prototype focus on two domains. It aims to address the user interaction aspects and secondly the prototype delves into the technical aspects as well as the development aspects.
      </p>
      <h4>UX Objectives</h4>
      <ul>
        <li><strong>Implement and assess simple filtering method:</strong> Incorporating a simple filtering method that utilises tags, entities, and topics is crucial, and it’s equally important to critically assess its efficiency and user receptivity.</li>
        <li><strong>Evaluate user reception of visualisation method:</strong> Investigating how users perceive and interact with the 'one node per text' visualisation is essential to determine whether additional visualisation strategies are required.</li>
        <li><strong>Determine the impact of simple links:</strong> It is pivotal to ascertain whether the simplicity of links aligns with user needs and expectations, or if enhancements and complexities are necessary for user satisfaction.</li>
        <li><strong>Assess aesthetic simplicity and interaction intuitiveness:</strong> Evaluating whether simplistic aesthetics and basic interactions, such as dragging and clicking, are sufficient and intuitive is vital for ensuring an optimal user experience.</li>
      </ul>
      <h4>Technical Objectives</h4>
      <ul>
        <li><strong>Explore developmental capabilities and constraints:</strong> Delving into the practical and limiting aspects of API and application development is crucial to understand and navigate the inherent developmental challenges and possibilities.</li>
        <li><strong>Gain insight into algorithmic development:</strong> Acquiring hands-on experience and insights into developing the first phase of the analysis algorithm is essential for addressing and overcoming technical challenges.</li>
        <li><strong>Accumulate technical knowledge and insight:</strong> Acquiring in-depth knowledge and understanding of the developmental tools, methodologies, and practices used is fundamental for refining the developmental approach and enhancing overall developmental proficiency.</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProofOfConceptPrototype',
  };
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  