
import { useState } from 'react';

const problems = {
  "2025-05-16": [
    {
      title: "構造 – 筋かいと耐力壁の基本（Day 1 / Q1)",
      story: "1995年（今から約30年前）の阪神・淡路大震災では木造住宅の倒壊が問題となり、筋かいの重要性が見直された。",
      question: "Q1. 筋かいはなぜ必要？",
      answer: "A. 水平力に抵抗するため。バランスよく配置しないと偏心して倒壊の恐れあり。",
      keywords: ["筋かい", "耐力壁", "水平力", "バランス配置", "偏心"],
      exam_tip: "『筋かいは片側でOK』という記述は×。バランス配置が必要。"
    }
  ],
  "2025-05-17": [
    {
      title: "構造 – 筋かいと耐力壁の基本（Day 2 / Q1)",
      story: "同上",
      question: "Q1. なぜバランス配置が重要？",
      answer: "A. 偏心を防ぐため",
      keywords: ["偏心", "配置", "バランス"],
      exam_tip: "偏った配置 → ×"
    }
  ]
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("2025-05-16");
  const entries = problems[selectedDate] || [];
  const allDates = Object.keys(problems);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>わくわくこつこつけんちくちしき</h1>
      <div style={{ marginBottom: 20 }}>
        {allDates.map(date => (
          <button key={date} onClick={() => setSelectedDate(date)} style={{ marginRight: 8 }}>
            {date.slice(5)}
          </button>
        ))}
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
