const jobList =[
    {
        id: 1,
        jobTitle: "Support Manager",
        company: "Customs4Trade",
        contractType: "Remote",
        from: "fev/2022",
        to: "Until now",
        place: "Mechelen, Belgium",
        description: "Overseeing end-to-end processing of import and export declarations, meticulously addressing any errors and promptly responding to CAS alerts. Offering strategic guidance to users, proactively upholding seamless client operations. Timely upkeep and availability of critical data. Proficiently documenting and resolving reported queries. Leveraging advanced tools and technologies such as JIRA, CAS System, VS Code, and FileZilla. Collaborating closely with the rest of the Customer Service and development teams to identify and address issues effectively.",
        companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQFXgtqIyhzagQ/company-logo_200_200/company-logo_200_200/0/1696867805502/customs4trade_logo?e=2147483647&v=beta&t=diLskN7lzhOWEJUWz6-_OptYGnp-d5nqATn50dWZ2Mg"
    },
    {
        id: 1,
        jobTitle: "Programming Assistant",
        company: "BFW Group",
        contractType: "Full Time",
        from: "Aug/2021",
        to: "Fev/2022",
        place: "Rio de Janeiro, Brazil",
        description: "I held a position in the Technology Development Department, located within the PMO (Project Management Office). Responsibilities included analyzing and implementing technical solutions for administrative and operational sectors, collaborating with Procurement and Information Technology teams, creating processes for new store expansion, enforcing technology-related compliance, and managing an in-house project to transition to Google Workspace.",
        companyLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQH0sdK5qdWE0A/company-logo_200_200/company-logo_200_200/0/1664337238246?e=2147483647&v=beta&t=w877otwWEe401vBRCsbmF1oCmOWEMYFrmvaWD08Ns0s"
    },
    {
        id: 3,
        jobTitle: "Salesman",
        company: "Tok&Stok",
        contractType: "Full Time",
        from: "Aug/2021",
        to: "Aug/2021",
        place: "Rio de Janeiro, Brazil",
        description: "As a Sales Associate at Tok&Stok, I played a pivotal role in delivering an exceptional customer experience. Armed with an in-depth understanding of our products and services, I worked to grasp each customer's unique needs and provide tailored solutions that cater to their requirements. Beyond nurturing strong customer relationships, I collaborated with team members to achieve collective sales goals, ensuring customer satisfaction and contributing to the overall success of the store.",
        companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptpi-s1p6gGUp-amCA4XaltRF48KjocpK6Q&s"
    },
    {
        id: 4,
        jobTitle: "Technical Sales Specialist",
        company: "Decathlon Brasil",
        contractType: "Full Time",
        from: "Jan/2019",
        to: "May/2021",
        place: "Rio de Janeiro, Brazil",
        description: "In the role of Technical Sales Specialist at Decathlon, I undertook the comprehensive management of a product family within the Wheels Universe. This encompassed delivering tailored technical advice and assistance to customers as per their specific requirements. I diligently ensured the high-quality display of products, overseeing stock replenishment, pricing strategies, and promotional activities. I assumed accountability for the economic performance of the designated product family and closely monitored store and section KPIs. I also assumed the regional focal point role for matters related to Customer Satisfaction, fostering seamless integration with the Customer Satisfaction Team. A key highlight was leading a sustainability project that involved active participation from Decathlon associates, showcasing my commitment to both the organization and environmental responsibility. A central aspect of my role involved generating insightful reports with data analysis to enrich our insights into Customer Satisfaction.",
        companyLogo: "https://raichu-uploads.s3.amazonaws.com/logo_decathlon_vWBQzN.png"
    },
    {
        id: 5,
        jobTitle: "Lead Interpreter Receptionist",
        company: "HStern",
        contractType: "Full Time",
        from: "Dez/2018",
        to: "Jan/2019",
        place: "Rio de Janeiro, Brazil",
        description: "Stepping into the role of Lead Interpreter Receptionist at Guided Tour H. Stern, I undertook the responsibility of micro-managing a team of 11 Guides. In this capacity, I ensured the seamless coordination and performance of the team members, facilitating their growth and success. Additionally, I provided valuable assistance during the onboarding process for new management, contributing to a smooth transition and effective integration.",
        companyLogo: "https://s3-sa-east-1.amazonaws.com/arrematearte-farm/authors/avatar_images/000/008/193/original/HStern-Arremate-Arte.jpeg?1647527937"
    },
    {
        id: 6,
        jobTitle: "Interpreter Receptionist",
        company: "HStern",
        contractType: "Full Time",
        from: "Jan/2017",
        to: "Dez/2018",
        place: "Rio de Janeiro, Brazil",
        description: "As an Interpreter Receptionist at Guided Tour H. Stern, I provided exceptional service to international clients, guiding them through every step of their experience within the corporate complex. My responsibilities encompassed offering essential information in various languages, ensuring clients received accurate and valuable support. Collaborating with a multicultural team, I fostered an inclusive and cooperative work environment. Through effective communication and cultural sensitivity, I played a key role in enhancing the overall visitor experience and promoting a welcoming atmosphere for all.",
        companyLogo: "https://s3-sa-east-1.amazonaws.com/arrematearte-farm/authors/avatar_images/000/008/193/original/HStern-Arremate-Arte.jpeg?1647527937"
    },
    {
        id: 7,
        jobTitle: "IOC Host",
        company: "iLUKA",
        contractType: "Temporary",
        from: "Jun/2016",
        to: "Aug/2016",
        place: "Rio de Janeiro, Brazil",
        description: "I proudly served as an IOC Host at iLUKA, where I engage with the International Olympic Committee and their esteemed guests as part of the IOC Hospitality Programme. This role entails representing iLUKA's client brands and delivering an exceptional hospitality experience. With a focus on providing warm 'meet and greet' services, offering crucial information, and ensuring seamless transitions, I contribute to a guest-centric atmosphere that exceeds expectations. By skillfully managing guest lists and embodying the essence of ambassadorship, I contribute to making each guest's journey with us remarkable and unforgettable.",
        companyLogo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/z0n0csmrjvfemosbnfnh"
    },
    {
        id: 8,
        jobTitle: "Cast Member",
        company: "Walt Disney World & Resorts",
        contractType: "Temporary",
        from: "Nov/2014",
        to: "Jan/2015",
        place: "Orlando, USA",
        description: "As a Cast Member at Walt Disney World Resort, I thrived in a dynamic role where I engaged in the sale of food and beverage within the internal restaurant of Disney's Caribbean Beach Resort. Working collaboratively within a large and diverse team, I embraced the opportunity to interact with guests from various cultures and linguistic backgrounds. My dedication was centered on delivering a remarkable and unforgettable experience to every guest who became part of our magical world. This role allowed me to foster connections not only with guests but also with fellow Cast Members, each bringing unique qualities and perspectives to the team. Through these interactions, I contributed to the creation of an exceptional atmosphere that embodied the essence of Disney's renowned hospitality and enchantment.",
        companyLogo: "https://i.pinimg.com/736x/a9/fc/e9/a9fce980c6fc82a043d42079b2af3eee.jpg"
    }
]

export default jobList;