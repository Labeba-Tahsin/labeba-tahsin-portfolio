import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hi, I'm Labeba Tahsin . . .
      </h1>
      <p className="mb-8">
        {`Deep learning and AI enthusiast with a strong foundation in full-stack development. With 3+ years of industry experience, I’m passionate about advancing innovative research and solving complex challenges.`}
      </p>
      <h4 className="mt-4 mb-8 text-xl font-semibold tracking-tighter">Education & Experience</h4>
      <p className="mb-4">
        {`I completed my B.Sc. in Computer Science from Brac University, Bangladesh, where I contributed to research projects like dynamic object detection for assisting blind individuals, early diabetes prediction, and Cardano price prediction. My work on predicting COVID-19 severity using machine learning algorithms was published in the Springer SIST series, where I served as the first author`}
      (<a className="text-blue-600 underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://link.springer.com/chapter/10.1007/978-981-19-0011-2_7">Publication Link</a>).
      </p>
      <p className="mb-8">
        {`Following my academic pursuits, I gained over three years of experience as a Software Engineer at Brain Station 23, where I worked as a Full-Stack Developer. My role involved creating user-friendly applications, debugging code, and developing projects in HealthTech and FinTech using Python, JavaScript, Node.js, React.js, Angular and NextJS. I also mentored trainees and created tutorials for training purposes. My primary focus remains on advancing deep learning and AI research, and I am currently seeking research opportunities that align with my interests in these fields.

`} </p>
<h4 className="mt-4 mb-8 text-xl font-semibold tracking-tighter">Recent Works</h4>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
