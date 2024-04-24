import React from "react";

const FAQ = () => {
  return (
    <div class="faq-container">
      <h2 class="poppins-bold">Frequently Asked Questions</h2>
      <div class="faq-question">
        <h4 class="poppins-bold">What is NexusAI?</h4>
        <p class="poppins-regular">
          NexusAI is an image generation tool powered by the Stable Diffusion
          model. It's designed for anyone needing custom visuals, from game
          developers to educators, offering a simple way to create unique images
          with just a prompt. Through a set of pre-defined keywords, users can
          guide the AI to produce precise and tailored images for any project or
          purpose. Be creative, be unique, and let NexusAI bring your vision to
          life!
        </p>
      </div>

      <div class="faq-question">
        <h4 class="poppins-bold">
          What do you mean by keywords? How do they work?
        </h4>
        <p class="poppins-regular">
          In our model, we trained the AI to understand a set of pre-defined
          images labeled with specific keywords. These keywords are used to
          guide the AI in generating images that align with the context and
          style you're aiming for. For example, if you want the AI to generate a
          2D image of a town scene, you can use the keyword '2D-townscene' in
          your prompt. This helps the AI understand the type of image you're
          looking for and produce results that match your requirements. You can
          find a list of available keywords on our platform to experiment with
          and see how they influence the generated images.
        </p>
      </div>

      <div class="faq-question">
        <h4 class="poppins-bold">Does the AI create unique images?</h4>
        <p class="poppins-regular">
          Yes, NexusAI generates unique images tailored to your needs. However,
          to unlock its full potential, prompts should include one of our 20
          pre-defined keywords, such as '2D-cavescene', '2D-townscene', etc.
          This approach ensures that the AI precisely understands the context
          and style you're aiming for, resulting in images that are both unique
          and aligned with your vision. You can also experiment with different
          keywords to see how the AI interprets them. In addition, you can
          change the point of view of the scene by using the keywords such as
          'topview' or 'sideview'. What you put in as your prompt will directly
          affect the output of the AI, so be specific as possible.
        </p>
      </div>

      <div class="faq-question">
        <h4 class="poppins-bold">Is NexusAI only for game developers?</h4>
        <p class="poppins-regular">
          No, NexusAI is not exclusively for game developers. NexusAI is a
          versatile tool that can cater to creators, professionals, and
          educators alike, providing them with a seamless way to generate images
          for their projects.
        </p>
      </div>

      <div class="faq-question">
        <h4 class="poppins-bold">
          What are the system requirements to use NexusAI?
        </h4>
        <p class="poppins-regular">
          NexusAI is a cloud-based platform, meaning you can access it from any
          device with an internet connection and a web browser. There are no
          specific system requirements to use our service.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
