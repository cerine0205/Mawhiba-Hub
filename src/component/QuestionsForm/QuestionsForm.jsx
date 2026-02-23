import "./QuestionsForm.css";
import { useState } from "react";

export default function QuestionsForm({ userData, onNext, onBack }) {
  const [answers, setAnswers] = useState({ q1: "", q2: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext?.(answers);
  };

  return (
    <section className="questions">
      <div className="questions-card">

        <div className="questions-title">
          <h1>أهلًا {userData.fullName} 👋</h1>
        </div>

        <form className="questions-form" onSubmit={handleSubmit}>
          <div className="qfield">
            <label>سؤال 1</label>
            <input
              value={answers.q1}
              onChange={(e) => setAnswers((p) => ({ ...p, q1: e.target.value }))}
              placeholder="اكتبي إجابتك هنا"
              required
            />
          </div>

          <div className="qfield">
            <label>سؤال 2</label>
            <textarea
              value={answers.q2}
              onChange={(e) => setAnswers((p) => ({ ...p, q2: e.target.value }))}
              placeholder="اكتبي إجابتك هنا"
              required
            />
          </div>

          <div className="questions-actions">
            <button type="button" className="btn-secondary" onClick={onBack}>
              رجوع
            </button>

            <button type="submit" className="btn-primary">
              إرسال
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}