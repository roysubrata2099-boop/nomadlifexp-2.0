export interface Post {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image: string;
  relatedSlugs: string[];
  content: string;

  // ✅ SAFE SEO EXTENSIONS (DO NOT BREAK EXISTING DATA)
  canonical?: string;
  updatedDate?: string;
  readingTime?: number;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    title: "Can You Rebuild Your Attention Span After Years of Digital Distraction",
    slug: "attention-span-guide",
    description:
      "Learn how digital distraction weakens attention span and how to rebuild focus and deep work ability.",
    keywords: ["attention span", "focus", "deep work"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/attention-span.jpg",
    relatedSlugs: ["mental-clarity", "stop-procrastination", "discipline-creates-freedom"],
    content: `
<h1>Can You Rebuild Your Attention Span After Years of Digital Distraction</h1>

<p>Modern life has changed how attention works. Your inability to focus is not a defect. It is a result of constant digital interruption.</p>

<p>Every notification, every short video, and every switch in attention trains your brain to lose depth.</p>

<p>The good news is that attention can be rebuilt.</p>

<h2>The Protocol for Recovery</h2>

<p>Start with focused work blocks without distraction. Train your mind to stay in one task without switching.</p>

<p>Even five minutes of pure focus is powerful in the beginning.</p>
`
  },

  {
    title: "The Reason You Can’t Focus Even When You Try Hard",
    slug: "cant-focus",
    description: "Why focus breaks due to stress and mental overload.",
    keywords: ["focus", "stress", "overthinking"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/focus.jpg",
    relatedSlugs: ["mental-clarity", "attention-span-guide"],
    content: `
<h1>The Reason You Can’t Focus Even When You Try Hard</h1>

<p>You are not lazy. You are mentally overloaded. When your mind is full, focus naturally breaks.</p>

<h2>Why Focus Fails</h2>

<p>Too many thoughts, stress, and constant input reduce mental clarity and performance.</p>
`
  },

  {
    title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
    slug: "self-discipline-and-consistency-guide",
    description: "Discipline begins with attention. Learn how to rebuild self-control and consistency.",
    keywords: ["self discipline", "focus", "habits"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/discipline.jpg",
    relatedSlugs: [
      "mental-clarity",
      "attention-span-guide",
      "stop-procrastination",
      "discipline-creates-freedom"
    ],
    // 🔥 UPDATED: FULL WORD-BY-WORD DISCIPLINE CONTENT INJECTED HERE
    content: `
<h1>Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life</h1>

<p>Most people believe they lack discipline. They call themselves lazy, inconsistent, unmotivated. But the truth is more dangerous. The real problem is not weakness. The real problem is attention.</p>

<p>You sit down to focus, but a notification steals your mind. A quick scroll becomes an hour. A short video becomes a cycle. Discipline does not collapse in big failures. It collapses in small interruptions.</p>

<p><strong>Discipline breaks first in attention, not in action.</strong></p>

<h2>What Self Discipline Really Is</h2>

<p>Self discipline is not punishment. It is not restriction. It is not forcing yourself through suffering.</p>

<p>Self discipline is self leadership. It is the ability to act according to long-term direction instead of short-term emotion.</p>

<p>Every time you choose focus over distraction, you are not just completing a task. You are shaping identity.</p>

<p><em>Discipline is not behavior. It is identity in motion.</em></p>

<h2>Why Discipline Feels Hard Today</h2>

<p>It is not because people are weaker. It is because the environment is stronger.</p>

<p>Modern life is engineered for distraction. Social media, short content, endless entertainment, constant stimulation.</p>

<p>This creates:</p>
<ul>
  <li>Attention fragmentation</li>
  <li>Mental fatigue</li>
  <li>Low discomfort tolerance</li>
</ul>

<h2>The Hidden Cost of Weak Discipline</h2>

<p>Without discipline, life drifts. You delay work, restart goals, avoid decisions.</p>

<p>The real damage is internal — you stop trusting yourself.</p>

<h2>Discipline Is Not Found, It Is Built</h2>

<p>Discipline is a system outcome, not a personality trait.</p>

<p>Systems decide behavior when motivation disappears.</p>

<h2>The NomadLifeXP Discipline System</h2>

<ul>
  <li><strong>Awareness:</strong> Reclaim attention through silence and meditation.</li>
  <li><strong>Energy:</strong> Build body strength through fitness and breathwork.</li>
  <li><strong>Clarity:</strong> Reduce mental noise with single-direction focus.</li>
  <li><strong>Systems:</strong> Design environment, not willpower.</li>
  <li><strong>Identity:</strong> Become someone who keeps commitments.</li>
</ul>

<h2>Why Fitness, Yoga, and Meditation Matter</h2>

<p>They build internal stability and control over attention.</p>

<p>A distracted mind cannot build a disciplined life.</p>

<h2>The 7 Day Reset</h2>

<p>Day 1: Walk without phone</p>
<p>Day 2: Silent sitting</p>
<p>Day 3: Workout or yoga</p>
<p>Day 4: Focused task</p>
<p>Day 5: Remove distraction</p>
<p>Day 6: Reflection writing</p>
<p>Day 7: Morning without phone</p>

<h2>Why This Works</h2>

<p>Discipline is built through repetition, not intensity.</p>

<h2>Final Insight</h2>

<p>You do not need to become someone else. You need to remove what is blocking who you already are.</p>
`
  },

  {
    title: "Why People Watch Workout Videos but Never Actually Exercise",
    slug: "workout-videos-no-action",
    description: "Psychological trap of passive fitness consumption.",
    keywords: ["fitness", "procrastination"],
    author: "Nomad Life XP",
    date: "2026-06-25",
    category: "fitness",
    image: "https://nomadlifexp.com/images/workout.jpg",
    relatedSlugs: ["fitness-consistency", "self-discipline-and-consistency-guide"],
    // 🔥 UPDATED: FULL WORD-BY-WORD FITNESS CONTENT INJECTED HERE
    content: `
<h1>Why People Watch Workout Videos but Never Actually Exercise</h1>

<p>Watching fitness content feels motivating for a moment, but real change only happens through action.</p>

<p>Every day, millions of people watch workout videos but never act on them.</p>

<p>They save routines, feel inspired, and plan to start tomorrow.</p>

<p><strong>Inspiration feels like progress — but only action creates real change.</strong></p>

<h2>Why Watching Feels So Good</h2>

<p>Watching gives your brain a false sense of achievement.</p>

<p>You imagine transformation without doing the work.</p>

<p><em>Watching creates inspiration. Action creates transformation.</em></p>

<h2>Comfort Keeps People Stuck</h2>

<p>Comfort feels safe, but it prevents growth.</p>

<p>The life you want starts on the other side of discomfort.</p>

<h2>Why Motivation Fails</h2>

<p>Motivation is temporary. It comes and goes.</p>

<p>Consistency requires habits, not feelings.</p>

<p>Discipline is what works when motivation disappears.</p>

<h2>How to Break the Cycle</h2>

<p>Start small: walk, stretch, do 10 pushups.</p>

<p>Focus on consistency instead of perfection.</p>

<h2>Final Thoughts</h2>

<p>Watching can inspire you, but only action changes your life.</p>

<p>Your life changes when your habits change.</p>
`
  },

  {
    title: "Fitness Consistency: Build Workout Discipline That Lasts",
    slug: "fitness-consistency",
    description: "Build long-term fitness habits.",
    keywords: ["fitness", "consistency"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "fitness",
    image: "https://nomadlifexp.com/images/fitness.jpg",
    relatedSlugs: ["fitness-is-not-about-time"],
    content: `
<h1>Fitness Consistency</h1>

<p>Consistency matters more than motivation.</p>

<p>Small repeated actions build long-term results.</p>
`
  },

  {
    title: "Fitness Is Not About Time: Fix Your Workout Mindset",
    slug: "fitness-is-not-about-time",
    description: "Fix excuses around time and fitness.",
    keywords: ["fitness", "time management"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "fitness",
    image: "https://nomadlifexp.com/images/fitness2.jpg",
    relatedSlugs: ["fitness-consistency"],
    content: `
<h1>Fitness Is Not About Time</h1>

<p>You do not need more time. You need better structure.</p>
`
  },

  {
    title: "Mental Clarity: Stop Overthinking and Regain Focus",
    slug: "mental-clarity",
    description: "Clear your mind and improve focus.",
    keywords: ["mental clarity", "focus"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/mental.jpg",
    relatedSlugs: ["attention-span-guide"],
    content: `
<h1>Mental Clarity</h1>

<p>Overthinking creates mental noise. Clarity comes from reduction.</p>
`
  },

  {
    title: "Why You Procrastinate and How to Stop It",
    slug: "stop-procrastination",
    description: "Break procrastination cycles.",
    keywords: ["procrastination"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/procrastination.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
<h1>Stop Procrastination</h1>

<p>Procrastination is emotional resistance, not laziness.</p>
`
  },

  {
    title: "You Are Not Stuck in Life",
    slug: "stuck-in-life",
    description: "Break mental loops.",
    keywords: ["stuck", "clarity"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "mindset",
    image: "https://nomadlifexp.com/images/stuck.jpg",
    relatedSlugs: ["mental-clarity"],
    content: `
<h1>You Are Not Stuck</h1>

<p>You are repeating patterns, not stuck forever.</p>
`
  },

  {
    title: "Build Discipline Foundation",
    slug: "discipline-blog",
    description: "Core discipline system.",
    keywords: ["discipline"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/discipline2.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
<h1>Build Discipline Foundation</h1>

<p>Systems create discipline, not motivation.</p>
`
  },

  {
    title: "Discipline Creates Freedom",
    slug: "discipline-creates-freedom",
    description: "Structure creates freedom.",
    keywords: ["discipline", "freedom"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "discipline",
    image: "https://nomadlifexp.com/images/freedom.jpg",
    relatedSlugs: ["self-discipline-and-consistency-guide"],
    content: `
<h1>Discipline Creates Freedom</h1>

<p>Structure removes chaos and gives clarity.</p>
`
  },

  {
    title: "Forward Bending Yoga for Stress Relief",
    slug: "forward-bending",
    description: "Yoga for relaxation and flexibility.",
    keywords: ["yoga"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "yoga",
    image: "https://nomadlifexp.com/images/yoga1.jpg",
    relatedSlugs: ["headstand"],
    content: `
<h1>Forward Bending Yoga</h1>

<p>This posture helps relax the nervous system.</p>
`
  },

  {
    title: "Headstand Benefits for Body and Mind",
    slug: "headstand",
    description: "Yoga inversion benefits.",
    keywords: ["yoga"],
    author: "Nomad Life XP",
    date: "2026-06-24",
    category: "yoga",
    image: "https://nomadlifexp.com/images/yoga2.jpg",
    relatedSlugs: ["forward-bending"],
    content: `
<h1>Headstand Benefits</h1>

<p>Inversions improve focus and body awareness.</p>
`
  }
];