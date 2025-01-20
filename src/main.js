import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
        <a href="./Assignment 01/Exquisite corpse final.png" target="_blank">
          <img src="./Assignment 01/Exquisite corpse final.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
          <div id="images">
  <a href="./Assignment 01/Exquisite corpse final D2L3.png" target="_blank">
    <img src="./Assignment 01/Exquisite corpse final D2L3.png" alt="cube1" />
  </a>
  <a href="./Assignment 01/Exquisite corpse final D2L4.png" target="_blank">
    <img src="./Assignment 01/Exquisite corpse final D2L4.png" alt="cube2" />
  </a>
  <a href="./Assignment 01/Exquisite corpse final D2L5.png" target="_blank">
    <img src="./Assignment 01/Exquisite corpse final D2L5.png" alt="cube3" />
  </a>
  <a href="./Assignment 01/Exquisite corpse final D2L6.png" target="_blank">
    <img src="./Assignment 01/Exquisite corpse final D2L6.png" alt="cube4" />
  </a>
</div>
          <h4 id="description">"Fragments of Resilience: A Journey Through Identity and Belonging" - This Cadavre Exquis reflects resilience, identity, and change, created by bringing together pieces of memory, culture, and belonging. By layering maps, buildings, and human figures, I aimed to show the journey of facing the challenges of immigration and personal growth. The process taught me that resilience isn’t just about surviving but about blending scattered pieces into a whole. I realized that cultural identity is flexible, shaped by both the places we leave and those we enter, and that belonging is not a final destination but an ongoing journey. Creating this collage became a way to explore myself—accepting flaws, overlaps, and changes as part of a bigger story. This work celebrates the beauty in brokenness and the strength in rebuilding.
</h4>
        </div>
      </div>
      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */ ""}
      ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
