import "../styles/ConsultationProcess.css";
import { FaSearch, FaCogs, FaProjectDiagram, FaRocket } from "react-icons/fa";

function ConsultationProcess() {

const steps = [
{
icon:<FaSearch />,
title:"Discovery",
desc:"We begin by understanding your business goals, challenges, and technical requirements."
},
{
icon:<FaProjectDiagram />,
title:"Planning",
desc:"Our experts design a strategy and architecture tailored to your business needs."
},
{
icon:<FaCogs />,
title:"Development",
desc:"We implement secure, scalable, and efficient technology solutions."
},
{
icon:<FaRocket />,
title:"Deployment",
desc:"Your solution is launched with continuous monitoring and support."
}
];

return (

<section  id="consultation-process" className="consultation">

<div className="consultation-container">

<h2>Our Consultation Process</h2>

<p className="consultation-sub">
A structured approach to delivering reliable and scalable IT solutions.
</p>

<div className="process-grid">

{steps.map((step,index)=>(
<div className="process-card" key={index}>

<div className="process-icon">
{step.icon}
</div>

<h3>{step.title}</h3>

<p>{step.desc}</p>

<span className="process-number">
0{index+1}
</span>

</div>
))}

</div>

</div>

</section>

);

}

export default ConsultationProcess;