import React from 'react'

const page = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
    <div className='text-white text-6xl animate-fadeIn'>
        My Skills
        <div className="mt-8">
          <h2 className="text-5xl animate-fadeIn">Skills</h2>
          <ul className="text-xl list-disc list-inside animate-fadeIn">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          {/* </ul>
          <ul> */}
                            <li>UI/UX Designing Web/App interfaces</li>
                                <li><span>Web Development</span> HTML/CSS/SASS, JavaScript, jQuery, Angular, React, React Native</li>
                                <li><span>App Development</span>Building Android/iOS apps</li>
                                <li><span>Design and Creativity</span>Adobe Creative Cloud/Suite, Blender</li>
                                <li><span>Database Management</span>MySQL, MongoDB, NoSQL,SQL, MariaDB</li>
                                <li><span>Programming Languages</span>C#, C++, Python, SQL, Java, Apple Xcode</li>
                                <li><span>Microsoft Technologies</span>Microsoft Endpoint Configuration Manager (MECM/SCCM), MS O365, MS Active
                                    Directory</li>
                        </ul>
        </div>
    </div>
    </section>
  )
}

export default page