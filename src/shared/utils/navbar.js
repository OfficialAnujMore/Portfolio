import { NAVIGATION_PATH } from './constant'
import WORD_DIR from '../local/en.js'

export const NAVBAR = [
    {
        title: WORD_DIR.home,
        navigationPath: NAVIGATION_PATH.home,
    },
    {
        title: WORD_DIR.aboutMe,
        navigationPath: NAVIGATION_PATH.aboutme,
    },
    {
        title: WORD_DIR.experience,
        navigationPath: NAVIGATION_PATH.experience,
    },
    // {
    //     title: 'Projects',
    //     navigationPath: NAVIGATION_PATH.projects,
    // },
    {
        title: WORD_DIR.education,
        navigationPath: NAVIGATION_PATH.education,
    },
    {
        title: WORD_DIR.certification,
        navigationPath: NAVIGATION_PATH.certification,
    },
    {
        title: WORD_DIR.contactMe,
        navigationPath: NAVIGATION_PATH.contactMe,
    },
]
