import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import php from '../assets/php.svg';
import css from '../assets/css.svg';

import css2 from '../assets/icons/css2.svg';
import html from '../assets/icons/html.svg';
import gsap from '../assets/icons/gsap.svg';
import js from '../assets/icons/js.svg';
import next from '../assets/icons/next.svg';
import react2 from '../assets/icons/react2.svg';
import tailwind2 from '../assets/icons/tailwind2.svg';


export const projects = [
    {
        id: 1,
        imgUrl: project1,
        name: "To do list app",
        desc: "Streamline your tasks with my user-friendly to-do list app. Stay organized and productive effortlessly.",
        linkUrl: "https://todo-list-app-aeonzz.vercel.app/",
        type: "Personal project",
        tools: [
            {
                tool: react
            },
            {
                tool: tailwind
            }
        ]
    },
    {
        id: 2,
        imgUrl: project2,
        name: "E-commerse website",
        desc: "Shop the latest smartphones and accessories with ease on our premier e-commerce platform for tech enthusiasts.",
        linkUrl: "http://aeonz.atwebpages.com/users/index.php",
        type: "School project",
        tools: [
            {
                tool: php
            },
            {
                tool: css
            }
        ]
    }
];


export const icons = [
    { id: 1, logo: css2},
    { id: 2, logo: html},
    { id: 3, logo: gsap},
    { id: 4, logo: js},
    { id: 5, logo: next},
    { id: 6, logo: react2},
    { id: 7, logo: tailwind2},
]
