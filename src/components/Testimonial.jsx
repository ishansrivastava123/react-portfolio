import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonials</h2>
        <section>
            <TestimonialCard
            name={"Bill Gates"}
            feedback={"Can you please chair Microsoft? Want a patnership?"} />
            <TestimonialCard
            name={"Mark Zuckerberg"}
            feedback={"Such a smart coder you are. Please join my company🙏"} />
            <TestimonialCard
            name={"Sundar Pichai"}
            feedback={"Excellent individual with hidden talent. It should remain hidden"} />
        </section>
    </div>
  )
}

export default Testimonial