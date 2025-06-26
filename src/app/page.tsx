import { ExperimentGrid } from "@/widgets/experiment-grid";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            OopsBox
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            쓸모는 없지만 재미있는 웹 실험 모음집
          </p>
          <p className="text-gray-500 mt-2">
            다양한 장난감 같은 기능들을 체험해보세요
          </p>
        </div>
        <ExperimentGrid />
      </main>
      <Footer />
    </div>
  );
}
