import "./ThankYouPage.css";

export default function ThankYouPage({ onReset }) {
  return (
    <div className="thankyou-container">

      <div className="thankyou-card">
        <h1 className="thankyou-title">شكراً على وقتك 💜</h1>

        <p className="thankyou-text">
          تم استلام ردك بنجاح.
        </p>

        <button className="thankyou-btn" onClick={onReset}>
          إعادة الإرسال
        </button>

        <div className="thankyou-info">
          <p><strong>قائدة اللجنة:</strong> لمار</p>
          <p><strong>المصممة:</strong> سيرين</p>
        </div>
      </div>

    </div>
  );
}