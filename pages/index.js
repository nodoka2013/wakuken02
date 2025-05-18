
import { useState } from 'react';

const problems = {
  "2025-05-18": {
    "構造": [
      {
        title: "構造 – 筋かい（Q1）",
        story: "1995年の阪神・淡路大震災では筋かいの配置が不十分な住宅が倒壊した。",
        question: "筋かいの目的は？",
        answer: "水平力に抵抗し、倒壊を防ぐ。",
        keywords: ["筋かい", "水平力", "倒壊防止"],
        exam_tip: "筋かいの片側だけ配置は×。"
      }
    ],
    "法規": [
      {
        title: "法規 – 用途地域（Q1）",
        story: "都市計画法に基づき、用途地域ごとに建てられる建物の用途が制限されている。",
        question: "第1種低層住居専用地域で建てられない用途は？",
        answer: "パチンコ店などの風俗施設。",
        keywords: ["用途地域", "第1種低層", "制限用途"],
        exam_tip: "選択肢に『パチンコ店』が出たら×。"
      }
    ]
  }
};

export default function Home() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTheme, setSelectedTheme] = useState("構造");

  const entries = (problems[selectedDate] && problems[selectedDate][selectedTheme]) || [];
  const allDates = Object.keys(problems);
  const allThemes = problems[selectedDate] ? Object.keys(problems[selectedDate]) : [];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', maxWidth: 700, margin: 'auto' }}>
      <h1>わくわくこつこつけんちくちしき</h1>

      <div style={{ marginBottom: 10 }}>
        {allDates.map(date => (
          <button key={date} onClick={() => { setSelectedDate(date); setSelectedTheme("構造"); }} style={{ marginRight: 6 }}>
            {date.slice(5)}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        {allThemes.map(theme => (
          <button key={theme} onClick={() => setSelectedTheme(theme)} style={{ marginRight: 6 }}>
            {theme}
          </button>
        ))}
      </div>

      {entries.length === 0 && <p>この日・テーマの問題はまだありません。</p>}

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

      <div style={{ borderTop: '1px solid #ccc', paddingTop: 20, marginTop: 40 }}>
        <h2>💬 ChatGPTに質問する</h2>
        <textarea rows={3} placeholder="ここに質問を入力..." style={{ width: "100%", marginBottom: 10 }} />
        <button disabled style={{ backgroundColor: "#ccc", padding: "6px 12px", borderRadius: 4 }}>
          送信（※API連携準備中）
        </button>
        <p style={{ fontSize: 12, color: "#888" }}>この機能は近日中に有効になります。</p>
      </div>
    </div>
  );
}

