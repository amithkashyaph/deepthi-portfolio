import Navigation from "@/components/Navigation";
import TestimonialSlider from "@/components/TestimonialSlider";

const TestimonialsPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/bg-option-07.png)] bg-blend-overlay bg-cover bg-center bg-no-repeat">
        <Navigation />
        <div className="flex items-center justify-center">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
