import Navigation from "@/components/Navigation";
import TestimonialSlider from "@/components/TestimonialSlider";

const TestimonialsPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.JPG)] bg-blend-overlay">
        <Navigation />
        <div className="min-h-screen  flex items-center justify-center">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
