import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ExpenseTracker,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React Developer",
        company_name: "Student",
        icon: starbucks,
        iconBg: "#383E56",
        date: "January 2022 - Present",
        points: [
            "Completed several freelance job requests as seen per testimonials",
            "Created two full stack projects, YelpCamp(Html, CSS, JS, Ejs, MongoDB, Express)",
            "Second full stack project Dev-Connect(React, Redux, Mui, Express, MongoDB)",
            "Github has many small learning projects, CRUD, Drag N Drops, Tables and Lists.",
        ],
    },
    {
        title: "Customer Delivery Specialist",
        company_name: "Dot Foods",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "March 2016 - April 2022",
        points: [
            "Route planning, determining traffic patterns, weather, road closures and vehicle restrictions",
            "Communicated with customers, coordinated arrival times, and delivery locations",
            "Broke down frieght on customer dock, accounted for any damaged, missing, or overages of product",
            "Maintained logs, Secured loads, Vehicle PMs, followed Rules and Regulations in accordance with DOT",
        ],
    },
    {
        title: "Marine",
        company_name: "USMC",
        icon: shopify,
        iconBg: "#383E56",
        date: "Sept 2007 - Sept 2015",
        points: [
            "Field Artillery Fire Controlman",
            "Marine Security Guard",
            "Marital Arts Instructor",
            "Operations Chief",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Effective work by Casey again! Totally recommended.",
        name: "Antonio",
        designation: "javascript-calculated fields in Database activity in moodle",
        company: "Upwork Client",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
    {
        testimonial:
            "Casey is great at what he does, he did a great and fast work. Other freelancers did not find where the problem was but Casey found the problem at a 1st view and solved it. Totally recommended. I will hire him again",
        name: "Antonio",
        designation: "javascript-calculated fields in Database activity in moodle",
        company: "Upwork Client",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Casey did exactly what I needed and he did it quickly. I didn't even need to request any revisions. His communication was excellent and I'm extremely pleased with the outcome.",
        name: "Jeff",
        designation: "Update HTML Table for Conference Program",
        company: "Joslex Studios",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "Amazing developer! Casey is so passionate about his development work. He cares for his clients. He accomplished the task in a clear and dedicated manner. I can tell he wants his customers to be happy. Hire him today. You will not regret it!!!",
        name: "Hishmat",
        designation: "Build Language Integration Web Module",
        company: "Thrift Labs",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
];

const projects = [
    {
        name: "Dev-Connect",
        description:
            "Web-based platform that allows IT field based engineers to socialize, network, learn, and assist each other.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/CaseyRay08/Dev-Connect",
    },
    {
        name: "YelpCamp",
        description:
            "Web application that enables users to add, edit, comment, review, and search for Camping locations",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/CaseyRay08/YelpCamp",
    },
    {
        name: "Clicker Challenge",
        description:
            "React based, Click on the screen and an icon will appear, change icon, remove click, re-apply click, reset",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "components",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/CaseyRay08/ClickerChallenge",
    },
    {
        name: "Expense-Tracker",
        description:
            "Expenses & budget tool ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "components",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: ExpenseTracker,
        source_code_link: "https://github.com/CaseyRay08/Expense-Tracker",
    },
    {
        name: "React Todo DnD",
        description:
            "React based, Click on the screen and an icon will appear, change icon, remove click, re-apply click, reset",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "components",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/CaseyRay08/ReactTodoDND",
    },
    {
        name: "React Todo List",
        description:
            "React based, Click on the screen and an icon will appear, change icon, remove click, re-apply click, reset",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "components",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/CaseyRay08/CreateReactTodoList",
    },
];

export { services, technologies, experiences, testimonials, projects };