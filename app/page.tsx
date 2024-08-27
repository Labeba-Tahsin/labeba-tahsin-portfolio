import { BlogPosts } from 'app/components/posts'


export default function Page() {
  return (
    <section>
      <div className="flex">
    <div className="w-25">
      <div className="mr-12">
        <div> 
          <img src="/images/profile-pic.jpeg" alt="profile pic" className="w-full max-w-[1100px]"/>
        </div>
        <div>
      <p className="mb-4 mt-6">
        <b>Email:</b> <a href="mailto:labeba.tahsin2023@gmail.com" className="text-neutral-600 dark:text-neutral-300">labeba.tahsin2023@gmail.com</a>  <a href="mailto:labeba.tahsin@gmail.com"  className="text-neutral-600 dark:text-neutral-300">labeba.tahsin@gmail.com</a> 
      </p>
      <p className="mb-4"><b>Mobile:</b> <span className="text-neutral-600 dark:text-neutral-300">+1-786-905-4266</span>
      </p>
        </div>
        <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/labebatahsin100200/"
          >
           <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
          </svg>


            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Labeba-Tahsin"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
            </svg>
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      </div>

    </div>
      <div className="w-75">
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Greetings, I'm Labeba Tahsin.
      </h1>
      <p className="mb-8">
        {`Deep learning and AI enthusiast with a strong foundation in full-stack development. With 3+ years of industry experience, I’m passionate about innovative research and solving complex challenges.`}
      </p>
      <h4 className="mt-4 mb-4 text-xl font-semibold tracking-tighter">Education</h4>
      <p className="mb-8">
        I completed my B.Sc. in Computer Science from Brac University, Bangladesh, where I contributed to research projects like dynamic object detection for assisting blind individuals, early diabetes prediction, and Cardano price prediction. My work on predicting COVID-19 severity using machine learning algorithms was published in the Springer <b>SIST</b> series
      (<a className="text-blue-600 underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://link.springer.com/chapter/10.1007/978-981-19-0011-2_7">Publication Link</a>).
      </p>
      <h4 className="mt-4 mb-4 text-xl font-semibold tracking-tighter">Experience</h4>
      <p className="mb-8">
        Following my academic pursuits,
         I gained over three years of experience as a <b>Software Engineer</b> at Brain Station 23, where I worked as a Full-Stack Developer. My role involved creating user-friendly applications, debugging code, and developing projects in HealthTech and FinTech using Python, JavaScript, Node.js, React.js, Angular and NextJS. I also mentored trainees and created tutorials for training purposes. My primary focus remains on advancing <b>deep learning</b> and <b>AI</b> research, and I am currently seeking research opportunities that align with my interests in these fields.
</p>
<h4 className="mt-4 mb-4 text-xl font-semibold tracking-tighter">Recent Works</h4>
      <div className="mb-8">
        <BlogPosts />
      </div>
      </div>
      </div>
    </section>
  )
}
