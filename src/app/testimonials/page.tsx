import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";
import TestimonialSlider from "@/components/TestimonialSlider";

const TestimonialsPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay">
        <Navigation />
        <div className="min-h-screen  flex items-center justify-center">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
