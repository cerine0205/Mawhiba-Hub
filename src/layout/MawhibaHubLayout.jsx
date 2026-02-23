import { useState } from "react";
import Header from "../component/header/Header";
import RegistrationForm from "../component/RegistrationForm/RegistrationForm";
import QuestionsForm from "../component/QuestionsForm/QuestionsForm";
import ThankYouPage from "../component/ThankYouPage/ThankYouPage";

function MawhibaHubLayout() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    fullName: "",
    universityId: "",
    phone: "",
    answers: {}, 
  });

  const handleRegNext = (formData) => {
    setData((prev) => ({ ...prev, ...formData }));
    setStep(2); //   الانتقال للفورم الثاني
  };

  // يستقبل إجابات الفورم الثاني
  const handleQuestionsNext = (answersData) => {
    setData((prev) => ({ ...prev, answers: answersData }));
    setStep(3); //   الانتقال ل صفحة الشكر
  };

  const handleRestart = () => {
    setData({ fullName: "", universityId: "", phone: "", answers: {} });
    setStep(1); //   الانتقال للفورم الأول
  };

  return (
    <>
     
     <Header currentStep={step}/>

      {step === 1 && <RegistrationForm onNext={handleRegNext} />}

      {step === 2 && (
        <QuestionsForm
          userData={data}
          onNext={handleQuestionsNext}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && <ThankYouPage onReset={handleRestart} />}
    </>
  );
}

export default MawhibaHubLayout;