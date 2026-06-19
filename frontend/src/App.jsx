import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  const handleSuccess = () => {
    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">5000+</h3>
              <p>Students Trained</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p>Workshops</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">4.9★</h3>
              <p>Average Rating</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p>Cities Reached</p>
            </div>
          </div>
        </div>
      </section>

      <WorkshopDetails />
      <LearningOutcomes />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12">
            What Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4">
                "My son absolutely loved the robotics sessions."
              </p>
              <h4 className="font-bold">Priya Sharma</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4">
                "Excellent instructors and engaging activities."
              </p>
              <h4 className="font-bold">Rahul Verma</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4">
                "The AI projects were incredibly fun and educational."
              </p>
              <h4 className="font-bold">Sneha Gupta</h4>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <RegistrationForm onSuccess={handleSuccess} />

      <Footer />
    </div>
  );
}

export default App;