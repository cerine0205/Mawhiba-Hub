import "./QuestionsForm.css";
import { useState } from "react";

export default function QuestionsForm({ userData, onNext, onBack }) {
  const [answers, setAnswers] = useState({
    // أفكار الفرق
    فكرة_فريق_يوم_المهنة_1: "",
    فكرة_فريق_يوم_المهنة_2: "",
    فكرة_فريق_يوم_المهنة_3: "",
    فكرة_فريق_المنطقة_التفاعلية_1: "",
    فكرة_فريق_المنطقة_التفاعلية_2: "",
    فكرة_فريق_المنطقة_التفاعلية_3: "",
    فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1: "",
    فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2: "",
    فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3: "",
    فكرة_بوث_نادي_موهبة_في_المعرض_1: "",
    فكرة_بوث_نادي_موهبة_في_المعرض_2: "",
    فكرة_بوث_نادي_موهبة_في_المعرض_3: "",

    // الأنظمة وآلية العمل
    الأنظمة_التي_تحتاج_تغيير: "",
    الأنظمة_التي_تحتاج_إضافة: "",
    تفضيل_توزيع_المهام: "",

    // الطوارئ
    التعامل_مع_الطوارئ: "",
    التعامل_مع_الطوارئ_اقتراح_الآخر: "",
    توزيع_المهام_عند_ظهور_أمر_جديد: "",
    توزيع_المهام_عند_ظهور_أمر_جديد_اقتراح_الآخر: "",
    المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ: "",

    // أسلوب العمل والتواصل
    تفضيل_العمل_الجماعي_أم_التوزيع_الفردي: "",
    طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات: "",
    طريقة_التواصل_بين_الأعضاء_أخرى: "",
    اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار: "",

    // قائدة لجنة التصميم
    تقييم_القائدة_من_حيث_التنظيم_والتواصل: "",
    النقاط_التي_تقترحينها_على_القائدة_تحسينها_أو_إضافتها: "",
    تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش: "",
    ملاحظات_على_قائدة_لجنة_التصميم: "",
  });

  const handleChange = (name, value) => {
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          {/* ====================================================== */}
          {/* 1) أفكار الفرق */}
          {/* ====================================================== */}
          <div className="qfield">
            <div className="qfield-header">
              <div className="qNumber">1</div>
              <label className="qTitle">عطونا ٣ أفكار لكل فريق:</label>
            </div>

            <p>الفكرة الأولى لكل فريق إلزامية والبقية اختيارية</p>

            <div className="input-group">
              <label>فريق يوم المهنة</label>
              <input
                value={answers.فكرة_فريق_يوم_المهنة_1}
                onChange={(e) =>
                  handleChange("فكرة_فريق_يوم_المهنة_1", e.target.value)
                }
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_يوم_المهنة_2}
                onChange={(e) =>
                  handleChange("فكرة_فريق_يوم_المهنة_2", e.target.value)
                }
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_يوم_المهنة_3}
                onChange={(e) =>
                  handleChange("فكرة_فريق_يوم_المهنة_3", e.target.value)
                }
                placeholder="الفكرة 3"
              />
            </div>

            <div className="input-group">
              <label>فريق المنطقة التفاعلية</label>
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_1}
                onChange={(e) =>
                  handleChange("فكرة_فريق_المنطقة_التفاعلية_1", e.target.value)
                }
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_2}
                onChange={(e) =>
                  handleChange("فكرة_فريق_المنطقة_التفاعلية_2", e.target.value)
                }
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_3}
                onChange={(e) =>
                  handleChange("فكرة_فريق_المنطقة_التفاعلية_3", e.target.value)
                }
                placeholder="الفكرة 3"
              />
            </div>

            <div className="input-group">
              <label>فريق التقنيات والمواقع الإلكترونية</label>
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1}
                onChange={(e) =>
                  handleChange(
                    "فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1",
                    e.target.value
                  )
                }
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2}
                onChange={(e) =>
                  handleChange(
                    "فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2",
                    e.target.value
                  )
                }
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3}
                onChange={(e) =>
                  handleChange(
                    "فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3",
                    e.target.value
                  )
                }
                placeholder="الفكرة 3"
              />
            </div>

            <div className="input-group">
              <label>بوث نادي موهبة في المعرض</label>
              <input
                value={answers.فكرة_بوث_نادي_موهبة_في_المعرض_1}
                onChange={(e) =>
                  handleChange("فكرة_بوث_نادي_موهبة_في_المعرض_1", e.target.value)
                }
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_بوث_نادي_موهبة_في_المعرض_2}
                onChange={(e) =>
                  handleChange("فكرة_بوث_نادي_موهبة_في_المعرض_2", e.target.value)
                }
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_بوث_نادي_موهبة_في_المعرض_3}
                onChange={(e) =>
                  handleChange("فكرة_بوث_نادي_موهبة_في_المعرض_3", e.target.value)
                }
                placeholder="الفكرة 3"
              />
            </div>
          </div>

          {/* ====================================================== */}
          {/* 2) الأنظمة وآلية العمل */}
          {/* ====================================================== */}
          <div className="qfield">
            <div className="qfield-header">
              <div className="qNumber">2</div>
              <label className="qTitle">الأنظمة وآلية العمل</label>
            </div>

            <label>ما الأنظمة التي تريدون تغييرها لتكون أسهل لكم؟</label>
            <textarea
              value={answers.الأنظمة_التي_تحتاج_تغيير}
              onChange={(e) =>
                handleChange("الأنظمة_التي_تحتاج_تغيير", e.target.value)
              }
              placeholder="اكتب الإجابة هنا"
              required
            />

            <label>ما الأنظمة التي تريدون إضافتها في اللجنة؟</label>
            <textarea
              value={answers.الأنظمة_التي_تحتاج_إضافة}
              onChange={(e) =>
                handleChange("الأنظمة_التي_تحتاج_إضافة", e.target.value)
              }
              placeholder="اكتب الإجابة هنا"
              required
            />

            <label>كيف تفضلين تقسيم المهام للورش الجديدة؟</label>
            <textarea
              value={answers.تفضيل_توزيع_المهام}
              onChange={(e) =>
                handleChange("تفضيل_توزيع_المهام", e.target.value)
              }
              placeholder="اكتب الإجابة هنا"
              required
            />
          </div>

          {/* ====================================================== */}
          {/* 3) التعامل مع الطوارئ */}
          {/* ====================================================== */}
          <div className="qfield">
            <div className="qfield-header">
              <div className="qNumber">3</div>
              <label className="qTitle">التعامل مع الطوارئ</label>
            </div>

            <label>إذا حدثت مشكلة طارئة أثناء الفعالية، كيف تفضلون التعامل معها؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="التعامل_مع_الطوارئ"
                  value="نقرر جماعي"
                  onChange={(e) =>
                    handleChange("التعامل_مع_الطوارئ", e.target.value)
                  }
                  required
                />
                نقرر جماعي
              </label>

              <label>
                <input
                  type="radio"
                  name="التعامل_مع_الطوارئ"
                  value="المسؤول المباشر يقرر"
                  onChange={(e) =>
                    handleChange("التعامل_مع_الطوارئ", e.target.value)
                  }
                  required
                />
                المسؤول المباشر يقرر
              </label>

              <label>
                <input
                  type="radio"
                  name="التعامل_مع_الطوارئ"
                  value="اقتراح آخر"
                  onChange={(e) =>
                    handleChange("التعامل_مع_الطوارئ", e.target.value)
                  }
                  required
                />
                اقتراح آخر
              </label>
            </div>

            {answers.التعامل_مع_الطوارئ === "اقتراح آخر" && (
              <div>
                <label>اكتبي اقتراحك الآخر</label>
                <textarea
                  value={answers.التعامل_مع_الطوارئ_اقتراح_الآخر || ""}
                  onChange={(e) =>
                    handleChange("التعامل_مع_الطوارئ_اقتراح_الآخر", e.target.value)
                  }
                  placeholder="اكتبي اقتراحك هنا"
                  required
                />
              </div>
            )}

            <label>إذا ظهر شيء جديد في اللحظات الأخيرة كيف تفضلين توزيع المهام؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="توزيع_المهام_عند_ظهور_أمر_جديد"
                  value="حسب الحاجة"
                  onChange={(e) =>
                    handleChange("توزيع_المهام_عند_ظهور_أمر_جديد", e.target.value)
                  }
                  required
                />
                حسب الحاجة
              </label>

              <label>
                <input
                  type="radio"
                  name="توزيع_المهام_عند_ظهور_أمر_جديد"
                  value="مسؤوليات ثابتة"
                  onChange={(e) =>
                    handleChange("توزيع_المهام_عند_ظهور_أمر_جديد", e.target.value)
                  }
                  required
                />
                مسؤوليات ثابتة
              </label>

              <label>
                <input
                  type="radio"
                  name="توزيع_المهام_عند_ظهور_أمر_جديد"
                  value="ادوار مساعدة"
                  onChange={(e) =>
                    handleChange("توزيع_المهام_عند_ظهور_أمر_جديد", e.target.value)
                  }
                  required
                />
                ادوار مساعدة
              </label>

              <label>
                <input
                  type="radio"
                  name="توزيع_المهام_عند_ظهور_أمر_جديد"
                  value="اقتراح آخر"
                  onChange={(e) =>
                    handleChange("توزيع_المهام_عند_ظهور_أمر_جديد", e.target.value)
                  }
                  required
                />
                اقتراح آخر
              </label>
            </div>

            {answers.توزيع_المهام_عند_ظهور_أمر_جديد === "اقتراح آخر" && (
              <div>
                <label>اكتبي اقتراحك الآخر</label>
                <textarea
                  value={answers.توزيع_المهام_عند_ظهور_أمر_جديد_اقتراح_الآخر || ""}
                  onChange={(e) =>
                    handleChange(
                      "توزيع_المهام_عند_ظهور_أمر_جديد_اقتراح_الآخر",
                      e.target.value
                    )
                  }
                  placeholder="اكتبي اقتراحك هنا"
                  required
                />
              </div>
            )}

            <label>ما المقترحات لتقليل الضغط أو التعامل مع الطوارئ؟</label>
            <textarea
              value={answers.المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ}
              onChange={(e) =>
                handleChange(
                  "المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ",
                  e.target.value
                )
              }
              placeholder="اكتب الإجابة هنا"
              required
            />
          </div>

          {/* ====================================================== */}
          {/* 4) أسلوب العمل والتواصل */}
          {/* ====================================================== */}
          <div className="qfield">
            <div className="qfield-header">
              <div className="qNumber">4</div>
              <label className="qTitle">أسلوب العمل والتواصل</label>
            </div>

            <label>هل تفضلين العمل الجماعي أم التوزيع الفردي؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                  value="عمل جماعي"
                  onChange={(e) =>
                    handleChange(
                      "تفضيل_العمل_الجماعي_أم_التوزيع_الفردي",
                      e.target.value
                    )
                  }
                  required
                />
                عمل جماعي
              </label>

              <label>
                <input
                  type="radio"
                  name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                  value="توزيع فردي"
                  onChange={(e) =>
                    handleChange(
                      "تفضيل_العمل_الجماعي_أم_التوزيع_الفردي",
                      e.target.value
                    )
                  }
                  required
                />
                توزيع فردي
              </label>

              <label>
                <input
                  type="radio"
                  name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                  value="حسب المهمة"
                  onChange={(e) =>
                    handleChange(
                      "تفضيل_العمل_الجماعي_أم_التوزيع_الفردي",
                      e.target.value
                    )
                  }
                  required
                />
                حسب المهمة
              </label>
            </div>

            <label>كيف تحبون يكون التواصل بين أعضاء اللجنة أثناء الفعاليات؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                  value="اجتماعات قصيرة"
                  onChange={(e) =>
                    handleChange(
                      "طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات",
                      e.target.value
                    )
                  }
                  required
                />
                اجتماعات قصيرة
              </label>

              <label>
                <input
                  type="radio"
                  name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                  value="واتساب"
                  onChange={(e) =>
                    handleChange(
                      "طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات",
                      e.target.value
                    )
                  }
                  required
                />
                واتساب
              </label>

              <label>
                <input
                  type="radio"
                  name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                  value="غيره"
                  onChange={(e) =>
                    handleChange(
                      "طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات",
                      e.target.value
                    )
                  }
                  required
                />
                غيره
              </label>
            </div>

            {answers.طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات === "غيره" && (
              <div>
                <label>اكتبي طريقة التواصل</label>
                <textarea
                  value={answers.طريقة_التواصل_بين_الأعضاء_أخرى || ""}
                  onChange={(e) =>
                    handleChange("طريقة_التواصل_بين_الأعضاء_أخرى", e.target.value)
                  }
                  placeholder="اكتبي الطريقة هنا"
                  required
                />
              </div>
            )}

            <label>تحبون قبل كل ورشة نسوي اجتماع قصير لترتيب الأفكار وتوزيع المهام؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار"
                  value="نعم"
                  onChange={(e) =>
                    handleChange("اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار", e.target.value)
                  }
                  required
                />
                نعم
              </label>

              <label>
                <input
                  type="radio"
                  name="اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار"
                  value="لا"
                  onChange={(e) =>
                    handleChange("اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار", e.target.value)
                  }
                  required
                />
                لا
              </label>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 5) قائدة لجنة التصميم */}
          {/* ====================================================== */}
          <div className="qfield">
            <div className="qfield-header">
              <div className="qNumber">5</div>
              <label className="qTitle">قائدة لجنة التصميم</label>
            </div>

            <label>كيف تقييمين القائدة من ناحية التنظيم والتواصل؟</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                  value="ممتاز"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_القائدة_من_حيث_التنظيم_والتواصل",
                      e.target.value
                    )
                  }
                  required
                />
                ممتاز
              </label>

              <label>
                <input
                  type="radio"
                  name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                  value="جيد"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_القائدة_من_حيث_التنظيم_والتواصل",
                      e.target.value
                    )
                  }
                  required
                />
                جيد
              </label>

              <label>
                <input
                  type="radio"
                  name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                  value="يحتاج تحسين"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_القائدة_من_حيث_التنظيم_والتواصل",
                      e.target.value
                    )
                  }
                  required
                />
                يحتاج تحسين
              </label>
            </div>

            {answers.تقييم_القائدة_من_حيث_التنظيم_والتواصل === "يحتاج تحسين" && (
              <div>
                <label>ما النقاط التي تقترحين على القائدة تحسينها أو إضافتها؟</label>
                <textarea
                  value={answers.النقاط_التي_تقترحينها_على_القائدة_تحسينها_أو_إضافتها}
                  onChange={(e) =>
                    handleChange(
                      "النقاط_التي_تقترحينها_على_القائدة_تحسينها_أو_إضافتها",
                      e.target.value
                    )
                  }
                  placeholder="اكتب الإجابة هنا"
                  required
                />
              </div>
            )}

            <label>
              كيف تقيّمين أداء قائدة لجنة التصميم في إيصال المعلومات وفتح باب النقاش مع الأعضاء؟
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش"
                  value="ممتاز"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش",
                      e.target.value
                    )
                  }
                  required
                />
                ممتاز
              </label>

              <label>
                <input
                  type="radio"
                  name="تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش"
                  value="جيد"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش",
                      e.target.value
                    )
                  }
                  required
                />
                جيد
              </label>

              <label>
                <input
                  type="radio"
                  name="تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش"
                  value="يحتاج تحسين"
                  onChange={(e) =>
                    handleChange(
                      "تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش",
                      e.target.value
                    )
                  }
                  required
                />
                يحتاج تحسين
              </label>
            </div>

            {answers.تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش === "يحتاج تحسين" && (
              <div>
                <label>
                  ما هي النقاط التي تريدين أن تقوم قائدة لجنة التصميم بتعديلها أو إضافتها؟
                </label>
                <textarea
                  value={answers.ملاحظات_على_قائدة_لجنة_التصميم || ""}
                  onChange={(e) =>
                    handleChange("ملاحظات_على_قائدة_لجنة_التصميم", e.target.value)
                  }
                  placeholder="اكتب الإجابة هنا"
                  required={
                    answers.تقييم_أداء_القائدة_في_إيصال_المعلومات_وفتح_باب_النقاش ===
                    "يحتاج تحسين"
                  }
                />
              </div>
            )}
          </div>

          {/* ====================================================== */}
          {/* الأزرار */}
          {/* ====================================================== */}
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