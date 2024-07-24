// pages/about.tsx
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div>
      {/* <Navbar /> */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
        <h1 className="text-6xl mb-4 animate-fadeIn">About Me</h1>
        <p className="text-2xl animate-fadeIn">I am a Web Developer with a passion for creating stunning websites.</p>
        <p className='animate-fadeIn'>Motivated IT professional with a strong foundation in cloud computing,
          web development, and network security. Dedicated to optimizing system
          performance, deploying innovate solutions, and staying current with industry
          trends. Seeking opportunties as a</p>

        <div className="mt-8">
          <h2 className="text-4xl">Work Experience</h2>
          <p className="text-xl">Web Developer at XYZ Company</p>
        </div>
        <div className="mt-8">
          <h2 className="text-4xl">Education</h2>
          <p className="text-xl">B.Sc. in Computer Science</p>
        </div>
      </section>
    </div>
  );
}
