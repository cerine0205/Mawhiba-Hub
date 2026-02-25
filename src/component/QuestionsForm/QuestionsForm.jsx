import "./QuestionsForm.css";
import { useState } from "react";

export default function QuestionsForm({ userData, onNext, onBack }) {
  const [answers, setAnswers] = useState({
    فكرة_فريق_يوم_المهنة_1: "", فكرة_فريق_يوم_المهنة_2: "", فكرة_فريق_يوم_المهنة_3: "",
    فكرة_فريق_المنطقة_التفاعلية_1: "", فكرة_فريق_المنطقة_التفاعلية_2: "", فكرة_فريق_المنطقة_التفاعلية_3: "",
    فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1: "", فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2: "", فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3: "",
    هل_سجلتم_الأفكار_في_الرابط: "", الفكرة_المقترحة_التي_تم_إرسالها: "",
    الأنظمة_التي_تحتاج_تغيير: "", الأنظمة_التي_تحتاج_إضافة: "", مدة_المهمة: "",
    تفضيل_توزيع_المهام: "", التعامل_مع_الطوارئ: "", طريقة_التواصل_بعد_المهمة: "",
    توزيع_المهام_عند_ظهور_أمر_جديد: "",
    المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ: "",
    تقييم_القائدة_من_حيث_التنظيم_والتواصل: "",
    النقاط_التي_تقتربينها_على_القائدة_تحسينها_أو_إضافتها: "",
    طريقة_التواصل_مع_القائدة: "",
    تفضيل_العمل_الجماعي_أم_التوزيع_الفردي: "",
    طريقة_تقسيم_الاجتماعات: "",
    طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات: "",
    اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار: "",
  });

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
          {/* السؤال 1 */}
          <div className="qfield">

              <div className="qfield-header">
                <div className="qNumber">1</div>
                <label className="qTitle">عطونا ٣ أفكار لكل فريق:</label>
              </div>

              <p>الفكرة الاولى لكل فريق الزامية والبقيه اختياري</p>
            <div className="input-group">
              <label>فريق يوم المهنة</label>
              <input
                value={answers.فكرة_فريق_يوم_المهنة_1}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_يوم_المهنة_1: e.target.value })}
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_يوم_المهنة_2}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_يوم_المهنة_2: e.target.value })}
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_يوم_المهنة_3}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_يوم_المهنة_3: e.target.value })}
                placeholder="الفكرة 3"
              />
            </div>

            <div className="input-group">
              <label>فريق المنطقة التفاعلية</label>
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_1}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_المنطقة_التفاعلية_1: e.target.value })}
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_2}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_المنطقة_التفاعلية_2: e.target.value })}
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_المنطقة_التفاعلية_3}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_المنطقة_التفاعلية_3: e.target.value })}
                placeholder="الفكرة 3"
              />
            </div>

            <div className="input-group">
              <label>فريق التقنيات والمواقع الإلكترونية</label>
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_التقنيات_والمواقع_الإلكترونية_1: e.target.value })}
                placeholder="الفكرة 1"
                required
              />
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_التقنيات_والمواقع_الإلكترونية_2: e.target.value })}
                placeholder="الفكرة 2"
              />
              <input
                value={answers.فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3}
                onChange={(e) => setAnswers({ ...answers, فكرة_فريق_التقنيات_والمواقع_الإلكترونية_3: e.target.value })}
                placeholder="الفكرة 3"
              />
            </div>
          </div>

          {/* السؤال 2 */}
          <div className="qfield">

            <div className="qfield-header">
              <div className="qNumber">2</div>
              <label className="qTitle">هل سجلتوا أفكاركم في الرابط الخاص بالأفكار؟</label>
            </div>

            <div className="radio-group">
              <input
                type="radio"
                name="هل_سجلتم_الأفكار_في_الرابط"
                value="نعم"
                onChange={(e) => setAnswers({ ...answers, هل_سجلتم_الأفكار_في_الرابط: e.target.value })}
                required
              />
              <label>نعم</label>
              <input
                type="radio"
                name="هل_سجلتم_الأفكار_في_الرابط"
                value="لا"
                onChange={(e) => setAnswers({ ...answers, هل_سجلتم_الأفكار_في_الرابط: e.target.value })}
                required
              />
              <label>لا</label>
            </div>


            {answers.هل_سجلتم_الأفكار_في_الرابط === "نعم" && (
              <div>
                <label>ما الفكرة التي أرسلتها عبر الرابط؟</label>
                <textarea
                  value={answers.الفكرة_المقترحة_التي_تم_إرسالها}
                  onChange={(e) => setAnswers({ ...answers, الفكرة_المقترحة_التي_تم_إرسالها: e.target.value })}
                  placeholder="اكتب الفكرة هنا"
                  required
                />
              </div>
            )}
          </div>

          {/* السؤال 3 */}
          <div className="qfield">

            <div className="qfield-header">
              <div className="qNumber">3</div>
              <label className="qTitle">الانظمه واليه العمل</label>
            </div>

            <label>ما الأنظمة التي تريدون تغييرها لتكون أسهل لكم؟</label>
            <textarea
              value={answers.الأنظمة_التي_تحتاج_تغيير} onChange={(e) => setAnswers({ ...answers, الأنظمة_التي_تحتاج_تغيير: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />
            <label>ما الأنظمة التي تريدون إضافتها في اللجنة؟</label>
            <textarea
              value={answers.الأنظمة_التي_تحتاج_إضافة}
              onChange={(e) => setAnswers({ ...answers, الأنظمة_التي_تحتاج_إضافة: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />
            <label>ما المدة المناسبة لإنجاز المهمة؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="مدة_المهمة"
                value="يوم واحد"
                onChange={(e) => setAnswers({ ...answers, مدة_المهمة: e.target.value })}
                required
              />
              <label>يوم واحد</label>
              <input
                type="radio"
                name="مدة_المهمة"
                value="يومان"
                onChange={(e) => setAnswers({ ...answers, مدة_المهمة: e.target.value })}
                required
              />
              <label>يومان</label>
              <input
                type="radio"
                name="مدة_المهمة"
                value="3 أيام"
                onChange={(e) => setAnswers({ ...answers, مدة_المهمة: e.target.value })}
                required
              />
              <label>3 أيام</label>
              <input
                type="radio"
                name="مدة_المهمة"
                value="أسبوع"
                onChange={(e) => setAnswers({ ...answers, مدة_المهمة: e.target.value })}
                required
              />
              <label>أسبوع</label>
            </div>

            <label>كيف تفضلين تقسيم المهام للورش الجديدة؟</label>
            <textarea
              value={answers.تفضيل_توزيع_المهام}
              onChange={(e) => setAnswers({ ...answers, تفضيل_توزيع_المهام: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />
          </div>



          {/*  السؤال 4 */}
          <div className="qfield">

            <div className="qfield-header">
              <div className="qNumber">4</div>
              <label className="qTitle">التعامل مع الطوارئ</label>
            </div>

            <label>إذا حدثت مشكلة طارئة أثناء الفعالية، كيف تفضلون التعامل معها؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="التعامل_مع_الطوارئ"
                value="نقرر جماعي"
                onChange={(e) => setAnswers({ ...answers, التعامل_مع_الطوارئ: e.target.value })}
                required
              />
              <label>نقرر جماعي</label>
              <input
                type="radio"
                name="التعامل_مع_الطوارئ"
                value="المسؤول المباشر يقرر"
                onChange={(e) => setAnswers({ ...answers, التعامل_مع_الطوارئ: e.target.value })}
                required
              />
              <label>المسؤول المباشر يقرر</label>
              <input
                type="radio"
                name="التعامل_مع_الطوارئ"
                value="اقتراح آخر"
                onChange={(e) => setAnswers({ ...answers, التعامل_مع_الطوارئ: e.target.value })}
                required
              />
              <label>اقتراح آخر</label>
            </div>

            <label>إذا كان لديك شيء تود شرحه بعد انتهاء المهمّة، كيف تودّون التواصل معنا؟</label>
            <textarea
              value={answers.طريقة_التواصل_بعد_المهمة}
              onChange={(e) => setAnswers({ ...answers, طريقة_التواصل_بعد_المهمة: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />

            <label>اذا ظهر شي جديد في اللحظات الاخيره كيف تفضلين توزيع المهام؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="توزيع_المهام_عند_ظهور_أمر_جديد"
                value="توزيع سريع"
                onChange={(e) => setAnswers({ ...answers, توزيع_المهام_عند_ظهور_أمر_جديد: e.target.value })}
                required
              />
              <label>توزيع سريع</label>
              <input
                type="radio"
                name="توزيع_المهام_عند_ظهور_أمر_جديد"
                value=" مسؤوليات ثابته"
                onChange={(e) => setAnswers({ ...answers, توزيع_المهام_عند_ظهور_أمر_جديد: e.target.value })}
                required
              />
              <label>  مسؤوليات ثابته</label>
              <input
                type="radio"
                name="توزيع_المهام_عند_ظهور_أمر_جديد"
                value="ادوار مساعده"
                onChange={(e) => setAnswers({ ...answers, توزيع_المهام_عند_ظهور_أمر_جديد: e.target.value })}
                required
              />
              <label> ادوار مساعده</label>
            </div>

            <label>ما المقترحات لتقليل الضغط أو التعامل مع الطوارئ؟</label>
            <textarea
              value={answers.المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ}
              onChange={(e) => setAnswers({ ...answers, المقترحات_لتقليل_الضغط_أو_التعامل_مع_الطوارئ: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />
          </div>

          {/*  السؤال 5  */}
          <div className="qfield">

            <div className="qfield-header">
              <div className="qNumber">5</div>
              <label className="qTitle">قائده لجنه التصميم</label>
            </div>

            <label>كيف تقييمين القائدة من حيث التنظيم والتواصل؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                value="ممتاز"
                onChange={(e) => setAnswers({ ...answers, تقييم_القائدة_من_حيث_التنظيم_والتواصل: e.target.value })}
                required
              />
              <label>ممتاز</label>
              <input
                type="radio"
                name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                value="جيد جدًا"
                onChange={(e) => setAnswers({ ...answers, تقييم_القائدة_من_حيث_التنظيم_والتواصل: e.target.value })}
                required
              />
              <label>جيد جدًا</label>
              <input
                type="radio"
                name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                value="جيد"
                onChange={(e) => setAnswers({ ...answers, تقييم_القائدة_من_حيث_التنظيم_والتواصل: e.target.value })}
                required
              />
              <label>جيد</label>
              <input
                type="radio"
                name="تقييم_القائدة_من_حيث_التنظيم_والتواصل"
                value="يحتاج تحسين"
                onChange={(e) => setAnswers({ ...answers, تقييم_القائدة_من_حيث_التنظيم_والتواصل: e.target.value })}
                required
              />
              <label>يحتاج تحسين</label>
            </div>

            <label>ما النقاط التي تقترحين على القائدة تحسينها أو إضافتها؟</label>
            <textarea
              value={answers.النقاط_التي_تقتربينها_على_القائدة_تحسينها_أو_إضافتها}
              onChange={(e) => setAnswers({ ...answers, النقاط_التي_تقتربينها_على_القائدة_تحسينها_أو_إضافتها: e.target.value })}
              placeholder="اكتب الإجابة هنا"
              required
            />

            <label>كيف تفضلين التواصل مع القائدة؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="طريقة_التواصل_مع_القائدة"
                value="تواصل يومي"
                onChange={(e) => setAnswers({ ...answers, طريقة_التواصل_مع_القائدة: e.target.value })}
                required
              />
              <label>تواصل يومي</label>
              <input
                type="radio"
                name="طريقة_التواصل_مع_القائدة"
                value="عند الحاجة"
                onChange={(e) => setAnswers({ ...answers, طريقة_التواصل_مع_القائدة: e.target.value })}
                required
              />
              <label>عند الحاجة</label>
              <input
                type="radio"
                name="طريقة_التواصل_مع_القائدة"
                value="أسبوعي"
                onChange={(e) => setAnswers({ ...answers, طريقة_التواصل_مع_القائدة: e.target.value })}
                required
              />
              <label>أسبوعي</label>
            </div>
          </div>

          {/*  السؤال 6  */}
          <div className="qfield">

            <div className="qfield-header">
              <div className="qNumber">6</div>
              <label className="qTitle">اسلوب العمل والتواصل</label>
            </div>

            <label>هل تفضلين العمل الجماعي أم التوزيع الفردي؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                value="عمل جماعي"
                onChange={(e) => setAnswers({ ...answers, تفضيل_العمل_الجماعي_أم_التوزيع_الفردي: e.target.value })}
                required
              />
              <label>عمل جماعي</label>
              <input
                type="radio"
                name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                value="توزيع فردي"
                onChange={(e) => setAnswers({ ...answers, تفضيل_العمل_الجماعي_أم_التوزيع_الفردي: e.target.value })}
                required
              />
              <label>توزيع فردي</label>
              <input
                type="radio"
                name="تفضيل_العمل_الجماعي_أم_التوزيع_الفردي"
                value="حسب المهمة"
                onChange={(e) => setAnswers({ ...answers, تفضيل_العمل_الجماعي_أم_التوزيع_الفردي: e.target.value })}
                required
              />
              <label>حسب المهمة</label>
            </div>

            <label>كيف تقسمين الاجتماعات؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="طريقة_تقسيم_الاجتماعات"
                value="قصيرة يومية"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_الاجتماعات: e.target.value })}
                required
              />
              <label>قصيرة يومية</label>
              <input
                type="radio"
                name="طريقة_تقسيم_الاجتماعات"
                value="أسبوعية"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_الاجتماعات: e.target.value })}
                required
              />
              <label>أسبوعية</label>
              <input
                type="radio"
                name="طريقة_تقسيم_الاجتماعات"
                value="عند الضرورة فقط"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_الاجتماعات: e.target.value })}
                required
              />
              <label>عند الضرورة فقط</label>
            </div>

            <label>كيف تقسمين التواصل بين أعضاء اللجنة أثناء الفعاليات؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                value="مجموعة كتابة"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات: e.target.value })}
                required
              />
              <label>مجموعة كتابة</label>
              <input
                type="radio"
                name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                value="واتساب"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات: e.target.value })}
                required
              />
              <label>واتساب</label>
              <input
                type="radio"
                name="طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات"
                value="تليجرام"
                onChange={(e) => setAnswers({ ...answers, طريقة_تقسيم_التواصل_بين_أعضاء_اللجنة_أثناء_الفعاليات: e.target.value })}
                required
              />
              <label>تليجرام</label>
            </div>

            <label>هل تريدين اجتماعًا قصيرًا قبل كل ورشة لتنظيم الأفكار؟</label>
            <div className="radio-group">
              <input
                type="radio"
                name="اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار"
                value="نعم"
                onChange={(e) => setAnswers({ ...answers, اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار: e.target.value })}
                required
              />
              <label>نعم</label>
              <input
                type="radio"
                name="اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار"
                value="لا"
                onChange={(e) => setAnswers({ ...answers, اجتماع_قصير_قبل_الورشة_لتنظيم_الأفكار: e.target.value })}
                required
              />
              <label>لا</label>
            </div>
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