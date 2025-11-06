import React from "react";

export default function Home({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Track Your Growth, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                One Vlog at a Time.
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
              Log your daily learning, share skill updates, and visualize your progress
              — all inside SkillSprint.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onStart}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md hover:scale-105 transform transition"
              >
                🚀 Start Your Journey
              </button>
              <a
                href="#features"
                className="px-6 py-3 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-50 transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="flex-1">
            <div className="relative w-full max-w-sm mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white p-4">
                <h3 className="text-lg font-semibold">React Practice</h3>
                <p className="text-sm opacity-90">Completed a mini-project today 🎉</p>
              </div>
              <div className="mt-4 text-gray-700 text-sm">
                “Built AddVlog and connected data locally. Learned about React hooks.”
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition">
                  Preview
                </button>
                <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition">
                  Share
                </button>
              </div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
                Demo Post
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-6">
        {[
          { label: "Total Practice Time", value: "12h 30m", icon: "⏱️" },
          { label: "Active Streak", value: "7 Days 🔥", icon: "🏆" },
          { label: "Skills Tracked", value: "React, Python", icon: "💡" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What Makes SkillSprint Unique?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          Beyond posts — SkillSprint is your personal growth diary. Visualize how your skills evolve every day.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎥"
            title="Micro-Vlogs"
            desc="Upload short daily video or text updates to track your learning visually."
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Insights"
            desc="Get insights about your consistency, most active skills, and total learning time."
          />
          <FeatureCard
            icon="🎯"
            title="Job-Ready Profile"
            desc="Your consistency speaks for you. Share your SkillSprint dashboard with employers."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto my-20 px-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold">Start Documenting Your Skills Today</h3>
            <p className="text-indigo-100 mt-2">
              Build proof of your learning journey — employers love consistent learners.
            </p>
          </div>
          <button
            onClick={onStart}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
