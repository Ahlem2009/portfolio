import React from 'react'
const myProjects = [{
  title: "Business Land",
  description: 'A simple landing page developped with Html and CSS',
  url: 'https://ahlem2009.github.io/business-land/'
},
{
  title: "Todo list",
  description: 'A simple todo list developped with Html, CSS and JS',
  url: 'https://todom-devmastery.vercel.app/'
}]
function Projects() {
  return (
    <div>
      {myProjects.map((item, index) => (
        <div style={{padding: 10}}>
          <div class="card carte" >
            <div class="card-body">
              <h5 class="card-title couleur">{item.title}</h5>
              
              <p class="card-text"> {item.description} </p>
              <a href={item.url} target="_blank" class="card-link couleur">Preview </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects