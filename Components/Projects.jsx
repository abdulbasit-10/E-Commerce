import React, { useEffect, useState } from 'react'
import left from '../src/assets/left_arrow.svg'
import right from '../src/assets/right_arrow.svg'
import projectsData from '../src/assets/project_img_1.jpg'
import projectsData1 from '../src/assets/project_img_2.jpg'
import projectsData2 from '../src/assets/project_img_3.jpg'
import projectsData3 from '../src/assets/project_img_4.jpg'
import projectsData4 from '../src/assets/project_img_5.jpg'
import projectsData5 from '../src/assets/project_img_6.jpg'

const Projects = () => {
  const projects = [
    { image: projectsData, title: "Project 1", price: "$10000", location: "New York" },
    { image: projectsData1, title: "Project 2", price: "$15000", location: "London" },
    { image: projectsData2, title: "Project 3", price: "$25000", location: "Paris" },
    { image: projectsData3, title: "Project 4", price: "$30000", location: "Dubai" },
    { image: projectsData4, title: "Project 5", price: "$50000", location: "Tokyo" },
    { image: projectsData5, title: "Project 6", price: "$60000", location: "Sydney" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projects.length) // show all on desktop
      } else {
        setCardsToShow(1) // show 1 on mobile
      }
    }
    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [projects.length])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    
    <div
      className="flex flex-col items-center container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* Projects Details */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building Legacies – Explore Our Portfolio
      </p>

      {/* Navigation */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={previousProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={left} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
        >
          <img src={right} alt="Next" />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full lg:w-1/4">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span> | </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
