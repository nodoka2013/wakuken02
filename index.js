import { useState } from 'react';

const problems = {
  "2025-05-16": [
    {
      title: "構造 – 筋かいの意味を知った日",
      story: "1995年（今から約30年前）、阪神・淡路大震災が発生。木造住宅の倒壊率の高さから、筋かいの重要性が再認識された。",
      question: "なぜ筋かいは必要？",
      answer: "地震や風などの水平力に耐えるため。筋かいは耐力壁として、建物のねじれや倒壊を防ぐ役割を果たす。",
      keywords: ["筋かい", "耐力壁", "水平力", "バランス配置", "偏心"],
      exam_tip: "構造の選択肢で『筋かいは片側だけでも良い』という記述が出たら×。バランス配置が必要。"
    }
  ]
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("2025-05-16");
  const entries = problems[selectedDate] || [];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>わくわくこつこつけんちくちしき</h1>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setSelectedDate("2025-05-16")}>5/16</button>
      </div>
      {entries.map((problem, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 20 }}>
          <h2>{problem.title}</h2>
          <p>{problem.story}</p>
          <p><strong>{problem.question}</strong></p>
          <p>{problem.answer}</p>
          <p><strong>🧠 キーワード:</strong> {problem.keywords.join(" / ")}</p>
          <p><strong>📝 試験では:</strong> {problem.exam_tip}</p>
        </div>
      ))}
    </div>
  );
}
