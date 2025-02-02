import React from "react";

const guidelineData = [
  "Read each question carefully.",
  "The answer for the previous question will be displayed below the next question.",
  "Questions are categorized into Easy, Medium, and Hard levels.",
  "Answering questions correctly earns you points based on the difficulty level: 1 point for Easy questions, 3 points for Medium questions, and 5 points for Hard questions.",
  "The question level increases for correct answers and decreases for wrong answers.",
  "Your language preference is considered from your profile section.",
  "Check your standings on the leaderboard section.",
  "Make sure to log in to get highlighted on the leaderboard.",
  "The proficiency level will be judged based on the accumulated points.",
  "Initially, multiple exercise attempts are allowed, but it will be limited to one later.",
  "All the best for your exams!",
  "New exercises will be available each week.",
];

const Guidelines = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden w-3/4 md:w-2/4 lg:w-2/5 p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4 md:text-center text-blue-600">
          Exercise Guidelines
        </h1>
        <div className="overflow-y-auto max-h-72 mb-6">
          <ul className="list-disc pl-6">
            {guidelineData.map((guideline, index) => (
              <li key={index} className="mb-2">
                {guideline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
