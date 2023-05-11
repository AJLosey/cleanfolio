const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AJLosey.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aaron Losey',
  description:
    'Aaron is an aspiring web developer living in San Antonio, Texas. He is on a mission to try one cheese from every country in the world. He gets along with others, quick learner, and is eager to start a new chapter in his life as a professional developer.',
  resume: 'https://drive.google.com/file/d/1svmCsDe8Un3r08_XMLwh3i6kywXOHv56/view?usp=sharing',
  social: {
    linkedin: "https://www.linkedin.com/in/aaron-losey-3b9a3b142/",
    github: "https://github.com/AJLosey",
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Old Portfolio',
  //   description:
  //     'My own version of this portfolio, built from scratch',
  //   stack: ['React'],
  //   sourceCode: "https://ajlosey.github.io/Portfolio/",
  //   livePreview: "https://github.com/AJLosey/Portfolio",
  // },
  {
    name: 'Trivia Quiz Website',
    description:
      'Where one can try various trivia quizzes',
    stack: ['MySQL', 'Express', "Handlebars"],
    sourceCode: "https://github.com/AJLosey/trivia-database/tree/AJLoseybranch",
    livePreview: "https://trivia-site-1.herokuapp.com/",
  },
  {
    name: 'Skynotes',
    description:
      'Find music based on the weather of your location',
    stack: ['Javascript', 'Materialize'],
    sourceCode: "https://github.com/AJLosey/Weather-music?organization=AJLosey&organization=AJLosey",
    livePreview: "https://ajlosey.github.io/Weather-music/",
  },
  {
    name: 'Text Editor',
    description:
      'Basic javascript practice; exactly what it says on the tin',
    stack: ['Javascript'],
    sourceCode: "https://github.com/AJLosey/text-editor",
    livePreview: "https://limitless-depths-34133.herokuapp.com/",
  },
  {
    name: 'Timed Code Quiz',
    description:
      'Basic javascript practice; learning how to implement a timer',
    stack: ['Javascript'],
    sourceCode: "https://github.com/AJLosey/code-quiz",
    livePreview: "https://ajlosey.github.io/code-quiz/",
  },
  {
    name: 'Note Taker',
    description:
      'Basic javascript practice; write and save notes',
    stack: ['Javascript'],
    sourceCode: "https://github.com/AJLosey/note-taker",
    livePreview: "https://sleepy-harbor-45737.herokuapp.com/",
  },
  {
    name: 'Biological Jargon Lorum Ipsum',
    description:
      'Filler text generator but it puts together silly words that sound like complicated biology jargon',
    stack: ['Javascript'],
    sourceCode: "https://github.com/AJLosey/Bio-Ipsum",
    livePreview: "https://ajlosey.github.io/Bio-Ipsum/",
  },
  {
    name: 'Codle',
    description:
      "It's like wordle but with coding terminology",
    stack: ['React', 'Tailwind', 'MongoDB', 'Express'],
    sourceCode: "https://github.com/AJLosey/Codle-1",
    livePreview: "https://codle-jsear.herokuapp.com/",
  },
  {
    name: 'Scheduler',
    description:
      'Basic javascript practice; can schedule events and keeps track of when things are',
    stack: ['Javascript'],
    sourceCode: "https://github.com/AJLosey/Calendar-project",
    livePreview: "https://ajlosey.github.io/Calendar-project/",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'DynamoDB',
  'SQL'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aaronlosey11@proton.me',
}

export { header, about, projects, skills, contact }
