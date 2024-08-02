import React, { useState } from "react";
import "./Testimonials.css";
import imageTanya from "../assets/images/image-tanya.jpg";
import imageJohn from "../assets/images/image-john.jpg";
import nxtBtn from "../assets/images/icon-next.svg";
import prevBtn from "../assets/images/icon-prev.svg";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [{testimonialText:"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",name: "Tanya Sinclair",role: "UX Engineer",image: imageTanya,},
      {testimonialText:"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",name: "John Tarkpor",role: "Junior Front-end Developer",image: imageJohn,},
  ];

  const onIncreaseIndex = () => {
    setIndex(prev => {
      if (prev === testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  // const onIncreaseIndex = () => {
  //   setIndex((prev) => (prev + 1) % testimonials.length);
     // const onIncreaseIndex = () => {
  //   setIndex((prev) => {
  //     if (prev < testimonials.length - 1) {
  //       return prev + 1;
  //     } else {
  //       return (prev = testimonials.length - 1);
  //     }
  //   });
  // };

  const onDecreaseIndex = () => {
    setIndex(prev => {
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };
   // const onDecreaseIndex = () => {
  //   setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };
  // const onDecreaseIndex = () => {
  //   setIndex((prev) => {
  //     if (prev > 0){
  //       return prev - 1;
  //     }else{
  //       return prev = 0;
  //     }
  //   });
  // };                                  

  return (
    <div>
      <section className="container">
        <div className="slider">
          <div className="slides-container" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="slide" key={index}>
                <div className="slide-text">
                  <p className="testimonial-text">{testimonial.testimonialText}</p>
                  <p className="author-text">{testimonial.name}<span>{testimonial.role}</span></p>
                </div>
                <div className="slide-img">
                  <img src={testimonial.image} alt={`${testimonial.name}`} />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="buttons">
            <div className="prev" onClick={onDecreaseIndex} aria-label="Previous testimonial">
              <img src={prevBtn} alt="Previous" />
            </div>
            <div className="next" onClick={onIncreaseIndex} aria-label="Next testimonial">
              <img src={nxtBtn} alt="Next" />
            </div>
          </div> */}
          <div className="buttons">
            <div className="prev" onClick={onDecreaseIndex} role="button">
              <img src={prevBtn} alt="Previous testimonial" />
            </div>
            <div className="next" onClick={onIncreaseIndex} role="button">
              <img src={nxtBtn} alt="Next testimonial" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;
