import React from "react";

const FAQ = () => {
    return (
    <div class="faq-container">
        <h2 class="poppins-bold">Frequently Asked Questions</h2>
        <div class="faq-question">
            <h4 class="poppins-bold">What is NexusAI?</h4>
            <p class="poppins-regular">NexusAI is a image generation tool powered by the Stable Diffusion model. It's designed for anyone needing custom visuals, from game developers to educators, offering a simple way to create unique images with just a prompt. Through a set of pre-defined keywords, users can guide the AI to produce precise and tailored images for any project or purpose.</p>
        </div>
        <div class="faq-question">
            <h4 class="poppins-bold">Is NexusAI only for game developers?</h4>
            <p class="poppins-regular">No, NexusAI is not exclusively for game developers. NexusAI is a versatile tool that can cater to creatives, professionals, and educators alike, providing them with a seamless way to generate images for their projects.</p>
        </div>
        <div class="faq-question">
            <h4 class="poppins-bold">Does the AI create unique images?</h4>
            <p class="poppins-regular">Yes, NexusAI generates unique images tailored to your needs. However, to unlock its full potential, prompts should include one of our 20 pre-defined keywords, such as '2D-cavescene', '2D-townscene', etc. This approach ensures that the AI precisely understands the context and style you're aiming for, resulting in images that are both unique and aligned with your vision.</p>
        </div>
    </div>
    );
};

export default FAQ;