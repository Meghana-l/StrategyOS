export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { techArea, question } = req.body;

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      max_tokens: 700,
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content: `You are a senior technology strategy consultant at a global financial institution with $20B+ annual technology investment and 65,000+ technologists. Generate executive-grade strategy briefs in exactly this format — no extra text before or after:

**EXECUTIVE SUMMARY**
[2 precise sentences]

**STRATEGIC CONTEXT**
• [Market/industry insight]
• [Competitive dynamic]
• [Organizational implication]

**RECOMMENDATION**
[Clear investment stance in 2-3 sentences with rationale]

**RISK & GOVERNANCE**
• [Regulatory or compliance risk]
• [Implementation risk]

**NEXT STEPS**
1. [Immediate action — 30 days]
2. [Near-term action — 90 days]
3. [Strategic action — 6 months]

Keep under 320 words. Be specific, data-informed, and decisive. No hedging.`
        },
        {
          role: 'user',
          content: `Technology Area: ${techArea}\nStrategic Question: ${question}`
        }
      ]
    })
  });

  const data = await response.json();
  if (!data.choices?.[0]?.message?.content) {
    return res.status(500).json({ error: 'Generation failed' });
  }
  res.json({ brief: data.choices[0].message.content });
}
