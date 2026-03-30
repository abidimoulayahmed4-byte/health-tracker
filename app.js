const { useState, useEffect } = React;

function App() {
  // Poids
  const [weights, setWeights] = useState([]);
  const [weightInput, setWeightInput] = useState("");

  // Pas / distance
  const [distance, setDistance] = useState(0);
  const [position, setPosition] = useState({lat: null, lng: null});

  // Repas et calories
  const [meals, setMeals] = useState([]);

  // GPS
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition({lat: pos.coords.latitude, lng: pos.coords.longitude}),
        (err) => console.error(err)
      );
    }
  }, []);

  const addWeight = () => {
    if(weightInput > 0){
      setWeights([...weights, {day: weights.length+1, weight: Number(weightInput)}]);
      setWeightInput("");
    }
  };

  const simulateWalk = () => setDistance(distance + 0.5); // km

  const addMeal = () => {
    const mealName = prompt("اسم الوجبة:");
    const calories = prompt("عدد السعرات الحرارية:");
    if(mealName && calories) setMeals([...meals, {mealName, calories: Number(calories)}]);
  }

  return (
    <div>
      <h1>متتبع الصحة</h1>

      <div className="card">
        <h2>تتبع الوزن</h2>
        <input type="number" value={weightInput} onChange={e=>setWeightInput(e.target.value)} placeholder="وزنك بالكيلوغرام" />
        <button onClick={addWeight}>أضف وزن</button>
        <ul>
          {weights.map(w => <li key={w.day}>اليوم {w.day}: {w.weight} كغ</li>)}
        </ul>
      </div>

      <div className="card">
        <h2>تتبع المشي</h2>
        <p>إحداثيات: {position.lat?.toFixed(4)}, {position.lng?.toFixed(4)}</p>
        <p>المسافة المقطوعة: {distance.toFixed(2)} كم</p>
        <button onClick={simulateWalk}>أضف مسافة</button>
      </div>

      <div className="card">
        <h2>تتبع الوجبات</h2>
        <button onClick={addMeal}>أضف وجبة</button>
        <ul>
          {meals.map((m,i) => <li key={i}>{m.mealName} - {m.calories} سعر حراري</li>)}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
