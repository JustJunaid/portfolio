import React from "react"

export default function ProjectDetails() {
  return (
    <section class="section bb-1 pt-0">
      <div class="container">
        <div className="pb-6">
          <h1 class="display-4">Personal Portfolio</h1>
          <p class="lead-2 mt-6">
            A design which specificly can be use for phone devices
          </p>
        </div>
        <div class="row">
          <div class="col-md-8 mb-6 mb-md-0">
            <img src="/assets/img/dummyProject.jpg" alt="project image" />
          </div>

          <div class="col-md-4">
            <h5>Project detail</h5>

            <p>
              Out or geared it but to best up samples the for she phase of copy
              would do in divine of taken and the take medical or upper at him
              in the logbook were, we price his mostly to commas.
            </p>

            <ul class="project-detail mt-7">
              <li>
                <strong>Skills</strong>
                <span>Design, HTML, CSS, Javascript</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
