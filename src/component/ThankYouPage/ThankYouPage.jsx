

import "./ThankYouPage.css";

export default function ThankYouPage({ userData, onReset }) {
  return (
    <section className="thankyou">
      <div className="thankyou-card">

        <div className="thankyou-icon">✓</div>

        <h1 className="thankyou-title">
         شكراً لك يا  {userData.fullName} 💜
        </h1>

        <h2 className="thankyou-subtitle">
          تم إرسال ردك بنجاح
        </h2>
        <p className="thankyou-text">
          شكرًا لمساهمتك في تطوير لجنة التصميم.
          <br />
          تم استلام إجابتك وسيتم مراجعتها ضمن اقتراحات اللجنة.
        </p>

        <div className="thankyou-actions">
          <button className="btn-primary" onClick={onReset}>
            إرسال رد جديد
          </button>
        </div>

        <div className="thankyou-divider" />

        <div className="thankyou-footer">
          <p>قائدة لجنة التصميم لمار حسن الظاهري</p>

          <p>
            تم تطوير هذا النموذج بواسطة سيرين عايش الجحدلي
          </p>

          <a
            className="github-link"
            href="https://github.com/cerine0205"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/cerine0205
          </a>

        </div>

      </div>
    </section>
  );
}