import "./RegistrationForm.css";
import { useState } from "react";

const RegistrationForm = ({ onNext }) => {
    const [form, setForm] = useState({
        fullName: "",
        universityId: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onNext) {
            onNext(form);
        }
        
    };

    return (
        <section className="reg">
            <div className="reg-card">
                <div className="reg-title">
                    <span className="reg-icon" />
                    <h1>البيانات الأساسية</h1>
                </div>

                <form className="reg-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>
                            الاسم الكامل <span className="req">*</span>
                        </label>
                        <input
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="مثال: نورة محمد العتيبي"
                            required
                        />
                    </div>

                    <div className="field">
                        <label>
                            الرقم الجامعي <span className="req">*</span>
                        </label>
                        <input
                            name="universityId"
                            value={form.universityId}
                            onChange={handleChange}
                            type="text"
                            placeholder="مثال: 2540289"
                            required
                        />
                    </div>

                    <div className="field">
                        <label>
                            رقم الجوال <span className="req">*</span>
                        </label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            inputMode="numeric"
                            pattern="05[0-9]{8}"
                            placeholder="05xxxxxxxx"
                            required
                        />
                    </div>

                    <div className="reg-actions">
                        <button className="btn-primary" type="submit">
                            التالي <span className="arrow">←</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;