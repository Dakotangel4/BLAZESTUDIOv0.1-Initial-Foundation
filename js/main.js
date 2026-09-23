/**
 * main.js
 * Entry point — initialises all site modules.
 */
import { initNavigation } from './navigation.js';
import { initScrollReveal } from './animations.js';
import { initProjects } from './projects.js';

initNavigation();
initScrollReveal();
initProjects();
