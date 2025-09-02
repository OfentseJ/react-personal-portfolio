export default function () {
  return (
    <section className="bg-sky-500 text-zinc-100 flex-col flex items-center space-y-8">
      <div className="flex flex-col px-10">
        <h1 className="font-bold text-2xl pb-4">About Me</h1>
        <div className="bg-sky-600 p-6 rounded-2xl border-2">
          <p>
            I am a dedicated and enthusiastic programmer seeking a practical
            opportunity to apply my knowledge of programming and problem-solving
            in a professional setting. With proficiency in Java and a strong
            willingness to learn emerging technologies, I am particularly drawn
            to the fields of web and software development. I am committed to
            making meaningful contributions to projects, collaborating with
            experienced professionals, and continuously advancing my technical
            and professional skills in a dynamic work environment.
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3>Database</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Time management</li>
            <li>Interpersonal</li>
            <li>Good Communication</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
