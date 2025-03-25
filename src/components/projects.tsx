// import Image from 'next/image';

// export default function Projects() {
//   return (
//     <section id="projects" className="py-5">
//       <div className="container">
//         <h2 className="text-center mb-4">Projects</h2>

//         {/* Kingdom Capitol */}
//         <div className="mb-5">
//           <div className="card">
//             <Image
//               src="/images/project/kingdom-capitol.png"
//               alt="Kingdom Capitol"
//               width={1200}
//               height={600}
//               className="card-img-top"
//             />
//             <div className="card-body">
//               <h5 className="card-title">CKD Risk Prediction Tool – Kingdom Capital XN Project</h5>
//               <p className="card-text">
//                 A data-driven healthcare tool developed to predict Chronic Kidney Disease (CKD) risk levels and support early detection and personalized care.
//               </p>
//               <h6>Role & Contributions</h6>
//               <ul>
//                 <li>Preprocessed clinical data using imputation (MICE) and class balancing (SMOTE)</li>
//                 <li>Engineered features and trained models (Logistic Regression, Random Forest) with 97.46% test accuracy</li>
//                 <li>Built a prototype in Streamlit for real-time CKD risk scoring</li>
//                 <li>Developed interactive Tableau dashboards for trend analysis</li>
//               </ul>
//               <h6>Technologies & Tools</h6>
//               <p>Python, Scikit-learn, Streamlit, Tableau, SMOTE, MICE</p>
//               <h6>Outcomes & Key Learnings</h6>
//               <p>Strengthened technical skills in predictive modeling, imputation, and app development. Gained experience applying data science to real-world healthcare challenges and working in a highly collaborative, interdisciplinary team.</p>
//             </div>
//           </div>
//         </div>

//         {/* NYPD Arrest Data */}
//         <div className="mb-5">
//           <div className="card">
//             <Image
//               src="/images/project/nypd-arrest.png"
//               alt="NYPD Arrest Data"
//               width={1200}
//               height={600}
//               className="card-img-top"
//             />
//             <div className="card-body">
//               <h5 className="card-title">NYPD Arrest Data Analysis</h5>
//               <p className="card-text">
//                 An analytical project exploring arrest patterns and crime trends across New York City using demographic and geographic data visualization.
//               </p>
//               <h6>Role & Contributions</h6>
//               <ul>
//                 <li>Performed exploratory data analysis on NYPD arrest records</li>
//                 <li>Visualized trends in offense categories, age, gender, and geography</li>
//                 <li>Conducted borough-wise mapping using Leaflet in R</li>
//                 <li>Compared model accuracy across classification techniques</li>
//               </ul>
//               <h6>Technologies & Tools</h6>
//               <p>R, ggplot2, Leaflet, dplyr, Tidyverse</p>
//               <h6>Outcomes & Key Learnings</h6>
//               <p>Strengthened skills in geospatial visualization, demographic analysis, and interpreting complex public datasets. Learned to uncover meaningful insights from real-world law enforcement data and communicate findings through clear visual storytelling.</p>
//             </div>
//           </div>
//         </div>

//         {/* Airbnb Insights */}
//         <div className="mb-5">
//           <div className="card">
//             <Image
//               src="/images/project/airbnb-insights.png"
//               alt="Airbnb Market Insights"
//               width={1200}
//               height={600}
//               className="card-img-top"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Airbnb Market Insights – Price & Listing Analytics</h5>
//               <p className="card-text">
//                 An interactive data storytelling project analyzing Airbnb listings in NYC to uncover pricing trends, room types, and neighborhood dynamics.
//               </p>
//               <h6>Role & Contributions</h6>
//               <ul>
//                 <li>Conducted in-depth EDA to explore relationships between price, reviews, and room types</li>
//                 <li>Created geospatial and correlation-based visualizations using Tableau and Python</li>
//                 <li>Analyzed listing behaviors over time and across neighborhoods to detect pricing patterns</li>
//                 <li>Collaborated on visual narrative development for clear stakeholder communication</li>
//               </ul>
//               <h6>Technologies & Tools</h6>
//               <p>Python, Tableau, Jupyter Notebook, Pandas, Matplotlib, Seaborn</p>
//               <h6>Outcomes & Key Learnings</h6>
//               <p>Improved data storytelling and visualization skills. Gained experience translating market data into business insights and communicating findings through dashboards, charts, and geospatial visuals.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from 'next/image';
import Carousel from './utils/owl-carousel'; // Make sure to import your Owl Carousel component

const projects = [
  {
    folder: 'ckd',
    files: [1, 2, 3, 4, 5],
    roleAndContributions: [
      'Preprocessed clinical data using imputation (MICE) and class balancing (SMOTE)',
      'Engineered features and trained models (Logistic Regression, Random Forest) with 97.46% test accuracy',
      'Built a prototype in Streamlit for real-time CKD risk scoring',
      'Developed interactive Tableau dashboards for trend analysis'
    ],
    technologies: 'Python, Scikit-learn, Streamlit, Tableau, SMOTE, MICE',
    outcomes: 'Strengthened technical skills in predictive modeling, imputation, and app development. Gained experience applying data science to real-world healthcare challenges and working in a highly collaborative, interdisciplinary team.'
  },
  {
    folder: 'nypd',
    files: [1, 2, 3, 4, 5, 6],
    roleAndContributions: [
      'Performed exploratory data analysis on NYPD arrest records',
      'Visualized trends in offense categories, age, gender, and geography',
      'Conducted borough-wise mapping using Leaflet in R',
      'Compared model accuracy across classification techniques'
    ],
    technologies: 'R, ggplot2, Leaflet, dplyr, Tidyverse',
    outcomes: 'Strengthened skills in geospatial visualization, demographic analysis, and interpreting complex public datasets. Learned to uncover meaningful insights from real-world law enforcement data and communicate findings through clear visual storytelling.'
  },
  {
    folder: 'airbnb',
    files: [1, 2, 3, 4, 5, 6],
    roleAndContributions: [
      'Conducted in-depth EDA to explore relationships between price, reviews, and room types',
      'Created geospatial and correlation-based visualizations using Tableau and Python',
      'Analyzed listing behaviors over time and across neighborhoods to detect pricing patterns',
      'Collaborated on visual narrative development for clear stakeholder communication'
    ],
    technologies: 'Python, Tableau, Jupyter Notebook, Pandas, Matplotlib, Seaborn',
    outcomes: 'Improved data storytelling and visualization skills. Gained experience translating market data into business insights and communicating findings through dashboards, charts, and geospatial visuals.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>

        {projects.map((project, index) => (
          <div className="mb-5" key={index}>
            <div className="card">
              {/* Owl Carousel */}
              <Carousel>
                {project.files.map((file, fileIndex) => (
                  <div className="item" key={fileIndex}>
                    <Image
                      src={`/images/project/${project.folder}/${file}.png`}
                      alt={`${project.folder} Image ${file}`}
                      width={1200}
                      height={600}
                      className="card-img-top"
                    />
                  </div>
                ))}
              </Carousel>

              <div className="card-body">
                <h5 className="card-title">{`${project.folder.charAt(0).toUpperCase() + project.folder.slice(1)} Project`}</h5>
                <p className="card-text">
                  Description of the {project.folder} project.
                </p>

                <h6 className="mt-4">Role & Contributions</h6>
                <ul style={{ fontFamily: 'inherit' }}>
                  {project.roleAndContributions.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>

                <h6 className="mt-4">Technologies & Tools</h6>
                <p>{project.technologies}</p>

                <h6 className="mt-4">Outcomes & Key Learnings</h6>
                <p>{project.outcomes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
