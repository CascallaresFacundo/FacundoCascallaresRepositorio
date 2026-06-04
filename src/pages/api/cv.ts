import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const cvData = {
      name: "Facundo Cascallares",
      role: "Backend Developer",
      specialization: "Web and Mobile Applications",
      location: "Mar del Plata, Argentina",
      biography: "Software developer focused on server-side design, development, and optimization. Experienced in structuring efficient relational databases, automating workflows with scripts, and building robust REST APIs. Proven ability to work under Agile methodologies (Scrum), prioritizing clean code, database performance, and clear technical communication.",
      stack: [
        "Python (Django)",
        "Angular",
        "MySQL",
        "Java",
        "Git & GitHub",
        "REST APIs"
      ],
      experience: [
        {
          period: "2023 - Present",
          role: "Freelance Software Developer",
          company: "Freelance Digital Solutions",
          achievements: [
            "Designed and implemented high-performance web and mobile platforms optimized for speed, local SEO, and conversion.",
            "Built dynamic catalog systems by integrating data automation pipelines using Python and Google Services.",
            "Implemented secure payment gateway integrations handling asynchronous transaction workflows and webhooks."
          ]
        },
        {
          period: "2021 - Present",
          role: "B2B Sales & Operations Specialist",
          company: "Commerce & Distribution Sector",
          achievements: [
            "Managed commercial operations and optimized customer service workflows to improve client retention.",
            "Leveraged technical background and soft skills to gather and translate complex business requirements from real-world clients into technical specs."
          ]
        }
      ],
      contact: {
        linkedin: "https://www.linkedin.com/in/facundocascallares/",
        github: "https://github.com/CascallaresFacundo",
        portfolio: "https://facundocascallares.vercel.app/"
      },
      status: "Actively seeking professional opportunities in IT / Backend roles"
    };

    return new Response(JSON.stringify(cvData, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};