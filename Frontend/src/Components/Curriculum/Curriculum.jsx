import { useState } from 'react';
import '../Curriculum/Curriculum.css';

function Curriculum() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="curriculum-section">
      <p className="curriculum-heading">CURRICULUM</p>
      <h4 className="curriculum-title">Preparing you to excel in the sports industry</h4>
      <p className="curriculum-description">
        The program is divided into two distinct phases: the PG Certificate in Sports Management and the European Master in Sports Management. This structure ensures a comprehensive blend of theoretical learning and practical application, preparing you to excel in the sports industry.
      </p>

      <div className="accordion-section">
        {[
          {
            title: "Phase 1: PG Certificate in Sports Management",
            content: `
              This phase consists of three semesters, offering specialized courses that provide foundational knowledge and practical skills essential for effective sports management.
              
              - Marketing and Sales Management (6 ECTS)
              Explore contemporary marketing theories and practices.
              Develop strategies to enhance brand visibility and customer loyalty in the competitive sports market.

              - Sports Facilities and Equipment (6 ECTS)
              Learn to design, plan, and manage sports infrastructures effectively.
              Gain insights into operational management and safety regulations for sports facilities.

              - Digital Transformation Management (6 ECTS)
              Understand the strategies needed for leading digital initiatives in the sports sector.
              Engage with multimedia content to foster a culture of continuous innovation.

              - Sports Marketing & Communications (6 ECTS)
              Delve into sports branding, sponsorship, public relations, and market research.
              Create compelling marketing campaigns and engage diverse audiences.

              - Business Strategy (6 ECTS)
              Analyze market structures and competitive dynamics.
              Develop strategies for internationalization and navigate global business challenges.

              - Legal Aspects of Sports Management (6 ECTS)
              Gain knowledge of sports law, contracts, regulatory compliance, and dispute resolution.
              Learn to address legal challenges in managing sports organizations and events.

              - Finance Management (6 ECTS)
              Master financial principles such as budgeting, financial statements, and variance analysis.
              Develop skills in long-term business planning and treasury operations.

              - Sports Services and Events in Facilities (6 ECTS)
              Learn to plan and execute successful sports events and manage services within facilities.
              Focus on event logistics, participant engagement, and operational efficiency.

              - Talent and People Management (6 ECTS)
              Explore strategic insights into managing human capital.
              Learn to leverage data analytics for effective talent acquisition and HR strategies.
            `,
          },
          {
            title: "Phase 2: European Master in Sports Management",
            content: `
              To obtain the European Master in Sports Management, graduates must complete a Master Thesis and a Professional Internship.

              - Master Thesis
              Conduct in-depth research on a sports management topic of your choice, exploring innovative solutions and strategies in the field.

              - Professional Internship
              Gain valuable hands-on experience by working within a sports organization.

              Apply theoretical frameworks and management strategies, contributing to the organization's growth.
            `,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`accordion ${activeAccordion === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h5>{item.title}</h5>
            {activeAccordion === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
