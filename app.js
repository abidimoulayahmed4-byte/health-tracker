const { useState } = React;

const program = [
  {
    day: "اليوم 1",
    meals: [
      { name: "فطور: بيض + خبز كامل + خيار", quantity: "100g + 50g + 50g", calories: 250 },
      { name: "غداء: دجاج مشوي + سلطة + أرز بني", quantity: "150g + 100g + 100g", calories: 400 },
      { name: "عشاء: شوربة خضر", quantity: "200g", calories: 120 }
    ],
    drink: "كراوية",
    exercise: "مشي 30 دقيقة",
    goal: "تنظيم الدورة وتحسين الهضم"
  },
  {
    day: "اليوم 2",
    meals: [
      { name: "فطور: زبادي + بذور الشيا", quantity: "150g + 20g", calories: 200 },
      { name: "غداء: سمك + خضر مطبوخة", quantity: "150g + 100g", calories: 350 },
      { name: "عشاء: سلطة + تونة", quantity: "100g + 100g", calories: 250 }
    ],
    drink: "قرفة",
    exercise: "مشي 30 دقيقة",
    goal: "تنظيم السكر وتحسين الطاقة"
  },
  {
    day: "اليوم 3",
    meals: [
      { name: "فطور: بيض + أفوكادو", quantity: "100g + 50g", calories: 250 },
      { name: "غداء: لحم + سلطة + بطاطا", quantity: "150g + 100g + 100g", calories: 450 },
      { name: "عشاء: زبادي", quantity: "150g", calories: 100 }
    ],
    drink: "كراوية",
    exercise: "مشي 30 دقيقة",
    goal: "تعزيز العضلات وتحسين الهضم"
  },
  {
    day: "اليوم 4",
    meals: [
      { name: "فطور: زبادي + مكسرات", quantity: "150g + 30g", calories: 250 },
      { name: "غداء: دجاج + خضر + أرز بني", quantity: "150g + 100g + 100g", calories: 400 },
      { name: "عشاء: شوربة", quantity: "200g", calories: 120 }
    ],
    drink: "قرفة",
    exercise: "مشي 30 دقيقة",
    goal: "تنظيم الدورة وتحسين الهضم"
  },
  {
    day: "اليوم 5",
    meals: [
      { name: "فطور: بيض + خبز كامل", quantity: "100g + 50g", calories: 200 },
      { name: "غداء: سمك + سلطة", quantity: "150g + 100g", calories: 350 },
      { name: "عشاء: سلطة + بيض", quantity: "100g + 100g", calories: 250 }
    ],
    drink: "كراوية",
    exercise: "مشي 30 دقيقة",
    goal: "تنظيم السكر وتحسين الطاقة"
  },
  {
    day: "اليوم 6",
    meals: [
      { name: "فطور: زبادي + شيا", quantity: "150g + 20g", calories: 200 },
      { name: "غداء: لحم + خضر", quantity: "150g + 100g", calories: 400 },
      { name: "عشاء: شوربة", quantity: "200g", calories: 120 }
    ],
    drink: "قرفة",
    exercise: "مشي 30 دقيقة",
    goal: "تعزيز العضلات وتحسين الهضم"
  },
  {
    day: "اليوم 7",
    meals: [
      { name: "فطور: بيض + أفوكادو", quantity: "100g + 50g", calories: 250 },
      { name: "غداء: دجاج + سلطة", quantity: "150g + 100g", calories: 400 },
      { name: "عشاء: خفيف (زبادي أو فاكهة)", quantity: "150g", calories: 120 }
    ],
    drink: "كراوية",
    exercise: "مشي 30 دقيقة",
    goal: "راحة الجسم وتجديد الطاقة"
  }
];

function App() {
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <div className="day-card">
      <h1>{program[currentDay].day}</h1>
      <ul>
        {program[currentDay].meals.map((meal, index) => (
          <li key={index}>
            {meal.name} - الكمية: {meal.quantity} - السعرات: {meal.calories} kcal
          </li>
        ))}
      </ul>
      <p><strong>مشروب اليوم:</strong> {program[currentDay].drink}</p>
      <p><strong>تمرين:</strong> {program[currentDay].exercise}</p>
      <p><strong>هدف اليوم:</strong> {program[currentDay].goal}</p>
      <div>
        <button onClick={() => setCurrentDay(currentDay - 1)} disabled={currentDay === 0}>
          اليوم السابق
        </button>
        <button onClick={() => setCurrentDay(currentDay + 1)} disabled={currentDay === program.length - 1}>
          اليوم التالي
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
