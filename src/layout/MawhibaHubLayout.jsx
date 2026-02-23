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
const handleQuestionsNext = async (answersData) => {
  const finalData = { ...data, answers: answersData };
  setData(finalData);

  // إرسال للباك
  await fetch("http://127.0.0.1:8000/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalData),
  });

  setStep(3);
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